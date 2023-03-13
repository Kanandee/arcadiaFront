import React, { useEffect, useState } from "react";
import UserService from "../../_services/UserService";
import UserGame from "../../components/UserGame/UserGame";
import TokenStorageService from "../../_services/TokenStorageService";

export default function Profile() {
   const id = TokenStorageService.getUser();
   const [user, setUser] = useState([]);
   const [games, setGames] = useState([])

   useEffect(() => { getUserInfo(); }, [games]);

   const getUserInfo = async () => {
      try {
         const res = await UserService.getUserInfo(id);
         setUser(res.data.results);
         setGames(res.data.results.games);
      } catch (error) {
         setUser(null);
         console.log(error.message || error);
      }
   };

   if (!user) {
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
         <div>
            <div className="container pt-5">
               <h2 className="fw-bold">Información del usuario</h2>
               <div>
                  <div key={user._id}>
                  <div class="input-group mb-1">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="basic-addon1">Identificador</span>
                        </div>
                        <input type="text" class="form-control" placeholder={user._id} aria-label="Username" aria-describedby="basic-addon1" disabled></input>
                     </div>
                     <div class="input-group mb-1">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="basic-addon1">Nombre</span>
                        </div>
                        <input type="text" class="form-control" placeholder={user.name} aria-label="Username" aria-describedby="basic-addon1" disabled></input>
                     </div>
                     <div class="input-group mb-1">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="basic-addon1">Email</span>
                        </div>
                        <input type="text" class="form-control" placeholder={user.email} aria-label="Username" aria-describedby="basic-addon1" disabled></input>
                     </div>
                     <div class="input-group mb-1">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="basic-addon1">Rol</span>
                        </div>
                        <input type="text" class="form-control" placeholder={user.role} aria-label="Username" aria-describedby="basic-addon1" disabled></input>
                     </div>
                     <div class="input-group mb-1">
                        <div class="input-group-prepend">
                           <span class="input-group-text" id="basic-addon1">Targeta bancaria</span>
                        </div>
                        <input type="text" class="form-control" placeholder={user.paycard} aria-label="Username" aria-describedby="basic-addon1" disabled></input>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container pt-5">
               <h2 className="fw-bold">Juegos comprados</h2>
               <div className="d-flex flex-wrap justify-content-left gap-5 mb-5">
                  {games.length > 0 &&
                     games.map((gameId) => <UserGame key={gameId} gameId={gameId} />)}
               </div>
            </div>
         </div>
      );
   }
}
