const initialState = {
    loginStatus:false,
    email:'',
    password:'',
    role:''
};

function users(state = initialState, action){

 switch(action.type){
     case 'success' : 
               return {
                   ...state,
                   email:action.payload.email,
                   password:action.payload.password,
                   role:action.payload.role,
                   loginStatus:true
               }
   case 'failure':
       return{
           ...state,
           email:'',
           password:'',
           role:'',
           loginStatus:false
       }
       
       default:          
       return state;   
 }

}

export default users;