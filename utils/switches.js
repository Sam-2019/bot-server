import { data } from "./constants.js";
import {
  getAll,
  saveItem,
  getArt,
  getMovies,
  getTwitter,
  getJobs,
} from "../db/repository/index.js";

export const switch_route = (type) => {
  let repository;

  switch (type) {
    case data.news.name:
      repository = getNews();
      break;

    case data.art.name:
      repository = getArt();
      break;

    case data.movies.name:
      repository = getMovies();
      break;

    case data.twitter.name:
      repository = getTwitter();
      break;

    case data.jobs.name:
      repository = getJobs();
      break;

    default:
      repository = getAll();
  }
  return repository;
};

export const types = (info) => {
  const data = {
    title: info.title ? info.title : null,
    description: info.description ? info.description : null,
    domain: info.domain ? info.domain : null,
    imgURL: info.image ? info.image[0] : null,
    favicon: info.favicon ? info.favicon : null,
    url: info.url ? info.url : null,
    siteName: info.siteName ? info.siteName : null,
    twitterID: info.twitterID ? info.twitterID : null,
  };

  saveItem(data);
  return "success";
};
