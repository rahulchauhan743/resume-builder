


let userReducer = ( state = null, action  ) => {

    switch (action.type) {
      //jho bhi user aya he usse state me store kardo 
        case "SET_USER":
             return action.payload;
              
        default:
           return state;

    }

}

export default userReducer;