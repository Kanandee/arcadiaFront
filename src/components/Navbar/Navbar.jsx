import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearLoginInfo } from "../../redux/actionsRX";
import TokenStorageService from "../../_services/TokenStorageService";
import "./Navbar.scss"

export default function Navbar() {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const isLoggedIn = useSelector((state) => state.lib.isLoggedIn);
   const user = useSelector((state) => state.lib.userInfo);

   let activeClassName = "activeNav";
   const setNavLinkClassName = ({ isActive }) => {
      const className = [
         "nav-link",
         isActive ? activeClassName : undefined,
      ].join(" ");

      return className;
   };

   const logout = () => {
      TokenStorageService.logOut();
      dispatch(clearLoginInfo());
      navigate('/');
   };

   const showUserInfo = () => {
      if (isLoggedIn) {
         return (<li className="nav-item">
            <NavLink className={setNavLinkClassName}>
               {user.name}
            </NavLink>
         </li>
         );
      }
   }

   const showLoginButton = () => {
      if (isLoggedIn) {
         return (<li className="nav-item">
            <NavLink to="/logout" onClick={logout} className={setNavLinkClassName}>
               Cerrar sesión
            </NavLink>
         </li>);
      } else {
         return (<li className="nav-item">
            <NavLink to="/login" className={setNavLinkClassName}>
               Iniciar sesión
            </NavLink>
         </li>);
      }
   }

   const showRegisterButton = () => {
      if(!isLoggedIn){
         return( <li className="nav-item">
         <NavLink to="/register" className={setNavLinkClassName}>
            Registro 
         </NavLink>
      </li>);
      }
   }

   const showShoppingButton = () => {
      if(isLoggedIn){
         return( <li className="nav-item">
         <NavLink
            to="/games"
            className={setNavLinkClassName}
            end
         >
            Tienda
         </NavLink>
      </li>);
      }
   }

   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-6">
            <div className="container">
               <a className="navbar-brand" disabled>
                  <img
                     src="../../src/assets/videojuego.png"
                     alt=""
                     width="40"
                     height="40"
                     className="d-inline-block align-text-top"
                  />
               </a>
               <h4 className="web-title">Arcadia Gaming</h4>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0"></ul>
                  <form className="d-flex">
                     <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Nombre del juego..."
                        aria-label="Search"
                     />
                     <button className="btn btn-outline-light" type="submit" disabled>
                        Buscar
                     </button>
                  </form>
                  <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0"></ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     {showLoginButton()}
                     {showShoppingButton()}
                     {showRegisterButton()}
                  </ul>
                  <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0">
                     {showUserInfo()}
                     <div>
                     </div>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}
