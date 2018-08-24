let initialState = false;

export default (state = initialState, action) => {

  let {type, payload} = action;

  switch(type) {
    default: return state;
  }

};