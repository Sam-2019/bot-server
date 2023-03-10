// import { getLinkPreview } from "link-preview-js";
import { getLinkPreview } from "./link_preview2.js";
import { types } from "./switches.js";

export const postTransformer = async (url) => {
 const info = await getLinkPreview(url);

  if (!info) {
   return "Unsupported website";
 }

 const output = types(info);
 return String(output);
};
