import React from 'react';
import { Helmet } from 'react-helmet';

function HeadMetaTag({
  title = null,
  canonical = null,
  metaUrl = null,
  metaTitle = null,
  metaDezcription = null,
  metaImageUrl = null
}) {
  return (
    <Helmet>
      {/* Meta */}
      {title && <title>{title}</title>}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* Facebook */}
      {metaUrl && <meta property="og:url" content={metaUrl} />}
      {metaTitle && <meta property="og:title" content={metaTitle} />}
      {metaDezcription && (
        <meta property="og:description" content={metaDezcription} />
      )}
      {metaImageUrl && <meta property="og:image" content={metaImageUrl} />}
      {/* Twitter */}
      {metaUrl && <meta property="twitter:url" content={metaUrl} />}
      {metaTitle && <meta property="twitter:title" content={metaTitle} />}
      {metaDezcription && (
        <meta property="twitter:description" content={metaDezcription} />
      )}
      {metaImageUrl && <meta property="twitter:image" content={metaImageUrl} />}
    </Helmet>
  );
}

export default HeadMetaTag;
