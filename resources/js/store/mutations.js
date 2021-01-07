const DRAWER = (state,payload)=>{
    state.drawer = payload
}
const LOGIN = (state)=>{
state.loggedIn = true
}
const LOGOUT = (state)=>{
    state.loggedIn = false
}



export default {
    DRAWER,LOGOUT,LOGIN
}
