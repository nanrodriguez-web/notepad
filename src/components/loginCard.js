import {
   MDBCard,
   MDBCardBody,
   MDBCardHeader,
   MDBForm,
   MDBRow,
   MDBCol,
   MDBInput,
   MDBBtn,
   MDBValidation,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
   const navigate = useNavigate();

   const [formValue, setFormValue] = useState({
      username: "",
      password: "",
   });

   const [wrongCreds, setWrongCreds] = useState(false);

   const onChange = (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
   };

   const loginUser = (e) => {
      e.preventDefault();

      fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            username: formValue.username,
            password: formValue.password,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data && data !== undefined) {
               localStorage.setItem("token", data.access);
               setWrongCreds(false);
               navigate("/");
            } else {
               setWrongCreds(true);
            }
         });
   };
   return (
      <MDBCard className="loginCard text-center w-75">
         <MDBCardBody className="d-flex justify-content-center flex-column align-items-center">
            <h4 className="my-3">Login</h4>
            <MDBRow
               tag="form"
               className="g-3 w-75 mt-1 d-flex flex-column align-items-center"
               onSubmit={(e) => loginUser(e)}
            >
               <MDBCol className="my-2">
                  <MDBInput
                     value={formValue.username}
                     name="username"
                     onChange={onChange}
                     id="usernameId"
                     type="text"
                     required
                     label="Username"
                     className="colorBlueMint"
                  />
               </MDBCol>
               <MDBCol className="my-2">
                  <MDBInput
                     value={formValue.password}
                     name="password"
                     onChange={onChange}
                     id="passwordId"
                     type="password"
                     required
                     label="Password"
                     className="colorBlueMint"
                  />
               </MDBCol>
               <MDBCol className="my-3" md={5}>
                  <MDBBtn rounded className="colorLightBrown" type="submit">
                     Login
                  </MDBBtn>
               </MDBCol>
               {wrongCreds ? (
                  <MDBCol className="">
                     <span className="wrong">
                        Wrong credentials. <br /> Please try again
                     </span>
                  </MDBCol>
               ) : (
                  <MDBCol className="d-none">
                     <span className="wrong">
                        Wrong credentials. <br /> Please try again
                     </span>
                  </MDBCol>
               )}
            </MDBRow>
         </MDBCardBody>
         <div className="my-4">
            <span>
               No Account? <a href="/register">Register</a>
            </span>
         </div>
      </MDBCard>
   );
}
