const {createStore} = require("redux");

const initialState = {
  news:{
    data: [],
    isLoading: true,
    error: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEWS":{
      return {
        ...state, news: {data: [...action.payload], isLoading: false}
      };
    }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store