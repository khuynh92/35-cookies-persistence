import superagent from 'superagent';


//action creators

export const logIn = () => ({
  type: 'LOG_OUT',
  payload: true,
});

export const logOut = () => ({
  type: 'LOG_IN',
  payload: false,
});


//thunkers

export const logInThunk = (user) => {
  return dispatch => {
    superagent.get(`${process.env.API_URL}/login`)
      .auth(user.username, user.password)
      .then(response => {
        localStorage.token = JSON.stringify(response.text);
        dispatch(logIn(response.text));
        console.log('logged in!');
      })
      .catch(err => {
        alert('invalid login/password');
      });
  };
}

export const logOutThunk = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch(logOut());
  }
}