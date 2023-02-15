import LoginCard from "../components/loginCard";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import bannerImage from "../images/logo-no-background.png";
import { Navigate } from "react-router-dom";

export default function Login() {
   const retrieveToken = localStorage.getItem("token");

   return retrieveToken !== null ? (
      <Navigate to="/" />
   ) : (
      <div className="mainContainer p-0 m-0">
         <MDBContainer>
            <MDBRow className="min-100vh d-flex  align-items-center">
               <MDBCol
                  md={6}
                  className="d-flex align-items-center justify-content-center"
               >
                  <div>
                     <img
                        className="bannerImmage img-fluid"
                        src={bannerImage}
                        alt=""
                     />
                  </div>
               </MDBCol>
               <MDBCol
                  md={6}
                  className="d-flex align-items-center justify-content-center"
               >
                  <LoginCard />
               </MDBCol>
            </MDBRow>
         </MDBContainer>
      </div>
   );
}
