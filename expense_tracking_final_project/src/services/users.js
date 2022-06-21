const Users = {
    
    loadUsers(dispatch,email) {
        dispatch({
            type: 'success',
            payload:{
                email:email
            }
        })
      
    },


    logout(dispatch) {
        dispatch({
            type: 'failure',
            payload:{
                email:''
            }
        })
      
    }
}
export default Users;