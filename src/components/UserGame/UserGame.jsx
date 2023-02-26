import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GameService from "../../_services/GameService";
import "./UserGame.scss"

function UserGame({ gameId }) {
   const [game, setGame] = useState({});

   useEffect(() => {
      getGameInfo(gameId);
   }, []);

   const getGameInfo = async () => {
      try {
         const info = await GameService.getSingleGame(gameId);
         setGame(info.data.results);
      } catch (error) {
         console.log(error.message || error);
      }
   };

   return (
      <div className="">
         <div
            className="card text-start game-card-usr"
            style={{ width: "13rem" }}
         >
            <div className="poster-container-usr">
               <img
                  src={game.cover}
                  className="card-img-top img-fluid round"
                  alt="..."
               />
            </div>
            <div className="card-body">
               <h5 className="card-title mb-2 mt-2 fs-6 fw-bold">
                  {game.name}
               </h5>
            </div>
         </div>
      </div>
   );
}

UserGame.propTypes = {
   gameId: PropTypes.object.isRequired,
};

export default UserGame;
