import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";

let Home = () => {
 
   let user = useSelector(state => state);
     
  return (
    <>
         {user ? "" : <Redirect to="/login"/>}

        <button
            onClick = {
              () =>{
                auth.signOut();
              }
            }
        > 
           LOGOUT
        </button>
   
    </>
  );
};

export default Home;
