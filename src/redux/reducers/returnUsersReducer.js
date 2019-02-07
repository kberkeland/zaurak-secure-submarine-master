const returnUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_RETURNUSERS':
      return action.payload;
    case 'UNSET_RETURNUSERS':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default returnUsersReducer