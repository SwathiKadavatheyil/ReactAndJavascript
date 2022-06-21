const initialState = {
    loginStatus:false,
    email:''
};

function users(state = initialState, action){

 switch(action.type){
     case 'success' : 
               return {
                   ...state,
                   email:action.payload.email,
                   loginStatus:true
               }
   case 'failure':
       return{
           ...state,
           email:'',
           loginStatus:false
       }
       
       default:          
       return state;   
 }

}

export default users;