import { linkPreviewGenerator } from "./link_preview.js";
import { types } from "./switches.js";

export const postTransformer = async (url) => {
  const info = await linkPreviewGenerator(url);

  if (!info) {
    return "Unsupported website";
  }

  const output = types(info, url);
  return `saved ${output}`;
};
