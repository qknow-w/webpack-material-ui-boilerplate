import { combineReducers } from "redux"


const initialState = {
  counter: 0,
  isFetching: false,
  didInvalidate: false,
  items: []
}

function Counter(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        counter: state.counter + 1
      })
    default:
      return state;

  }
}

function posts(state = initialState, action) {
  console.log("reduers",action.type);
  switch (action.type) {
    case "REQUEST_POSTS":
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case "RECEIVE_POSTS":
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })

    default:
      return state

  }
}

const rootReducer = combineReducers({
  Counter,
  posts
})

export default rootReducer
