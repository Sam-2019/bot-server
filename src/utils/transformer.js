const linkPreviewGenerator = require("link-preview-generator");
const { types } = require("./switches");

const postTransformer = async (url) => {
  const info = await linkPreviewGenerator(url);

  console.log(info);

  if (!info) {
    return "Unsupported website";
  }

  const output = types(info, url);
  return `saved ${output}`;
};

module.exports = {
  postTransformer,
};
