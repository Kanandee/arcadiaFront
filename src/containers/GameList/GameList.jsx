import React, { useEffect, useState } from "react";
import GameService from "../../_services/GameService";
import Game from "../../components/Game/Game";
import "./GameList.scss"

export default function GameList() {
   const [games, setGames] = useState([]);
   useEffect(() => { getAllGames(); }, []);

   const getAllGames = async () => {
      try {
         const res = await GameService.getAllGames();
         setGames(res.data.results);
      } catch (error) {
         console.log(error.message || error);
      }
   };

   return (
      <div className="game-list">
         <div className="container-fluid pt-5 pb-5 justify-content-center d-flex flex-wrap">
            <h1 className="h3 mb-5">¡No te pierdas las ultimas novedades!</h1>
            <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
               {games.length > 0 &&
                  games.map((game) => <Game key={game._id} game={game} />)}
            </div>
         </div>
      </div>
   );

}
