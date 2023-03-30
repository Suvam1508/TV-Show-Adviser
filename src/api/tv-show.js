import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake-data";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowApi {
  static async fetchPopulars() {
    //Perform Request
    // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    // //return the response
    // console.log(response.data.results);
    // return response.data.results;
    return FAKE_POPULARS;
  }
  static async fetchRecommendations(tvShowId) {
    //Perform Request
    // const response = await axios.get(
    //   `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    // );
    // //return the response
    // return response.data.results;
    return FAKE_RECOMMENDATIONS;
  }
}
