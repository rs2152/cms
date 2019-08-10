export const state = () => ({
    baseApiUrl:'http://4d4b8c7f.ngrok.io',
    userInfo: '',
    userLoggedIn:false
  })
  
  export const mutations = {
    setUserInfo (state,user) {
      state.userInfo=user;
    },
    setLoginStatus (state,status){
        state.userLoggedIn=status;
    }
  }