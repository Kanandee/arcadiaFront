import axios from "axios";
import TokenStorageService from "./TokenStorageService";
import { environment } from "../_environmets/environment";

const GameService = {};

GameService.getAllGames = async (page = 1) => {
   const apiUrl = `${environment.BASE_API_URL}/games`;
   const token = TokenStorageService.getToken();
   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };
   return await axios.get(apiUrl, config);
};

GameService.getSingleGame = async (id) => {
   const apiUrl = `${environment.BASE_API_URL}/games/${id}`;

   return await axios.get(apiUrl);
};

export default GameService;
