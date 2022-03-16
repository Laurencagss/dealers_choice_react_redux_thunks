import { createStore, applyMiddleware, combineReducers } from "redux";
import thunks from "redux-thunk";
import { createLogger } from "redux-logger";
import axios from "axios";

const GET_FRIENDS = "GET_FRIENDS";

const friendReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return (state = action.friends);
      break;

    default:
      return state;
      break;
  }
  return state;
};

const reducer = combineReducers({
  friends: friendReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunks, createLogger({ collapsed: true }))
);

const getFriends = () => {
  return async (dispatch) => {
    const { data: friends } = await axios.get("/api/friends");
    const action = {
      type: GET_FRIENDS,
      photos,
    };
    dispatch(action);
  };
};

export default store;

export { getFriends };

window.store = store;