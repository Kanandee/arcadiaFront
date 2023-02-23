import axios from "axios";
import { environment } from "../_environmets/environment";

const GameService = {};

GameService.getAllGames = async (page = 1) => {
   const apiUrl = `${environment.BASE_API_URL}/games`;
   return await axios.get(apiUrl);
};

GameService.getSingleGame = async (id) => {
   const apiUrl = `${environment.BASE_API_URL}/games/${id}`;

   return await axios.get(apiUrl);
};

export default GameService;
