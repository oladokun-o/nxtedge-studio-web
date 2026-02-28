// GROQ queries for the Nxtedge Studio site
// All data lives in the shared Sanity project used by oladokun.me

export const studioSettingsQuery = `*[_type == "studioSettings"][0] {
  _id, siteTitle, tagline, heroHeading, heroBio,
  aboutHeading, aboutBody,
  email, phone, linkedIn, instagram, calendarLink,
  logo { asset, hotspot, crop },
  ogImage { asset, hotspot, crop },
  metaTitle, metaDescription
}`;

export const studioServicesQuery = `*[_type == "studioService"] | order(order asc) {
  _id, title, description, icon, tags
}`;

// Studio portfolio — projects built under the Nxtedge Studio brand
export const studioProjectsQuery = `*[_type == "project" && builtAtStudio == true] | order(order asc) {
  _id, title, slug, summary, coverImage, tags, client, liveUrl
}`;
