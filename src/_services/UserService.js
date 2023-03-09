import axios from "axios";
import TokenStorageService from "./TokenStorageService";
import { environment } from "../_environmets/environment";

const UserService = {};

UserService.getAllUsers = async () => {
   const apiUrl = environment.BASE_API_URL + "/users";
   const token = TokenStorageService.getToken();
   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   return await axios.get(apiUrl, config);
};

UserService.getUserInfo = async (id) => {
   const apiUrl = environment.BASE_API_URL + "/users/" + id;
   const token = TokenStorageService.getToken();
   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   return await axios.get(apiUrl, config);
};

UserService.deleteUser = async (id) => {
   const apiUrl = environment.BASE_API_URL + "/users/" + id + "/delete";
   const token = TokenStorageService.getToken();
   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   return await axios.delete(apiUrl, config);
};

UserService.confirmBuy = async (games) => {
   const apiUrl = environment.BASE_API_URL + "/users/buy/141";
   const token = TokenStorageService.getToken();
   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   return await axios.post(apiUrl, config);
};

export default UserService;
