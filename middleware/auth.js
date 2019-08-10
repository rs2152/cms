export default function (ctx) {
    if(!ctx.store.state.userLoggedIn) {
      return ctx.redirect('/')
    }
  }