import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearGamesCart } from "../../redux/actionsRX";
import CartGame from "../../components/CartGame/CartGame";
import TokenStorageService from "../../_services/TokenStorageService";
import UserService from "../../_services/UserService";

export default function ShoppingCart() {

   const id = TokenStorageService.getUser();
   // const [payment, setPayment] = useState([]);
   const cartItems = useSelector((state) => state.lib.gamesCart);
   const isLoggedIn = useSelector((state) => state.lib.isLoggedIn);
   const navigate = useNavigate();
   const dispatch = useDispatch();


   useEffect(() => {  }, []);

   // const getUserPayment = async () => {
   //    try {
   //       const res = await UserService.getUserInfo(id);
   //       setPayment(res.data.results.paycard);
   //    } catch (error) {
   //       setPayment(null);
   //       console.log(error.message || error);
   //    }
   // };

   const clearCart = () => {
      dispatch(clearGamesCart());
      navigate('/games');
   };

   const redirectShop = () => {
      navigate('/games');
   };

   const confirmBuy = async () => {
      try {
         await UserService.confirmBuy(cartItems);
         dispatch(clearGamesCart()); 
      } catch (error) {
         console.log(error.message || error);
      }
   };

   if (!isLoggedIn) {
      return (
         <div>
            <div class="alert alert-danger" role="alert">
               ¡Haz login!
            </div>
            <img src="src\assets\codegeas.gif" alt=".." />
         </div>

      );
   }
   else if (cartItems.length == 0) {
      navigate('/games');
   }
   else {
      return (
         <div className="container pt-5">
            <h2 className="fw-bold">Carrito de compra</h2>
            <div>
               <br></br>
               <span class="btn btn-outline-danger" type="submit" onClick={() => clearCart()}>Vaciar carrito</span>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <span class="btn btn-outline-success" type="submit" onClick={() => confirmBuy()}>Confirmar compra</span>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <span class="btn btn-outline-primary" type="submit" onClick={() => redirectShop()}>Añadir otro</span>
            </div>
            <div className="container pt-5">
               <div className="d-flex flex-wrap justify-content-left gap-5 mb-5">
                  {cartItems.length > 0 &&
                     cartItems.map((gameId) => <CartGame key={gameId} gameId={gameId} />)}
               </div>
            </div>
            <div class="input-group mb-1">
               <input type="text" class="form-control" placeholder={"Pagar con targeta bancaria"} aria-label="Paycard" aria-describedby="basic-addon1" disabled></input>
            </div>
         </div>
      );
   }
}

