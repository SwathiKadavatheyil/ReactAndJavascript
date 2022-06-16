const Users = {
    
    loadUsers(dispatch,email,password,role) {
        dispatch({
            type: 'success',
            payload:{
                email:email,
                password:password,
                role:role
            }
        })
      
    },


    logout(dispatch) {
        dispatch({
            type: 'failure',
            payload:{
                email:'',
                password:'',
                role:''
            }
        })
      
    }
}
export default Users;