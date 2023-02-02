// import { getLinkPreview } from "link-preview-js";
import { linkPreviewGenerator } from "./link_preview.js";
import { types } from "./switches.js";

export const postTransformer = async (url) => {
 const info = await linkPreviewGenerator(url);

 if (!info) {
  return "Unsupported website";
 }

 const output = await types(info);
 return String(output);
};
