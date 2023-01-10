const { data } = require("./constants");
const {
  getAll,
  saveItem,
  getArt,
  getMovies,
  getTwitter,
  getJobs,
} = require("../db/repository");

const switch_route = (type) => {
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

const types = (info, url) => {
  const trim_url = url.split("?");

  if (data.news.sites.includes(info.domain)) {
    console.log(data.news.name);
    const add = { type: data.news.name, url: trim_url[0] };
    const merge = { ...info, ...add };
    saveItem(merge);
    return "success";
  }

  if (data.art.sites.includes(info.domain)) {
    console.log(data.art.name);
    const add = { type: data.art.name, url: trim_url[0] };
    const merge = { ...info, ...add };
    saveItem(merge);
    return "success";
  }

  if (data.movies.sites.includes(info.domain)) {
    console.log(data.movies.name);
    const add = { type: data.movies.name, url: trim_url[0] };
    const merge = { ...info, ...add };
    saveItem(merge);
    return "success";
  }

  if (data.jobs.sites.includes(info.domain)) {
    console.log(data.jobs.name);
    const add = { type: data.jobs.name, url: trim_url[0] };
    const merge = { ...info, ...add };
    saveItem(merge);
    return "success";
  }

  if (data.twitter.sites.includes(info.domain)) {
    console.log(data.twitter.name);
    const add = { type: data.twitter.name, url: trim_url[0] };
    const merge = { ...info, ...add };
    saveItem(merge);
    return "success";
  }
};

module.exports = {
  switch_route,
  types,
};
