import { data } from "../../utils/constants.js";
import { Posts } from "../model/index.js"

export const saveItem = async (data) => {
  try {
    return await Posts(data).save();
  } catch (error) {}
};

export const getAll = async () => {
  try {
    return await Posts.find();
  } catch (error) {}
};

export const getNews = async () => {
  try {
    return await Posts.find({ type: data.news.name });
  } catch (error) {}
};

export const getArt = async () => {
  try {
    return await Posts.find({ type: data.art.name });
  } catch (error) {}
};

export const getMovies = async () => {
  try {
    return await Posts.find({ type: data.movies.name });
  } catch (error) {}
};

export const getTwitter = async () => {
  try {
    return await Posts.find({ type: data.twitter.name });
  } catch (error) {}
};

export const getJobs = async () => {
  try {
    return await Posts.find({ type: data.jobs.name });
  } catch (error) {}
};
