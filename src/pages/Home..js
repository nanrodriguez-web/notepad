import { Navigate } from "react-router-dom";

export default function Home() {
   const retrieveToken = localStorage.getItem("token");

   // localStorage.clear()

   return retrieveToken === null ? (
      <Navigate to="/login" />
   ) : (
      <>
         <></>
      </>
   );
}
