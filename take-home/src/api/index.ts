import axios from "axios";

export async function getAllCommits(url: string, page: number) {
  try {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const baseUrl = process.env.API;
    const arrayUrl = url.split("/").filter((element) => element !== "");
    const response = await axios.post(`${baseUrl}commit`, {
      owner: arrayUrl[arrayUrl.length - 2],
      repo: arrayUrl[arrayUrl.length - 1],
      skip: page,
      limit: 10,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
