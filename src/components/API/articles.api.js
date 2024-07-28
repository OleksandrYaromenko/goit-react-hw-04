import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
export const FechArticles = async (topic, page) => {
  const results = await axios.get(`/search/photos`, {
    params: {
      query: topic,
      page: page,
      per_page: 12,
      client_id: "xpSRSmDQWhP5U1mXscZhRKuLWymNxqd_rVhUFDssqgs",
      orientation: "landscape",
    },
  });
  return results.data.results;
};
