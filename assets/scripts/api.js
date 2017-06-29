'use strict'
const config = require('./config')
const store = require('./store')

// links to ui to handle success and failures
const ui = require('./ui')

// these are the requests I make to the api

// values placed into the form fields of the
// sign up button and stores this in 'data',
// data is in the getFormFields function

// // tells the browser what to do when user clicks sign up button
// post is a request to the server to accept what the data placed into the fields of my sign up button

const signUpRequest = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
  .done(ui.signUpSuccess)
  .fail(ui.failure)
}
const signInRequest = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
  .done(ui.signInSuccess)
  .fail(ui.failure)
}
const signOut = () => {
  console.log(store.user)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  .done(ui.signOutSuccess)
  .fail(ui.failure)
}
module.exports = {
  signUpRequest,
  signInRequest,
  signOut
}
