import "./css/personal.css"
import Preview from "./preview"
import { useDispatch, useSelector } from "react-redux";
import {detailCreater} from "../redux/actions/detailsAction"


let PersonalData = () =>{
    let details = useSelector((state) => state.details);
      
    let dispatch = useDispatch();

    let { fname, lname, email, phone, city, state } = details;

    console.log(details);

    return (
          <>
            <div className="personal-container">
                  
              <div className="personal-form">
               
                 <h2 className="m-4">Personal Details</h2>

                <div class="row m-3">

                    <div class="col-5">
                        <input 
                           value = {fname}
                           onChange = {
                               (e) =>{
                                   dispatch(detailCreater( {fname:e.currentTarget.value} ));
                               }
                           }

                        type="text" class="form-control" placeholder="First name"/>
                    </div>

                    <div class="col-5">
                        <input 
                          value = {lname}
                          onChange = {
                               (e) =>{
                                   dispatch(detailCreater( {lname:e.currentTarget.value} ));
                               }
                          }

                        type="text" class="form-control" placeholder="Last name"/>
                    </div>

                    <div class="col-5">
                        <input 
                          value = {email}
                          onChange = {
                               (e) =>{
                                   dispatch(detailCreater( {email:e.currentTarget.value} ));
                                }
                          }
                        
                        type="email" class="form-control" placeholder="Email"/>
                    </div>

                    
                    <div class="col-5">
                        <input 
                          value = {phone}
                          onChange = {
                               (e) =>{
                                   dispatch(detailCreater( {phone:e.currentTarget.value} ));
                                }
                          }
                        type="number" class="form-control" placeholder="Phone"/>
                    </div>

                    <div class="col-5">
                        <input 
                         value = {city}
                         onChange = {
                               (e) =>{
                                   dispatch(detailCreater( {city:e.currentTarget.value} ));
                                }
                          }

                        type="text" class="form-control" placeholder="City"/>
                    </div>

                    <div class="col-5">
                        <input 
                         value = {state}
                         onChange = {
                               (e) =>{
                                   dispatch(detailCreater( {state:e.currentTarget.value} ));
                                }
                          }

                        type="text" class="form-control" placeholder="State"/>
                    </div>

                </div>

               <div className="btn btn-primary m-4" >NEXT</div>

               

              </div>

                 <Preview />     

               
            </div>

          </>
      )
} 


export default PersonalData;