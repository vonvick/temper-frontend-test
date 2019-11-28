import axios from "axios";
import VUE_APP_API_URL from "@/constants/api";

export default {
  fetchPostsList: () => {
    return axios.get(`${VUE_APP_API_URL}/posts`);
  }
};
