import React from "react";
import PropTypes from "prop-types";
import UserService from "../../_services/UserService";
import TokenStorageService from "../../_services/TokenStorageService";

function AdminUserInfo({ user }) {
   const id = TokenStorageService.getUser();

   const deleteUser = async (user) => {
      UserService.deleteUser(user._id)
      console.log("User deleted: " + user)
   };

   if (user._id != id) {
      return (
         <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
               <div class="fw-bold">👤 {user.role}</div>
               <div class="input-group mb-1">
                        <div class="input-group-prepend">
                        </div>
                        <input type="text" class="form-control" placeholder={user.name} aria-label="Username" aria-describedby="basic-addon1" disabled></input>
                        <input type="text" class="form-control" placeholder={user.email} aria-label="Email" aria-describedby="basic-addon1" disabled></input>
                     </div>
                     <div class="d-flex justify-content align-items-start">
                     <span class="badge bg-danger rounded-pill" type="submit" onClick={() => deleteUser(user)}>Eliminar</span>
                     &nbsp;&nbsp;
                     <span class="badge bg-success rounded-pill" type="submit">Modificar</span>
                     </div>  
               <br></br>
            </div>
         </li>
      );
   }
}

AdminUserInfo.propTypes = {
   user: PropTypes.object.isRequired,
};

export default AdminUserInfo;
