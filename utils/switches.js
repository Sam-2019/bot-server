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

export const types = async (info) => {
 console.log(info);
 const data = {
  title: info.title ? info.title : "",
  description: info.description ? info.description : "",
  domain: info.domain ? info.domain : "",
  imgURL: info.img ? info.img : "",
  favicon: info.favicon ? info.favicon : "",
  url: info.url ? info.url : "",
  siteName: info.sitename ? info.sitename : "",
 };

 await saveItem(data);
 return "success";
};
