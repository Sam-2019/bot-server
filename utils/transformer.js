import { getLinkPreview } from "link-preview-js";
import { types } from "./switches.js";

export const postTransformer = async (url) => {
  const info = await getLinkPreview(url);

  if (!info) {
    return "Unsupported website";
  }

  const output = types(info);
  return `saved ${output}`;
};

