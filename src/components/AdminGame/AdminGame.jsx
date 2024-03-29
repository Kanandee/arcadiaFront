import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GameService from "../../_services/GameService";
import { useNavigate } from "react-router-dom";
import "./AdminGame.scss";

function AdminGame({ gameId }) {
   const navigate = useNavigate();
   const getGameDetails = (game) => {
      navigate(`/games/${game.id}`);
   };
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
            className="card text-start game-card-adm"
            style={{ width: "4rem" }}
         >
            <div className="poster-container-adm">
               <img
                  src={game.cover}
                  className="card-img-top img-fluid round"
                  alt="..."
                  onClick={() => getGameDetails(game)}
               />
            </div>
            <div className="card-body-adm">
            </div>
         </div>
      </div>
   );
}

AdminGame.propTypes = {
   gameId: PropTypes.object.isRequired,
};

export default AdminGame;
