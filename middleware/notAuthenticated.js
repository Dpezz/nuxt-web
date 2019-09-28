export default ({ store, redirect }) => {
  // If the user is authenticated redirect to home page
  if (store.state.login.auth) {
    return redirect('/users')
  }
}
