import axios from "axios";
import TokenStorageService from "./TokenStorageService";
import { environment } from "../_environmets/environment";

const UserService = {};

UserService.getUserInfo = async (id) => {
   const apiUrl = environment.BASE_API_URL + "/users/" + id;
   const token = TokenStorageService.getToken();
   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   return await axios.get(apiUrl, config);
};

export default UserService;
