import {
  getOrganizationJsonLd,
  getSoftwareApplicationJsonLd,
  getWebSiteJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export function SiteJsonLd() {
  const graphs = [
    getOrganizationJsonLd(),
    getSoftwareApplicationJsonLd(),
    getWebSiteJsonLd(),
  ];

  return (
    <>
      {graphs.map((data) => (
        <script
          key={String((data as { "@type": string })["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
        />
      ))}
    </>
  );
}
