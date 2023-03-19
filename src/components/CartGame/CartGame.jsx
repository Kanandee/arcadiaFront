import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import GameService from "../../_services/GameService";
import "./CartGame.scss"
import { removeGameCart } from "../../redux/actionsRX";

function CartGame({ gameId }) {
   const [game, setGame] = useState({});
   const dispatch = useDispatch();

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

   const deleteItemCart = async (gameId) => {
      dispatch(removeGameCart(gameId));
   };

   return (
      <div className="">
         <div
            className="card text-start game-card-usr"
            style={{ width: "10rem" }}
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
                  Cantidad: 1
               </h5>
               <span class="badge bg-danger rounded-pill" type="submit" onClick={() => deleteItemCart(gameId)}>Eliminar</span>
            </div>
         </div>
      </div>
   );
}

CartGame.propTypes = {
   gameId: PropTypes.object.isRequired,
};

export default CartGame;
