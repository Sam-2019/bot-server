const { data } = require("../../utils/constants");
const { Posts } = require("../model");

const saveItem = async (data) => {
  try {
    return await Posts(data).save();
  } catch (error) {}
};

const getAll = async () => {
  try {
    return await Posts.find();
  } catch (error) {}
};

const getNews = async () => {
  try {
    return await Posts.find({ type: data.news.name });
  } catch (error) {}
};

const getArt = async () => {
  try {
    return await Posts.find({ type: data.art.name });
  } catch (error) {}
};

const getMovies = async () => {
  try {
    return await Posts.find({ type: data.movies.name });
  } catch (error) {}
};

const getTwitter = async () => {
  try {
    return await Posts.find({ type: data.twitter.name });
  } catch (error) {}
};

const getJobs = async () => {
  try {
    return await Posts.find({ type: data.jobs.name });
  } catch (error) {}
};

module.exports = {
  saveItem,
  getAll,
  getNews,
  getArt,
  getMovies,
  getTwitter,
  getJobs,
};
