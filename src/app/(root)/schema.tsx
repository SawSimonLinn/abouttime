// app/(root)/schema.tsx
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "AboutTime Café",
    url: "https://abouttime.cafe",
    image: "https://abouttime.cafe/og.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3287 Wilshire Blvd",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90010",
      addressCountry: "US",
    },
    openingHours: ["Mo-Sa 08:00-01:00", "Su 08:00-00:00"],
    servesCuisine: ["Coffee", "Tea", "Pastries", "Sandwiches"],
    priceRange: "$$",
    telephone: "+1-XXX-XXX-XXXX",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
