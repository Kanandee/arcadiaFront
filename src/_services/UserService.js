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

UserService.modifyUser = async (newData, id) => {
   const apiUrl = environment.BASE_API_URL + "/users/" + id + "/update";
   const token = TokenStorageService.getToken();
   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   return await axios.put(apiUrl, { name: newData.name, email: newData.email }, config);
};

UserService.confirmBuy = async (games) => {
   for (const n in games) {
      const apiUrl = `${environment.BASE_API_URL}/users/buy/${games[n]}`;
      const token = TokenStorageService.getToken();
      const config = {
         headers: { Authorization: `Bearer ${token}` },
      };
      await axios.post(apiUrl, {}, config);
   }
};

UserService.deleteBuy = async (gameid) => {
   const apiUrl = environment.BASE_API_URL + "/users/remove/" + gameid;
   console.log(apiUrl)
   const token = TokenStorageService.getToken();
   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };
   return await axios.delete(apiUrl, config);
};

export default UserService;
