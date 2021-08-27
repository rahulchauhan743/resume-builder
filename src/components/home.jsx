import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { templateCreater } from "../redux/actions/templateAction";
import "./css/home.css" 

let Home = () => {
 
   let user = useSelector(state => state.user);

   let history = useHistory(); 

   

   let dispatch = useDispatch();  

  return (
    <>
         {user ? "" : <Redirect to="/login"/>}


        <div className= "template-container">

             <div className="template"
                onClick = {
                  () => {
                    dispatch(templateCreater("A"));
                    history.push("/PersonalData");
                  }
                }
             >
                <img src="http://localhost:3000/skin1.svg"  alt=""/>
             </div>    

             <div className="template"
                onClick = {
                  () => {
                    dispatch(templateCreater("B"));
                    history.push("/PersonalData")
                  }
                }
             >
                 <img src="http://localhost:3000/skin2.svg"  alt=""/>
             </div>

        </div>   


        <button
            className = "btn-primary home-logout-btn"
            onClick = {
              () =>{
                auth.signOut();
              }
            }
        > 
           LogOut
        </button>
   
    </>
  );
};

export default Home;
