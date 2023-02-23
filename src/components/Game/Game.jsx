import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Game.scss"

function Game({ game }) {
   const navigate = useNavigate();
   const getGameDetails = (game) => {
      navigate(`/games/${game.id}`);
   };

   return (
      <div className="">
         <div
            className="card  text-start game-card"
            style={{ width: "13rem" }}
            onClick={() => getGameDetails(game)}
         >
            <div className="poster-container">
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

Game.propTypes = {
   game: PropTypes.object.isRequired,
};

export default Game;
