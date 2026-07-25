import { NextResponse } from "next/server";

type LeadBody = {
  storeName?: string;
  contactName?: string;
  phone?: string;
  city?: string;
  isFnb?: "是" | "否";
  fnbType?: string;
  needEinvoice?: "是" | "否";
  note?: string;
};

function clean(value: unknown, max = 80) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, max);
}

export async function POST(request: Request) {
  let body: LeadBody;

  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json(
      { success: false, message: "表單格式錯誤" },
      { status: 400 }
    );
  }

  const storeName = clean(body.storeName, 60);
  const contactName = clean(body.contactName, 40);
  const phone = clean(body.phone, 30);
  const city = clean(body.city, 20);
  const isFnb = body.isFnb === "否" ? "否" : "是";
  const fnbType =
    isFnb === "否" ? "非餐飲" : clean(body.fnbType, 40) || "未指定";
  const needEinvoice = body.needEinvoice === "否" ? "否" : "是";
  const note = clean(body.note, 200);

  if (!storeName || !phone || !city) {
    return NextResponse.json(
      { success: false, message: "請填寫店名、聯絡電話與營業縣市" },
      { status: 400 }
    );
  }

  if (!/^[\d+\-\s#()]{8,30}$/.test(phone)) {
    return NextResponse.json(
      { success: false, message: "請輸入有效的聯絡電話" },
      { status: 400 }
    );
  }

  const baseUrl = (
    process.env.CRM_BASE_URL || "https://takocrm.onrender.com"
  ).replace(/\/$/, "");
  const secret = process.env.CRM_PUSH_API_SECRET?.trim();

  if (!secret) {
    return NextResponse.json(
      {
        success: false,
        message: "預約系統尚未設定完成，請改撥電話或寄信聯絡我們",
      },
      { status: 503 }
    );
  }

  const summaryParts = [
    `店名：${storeName}`,
    contactName ? `聯絡人：${contactName}` : "",
    note ? `備註：${note}` : "",
    "官網免費預約體驗",
  ].filter(Boolean);

  const payload = {
    "LINE UserID": "",
    是否餐飲: isFnb,
    餐飲類型: fnbType,
    需電子發票: needEinvoice,
    營業縣市: city,
    聯絡電話: phone,
    摘要: summaryParts.join("｜"),
    來源: "官網預約體驗",
    operator: "takopos-web",
  };

  try {
    const res = await fetch(`${baseUrl}/api/line/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CRM-Push-Secret": secret,
      },
      body: JSON.stringify(payload),
    });

    const data = (await res.json().catch(() => null)) as {
      success?: boolean;
      msg?: string;
      潛客編號?: string;
    } | null;

    if (!res.ok || !data?.success) {
      return NextResponse.json(
        {
          success: false,
          message: data?.msg || "送出失敗，請稍後再試或改用電話聯繫",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      leadNo: data.潛客編號 || "",
      message: "已收到您的預約，業務將盡快與您聯繫",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "無法連線預約系統，請稍後再試" },
      { status: 502 }
    );
  }
}
