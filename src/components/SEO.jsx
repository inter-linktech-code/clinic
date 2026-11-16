
import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  noindex = true,
  canonical,
  image,
}) {
  const siteName = "Sarah's Women's Clinic";

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large"
        }
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {image && <meta property="og:image" content={image} />}

      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}

export default SEO;
