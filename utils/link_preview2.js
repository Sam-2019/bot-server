import fetch from "cross-fetch";
import request from "request";
import getUrls from "get-urls";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

const urlImageIsAccessible = async (url) => {
  const correctedUrls = getUrls(url);
  if (correctedUrls.size !== 0) {
    const urlResponse = await request(correctedUrls.values().next().value);
    const contentType = urlResponse.headers["content-type"];
    return new RegExp("image/*").test(contentType);
  }
};

const getTitle = async (window) => {
  const ogTitle = window.document.querySelector('meta[property="og:title"]');
  const twitterTitle = window.document.querySelector(
    'meta[name="twitter:title"]'
  );
  const docTitle = window.document.title;
  const h1 = window.document.querySelector("h1")
    ? window.document.querySelector("h1").innerHTML
    : null;
  const h2 = window.document.querySelector("h1")
    ? window.document.querySelector("h1").innerHTML
    : null;

  const data = {
    ogTitle:
      ogTitle != null && ogTitle.content.length > 0 ? ogTitle.content : null,
    twitterTitle:
      twitterTitle != null && twitterTitle.content.length > 0
        ? twitterTitle.content
        : null,
    docTitle: docTitle != null && docTitle.length > 0 ? docTitle : null,
    h1: h1 != null && h1.length > 0 ? h1 : null,
    h2: h2 != null && h2.length > 0 ? h2 : null,
  };

  const title =
    data.ogTitle || data.twitterTitle || data.docTitle || data.h1 || data.h2;

  return title;
};

const getDomainName = async (window, uri) => {
  const canonicalLink = await window.document.querySelector(
    "link[rel=canonical]"
  );
  const ogUrlMeta = await window.document.querySelector(
    'meta[property="og:url"]'
  );
  const data = {
    canonicalLink:
      canonicalLink != null && canonicalLink.href.length > 0
        ? canonicalLink.href
        : null,
    ogUrlMeta:
      ogUrlMeta != null && ogUrlMeta.content.length > 0
        ? ogUrlMeta.content
        : null,
  };

  const domainName = data.canonicalLink ? data.canonicalLink : data.ogUrlMeta;

  return domainName != null
    ? new URL(domainName).hostname.replace("www.", "")
    : new URL(uri).hostname.replace("www.", "");
};

const getDescription = async (window) => {
  const ogDescription = window.document.querySelector(
    'meta[property="og:description"]'
  );
  const twitterDescription = window.document.querySelector(
    'meta[name="twitter:description"]'
  );
  const metaDescription = window.document.querySelector(
    'meta[name="description"]'
  );

  let paragraphs = window.document.querySelectorAll("p");
  let fstVisibleParagraph = null;
  for (let i = 0; i < paragraphs.length; i++) {
    if (
      // if object is visible in window
      paragraphs[i].offsetParent !== null &&
      !paragraphs[i].childElementCount != 0
    ) {
      fstVisibleParagraph = paragraphs[i].textContent;
      break;
    }
  }

  const data = {
    ogDescription:
      ogDescription != null && ogDescription.content.length > 0
        ? ogDescription.content
        : null,
    twitterDescription:
      twitterDescription != null && twitterDescription.content.length > 0
        ? twitterDescription.content
        : null,
    metaDescription:
      metaDescription != null && metaDescription.content.length > 0
        ? metaDescription.content
        : null,
    fstVisibleParagraph:
      fstVisibleParagraph != null ? fstVisibleParagraph : null,
  };

  const description =
    data.ogDescription ||
    data.twitterDescription ||
    data.metaDescription ||
    data.fstVisibleParagraph;
  return description;
};

const getImg = async (window) => {
  // const nodeList =  window.document.body.getElementsByClassName('css-1dbjc4n r-18u37iz r-13qz1uu r-417010')
  // const nodeList =  window.document.body.getElementsByClassName('css-1dbjc4n r-1habvwh r-16xksha r-1wbh5a2')
  // /
  // for (let i = 0; i < nodeList.length; i++) {
  //   console.log(nodeList)
  // }

  const ogImg = window.document.querySelector('meta[property="og:image"]');
  const imgRelLink = window.document.querySelector('link[rel="image_src"]');
  const twitterImg = window.document.querySelector(
    'meta[name="twitter:image"]'
  );

  // console.log(ogImg)
  // let imgs = Array.from( window.document.getElementsByTagName("img"));

  // if (imgs.length > 0) {
  //   imgs = imgs.filter((img) => {
  //     let addImg = true;
  //     if (img.naturalWidth > img.naturalHeight) {
  //       if (img.naturalWidth / img.naturalHeight > 3) {
  //         addImg = false;
  //       }
  //     } else {
  //       if (img.naturalHeight / img.naturalWidth > 3) {
  //         addImg = false;
  //       }
  //     }
  //     if (img.naturalHeight <= 50 || img.naturalWidth <= 50) {
  //       addImg = false;
  //     }
  //     return addImg;
  //   });
  //   imgs.forEach((img) =>
  //     img.src.indexOf("//") === -1
  //       ? (img.src = `${new URL(uri).origin}/${src}`)
  //       : img.src
  //   );
  //  console.log(imgs[0])
  // }

  const data = {
    ogImg: ogImg != null && ogImg.content.length > 0 ? ogImg.content : null,
    imgRelLink:
      imgRelLink != null && imgRelLink.href.length > 0 ? imgRelLink.href : null,
    twitterImg:
      twitterImg != null && twitterImg.content.length > 0
        ? twitterImg.content
        : null,
  };
  const image = data.ogImg || data.imgRelLink || data.twitterImg;
  return image;
};

const getSiteName = async (window, text) => {
  const url = new URL(text);
  // const ogSiteName = window.document.querySelector(
  //   'meta[property="og:site_name"]'
  // );
  // const ogSiteName2 = window.document.querySelector('link[rel="site_name"]');
  // const data = {
  //   ogSiteName:
  //     ogSiteName != null && ogSiteName.content.length > 0
  //       ? ogSiteName.content
  //       : null,
  //   ogSiteName2:
  //     ogSiteName2 != null && ogSiteName2.content.length > 0
  //       ? ogSiteName2.content
  //       : null,
  // };
  // const siteName = data.ogSiteName || data.ogSiteName2;
  return url.hostname;
};

const getTwitterID = async (text) => {
  if (text.includes("twitter.com")) {
    const url = new URL(text);
    const words = url.pathname.split("/");
    return words[3];
  }

  return null;
};

export async function getLinkPreview(text) {
  const obj = {};

  const response = await fetch(text);
  const json = await response.text();
  const { window } = new JSDOM(json, {
    contentType: "text/html",
    includeNodeLocations: false,
  });

  obj.title = await getTitle(window);
  obj.description = await getDescription(window);
  obj.domain = await getDomainName(window, text);
  obj.imgURL = await getImg(window);
  obj.siteName = await getSiteName(window, text);
  obj.twitterID = await getTwitterID(text);
  obj.url = text;

  return obj;
}
