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
         setGames(null);
         console.log(error.message || error);
      }
   };

   if (!games) {
      return (
         <div>
            <div class="alert alert-danger" role="alert">
               ¡Haz login!
            </div>
            <img src="src\assets\codegeas.gif" alt=".." />
         </div>

      );
   } else {
      return (
         <div className="game-list">
            <div className="container-fluid pt-5 pb-5 justify-content-center d-flex flex-wrap">
               <h1 className="header-list h3 mb-5">¡No te pierdas las ultimas novedades!</h1>
               <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
                  {games.length > 0 &&
                     games.map((game) => <Game key={game._id} game={game} />)}
               </div>
            </div>
         </div>
      );
   }
}
