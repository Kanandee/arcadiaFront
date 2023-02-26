import React, { useEffect, useState } from "react";
import AdminUserInfo from "../../components/AdminUserInfo/AdminUserInfo";
import UserService from "../../_services/UserService";


export default function Admin() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      getAllUsers();
   }, []);

   const getAllUsers = async () => {
      try {
         const query = await UserService.getAllUsers();
         setUsers(query.data.results);
      } catch (error) {
         setUsers(null);
         console.log(error.message || error);
      }
   };

   if (!users) {
      return (
         <div>
            <div class="alert alert-danger" role="alert">
               ¡Hazte admin!
            </div>
            <img src="src\assets\codegeas.gif" alt=".." />
         </div>

      );
   }
   else {
      return (
         <div>
            <div className="container pt-5">
               <h2 className="fw-bold">Información del usuario</h2>
               <ol class="list-group">
                  {users.length > 0 &&
                     users.map((user) => <AdminUserInfo user={user} />)}
               </ol>
            </div>

         </div>
      );
   }
}
