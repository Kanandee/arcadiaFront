import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UserService from "../../_services/UserService";
import TokenStorageService from "../../_services/TokenStorageService";
import AdminGame from "../AdminGame/AdminGame";
import { validateLoginFormValues } from "../../_helpers/form-utilities";

function AdminUserInfo({ user }) {
   const id = TokenStorageService.getUser();

   const initialValues = {
      password: "",
      name: ""
   };

   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   const newData = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password

   };

   useEffect(() => {

      // verificar que no hay error
      if (Object.keys(formErrors).length == 0 && isSubmit) {
         console.log("UPDATING...");
         modifyUser(newData)
      }
      console.log("useEffect", formErrors);
   }, [formErrors]);

   // handlers update
   const handleChange = (e) => {
      const { name, value, password, value2 } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
         [password]: value2,

      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit");
      setFormErrors(validateLoginFormValues(formValues));
      console.log("handle", formErrors);
      setIsSubmit(true);
   };

   const deleteUser = async (user) => {
      try {
         var retVal = confirm("¿Desea eliminar al usuario?");
         if (retVal == true) {
            await UserService.deleteUser(user._id)
            console.log("User deleted: " + user)
            return true;
         }
         else {
            console.log("Delete canceled: " + user)
            return false;
         }
      } catch (error) {
         console.log(error.message || error);
      }
   };

   const modifyUser = async (newData) => {
      try {
         var retVal = confirm("¿Deseas modificar estos datos?");
         if (retVal == true) {
            await UserService.modifyUser(newData, user._id)
            console.log("User modified: " + user)
            return true;
         }
         else {
            console.log("Modify canceled: " + user)
            return false;
         }
      } catch (error) {
         console.log(error.message || error);
      }
   };

   const showGamesUser = (user) => {
      if (user.games.length > 0) {
         return (<div className="d-flex flex-wrap justify-content-left gap-2 mb-5">
            {user.games.length > 0 &&
               user.games.map((gameId) => <AdminGame key={gameId} gameId={gameId} />)}
         </div>);
      }
      else {
         return (<div class="alert alert-danger" role="alert">
            No ha comprado juegos aún
         </div>);
      }
   }

   if (user._id != id) {
      return (
         <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
               <div class="fw-bold">👤 {user.role}</div>
               <div class="input-group mb-1">
                  <div class="input-group-prepend">
                     <form className="text-start" noValidate onSubmit={handleSubmit}>
                        <div className="mb-3">
                           <input
                              type="name"
                              placeholder={user.name}
                              name="name"
                              className="form-control"
                              value={formValues.name}
                              onChange={handleChange}
                           />
                           <div className="form-text form-text-error">
                              {formErrors.name}
                           </div>
                        </div>
                        <div className="mb-3">
                           <input
                              type="email"
                              placeholder={user.email}
                              name="email"
                              className="form-control"
                              value={formValues.email}
                              onChange={handleChange}
                           />
                           <div className="form-text form-text-error">
                              {formErrors.email}
                           </div>
                        </div>
                        <div className="mb-3">
                           <input
                              type="password"
                              placeholder={user.password}
                              name="password"
                              className="form-control"
                              value={formValues.password}
                              onChange={handleChange}
                           />
                           <div className="form-text form-text-error">
                              {formErrors.password}
                           </div>
                        </div>
                        <div className="d-grid gap-2">
                           <button type="submit" onClick={() => modifyUser(newData)}
                              className="badge bg-success rounded-pill"
                           >
                              Modificar
                           </button>
                           <button type="button" onClick={() => deleteUser(user)}
                              className="badge bg-danger rounded-pill"
                           >
                              Eliminar
                           </button>
                        </div>

                     </form>
                  </div>
               </div>
               {showGamesUser(user)}
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
