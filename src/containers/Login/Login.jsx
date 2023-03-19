import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../_services/AuthService";
import TokenStorageService from "../../_services/TokenStorageService";
import { validateLoginFormValues } from "../../_helpers/form-utilities";
import { useDispatch } from "react-redux";
import { saveLoginInfo } from "../../redux/actionsRX";
import { useSelector } from "react-redux";

import "./Login.scss";

export default function Login() {

   const dispatch = useDispatch();

   const initialValues = {
      email: "",
      password: "",
   };
   const navigate = useNavigate();

   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   const credentials = {
      email: formValues.email,
      password: formValues.password,
   };

   useEffect(() => {

      // verificar que no hay error
      if (Object.keys(formErrors).length == 0 && isSubmit) {
         loginAuth(credentials);
      }
      console.log("useEffect", formErrors);
   }, [formErrors]);

   const loginAuth = async (credentials) => {
      try {
         const res = await AuthService.login(credentials);
         TokenStorageService.saveToken(res.data.token, res.data.user.id, res.data.user.role);
         dispatch(saveLoginInfo(res.data.user));
         switch (res.data.user.role) {
            case "user":
               navigate("/games");
               break;
            case "admin":
               navigate("/admin");
               break;
         }

      } catch (error) {
         alert("Contraseña incorrecta")
         console.log(error);
      }
   };

   // handlers
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validateLoginFormValues(formValues));
      console.log("handle", formErrors);
      setIsSubmit(true);
   };

   return (
      <div>
         <div className="container-fluid pt-5 col-lg-3">
            <h2>Iniciar sesión</h2>

            <form className="text-start" noValidate onSubmit={handleSubmit}>
               <div className="mb-3">
                  <label className="form-label">Dirección de correo</label>
                  <input
                     type="email"
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
                  <label className="form-label">Contraseña</label>
                  <input
                     type="password"
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
                  <button type="submit" onClick={() => loginAuth(credentials)}
                     className="btn btn-primary text-white fw-bold"
                  >
                     Entrar
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
