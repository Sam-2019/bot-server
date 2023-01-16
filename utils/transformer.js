import { linkPreviewGenerator } from "./link_preview.js";
import { types } from "./switches.js";

export const postTransformer = async (url) => {
  if (!url) {
    return "Unsupported website";
  }

  const info = await linkPreviewGenerator(url);

  const output = types(info, url);
  return `saved ${output}`;
};
