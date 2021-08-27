import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";

import Login from "./components/login";
import Navbar from "./components/navbar";
import PersonalData from "./components/personalData";
import SignUp from "./components/signup";
import { auth, firestore } from "./firebase";
import { userCreater } from "./redux/actions/userActions";


let App = () => {
   
  let dispatch = useDispatch();

 

  useEffect(() => {

    
    let unsub = auth.onAuthStateChanged(async (user) => {
         
      dispatch(userCreater(user));
       
      if (user) {
        let { uid, email } = user;

        let docRef = firestore.collection("users").doc(uid);

        let doc = await docRef.get();

        if (!doc.exists) {

          docRef.set({
            email,
          });
          
        }
      }

    });

    //onAuthStateChanged is a eventlistener which remains in memory
    //if dont unsub so it remains in memory 
    //so we have to remove it from memory
    return () => {
      unsub();
    };

  }, []);

  return (
    <>
      <Router>

        <Navbar />

        <Switch>

          <Route path="/personalData">
           <PersonalData />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </>
  );
};

export default App;
