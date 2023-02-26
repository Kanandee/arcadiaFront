import React, { useState, useEffect } from "react";
import GameService from "../../_services/GameService";
import "./GameDetail.scss";
import { useParams } from "react-router-dom";

export default function GameDetail() {
   const [game, setGame] = useState({});
   const { id } = useParams();

   useEffect(() => {
      getSingleGame();
   }, []);

   const getSingleGame = async () => {
      try {
         const details = await GameService.getSingleGame(id);
         setGame(details.data.results);
         console.log("Retrieving game details", details.data.results);
      } catch (error) {
         setGame(null);
         console.log(error.message || error);
      }
   };
   if (!game) {
      return (
         <div>
            <div class="alert alert-danger" role="alert">
               ¡Haz login!
            </div>
         </div>

      );
   } else {
      return (
         <div className="game-details">
            <div className="backdrop-container container-fluid pt-5 pb-5 justify-content-center d-flex flex-wrap">
               <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
                  <div className="col-md-4">
                     <img
                        src={game.cover}
                        className="col-md-6 img-fluid mb-4 mb-md-0"
                        alt="..."
                     />
                  </div>
                  <div className="col-md-8 text-start">
                     <h1 className="h1 fw-bold  mb-3">
                        {game.name}{" "}
                     </h1>
                     <div className="mb-4 vote-average">
                        {game.rating}
                     </div>
                     <h5 className="fw-bold">Descripcion</h5>
                     <p className="fs-5">{game.summary}</p>
                     <button type="submit"
                        className="btn btn-primary text-white fw-bold">
                        Comprar
                     </button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
