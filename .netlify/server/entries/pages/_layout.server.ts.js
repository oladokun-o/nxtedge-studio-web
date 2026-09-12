import { c as client } from "../../chunks/client.js";
const studioSettingsQuery = `*[_type == "studioSettings"][0] {
  _id, siteTitle, tagline, heroHeading, heroBio,
  aboutHeading, aboutBody,
  email, phone, linkedIn, instagram, calendarLink,
  logo { asset, hotspot, crop },
  ogImage { asset, hotspot, crop },
  metaTitle, metaDescription
}`;
const load = async () => {
  const settings = await client.fetch(studioSettingsQuery);
  return { settings };
};
export {
  load
};
