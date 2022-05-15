const {createStore} = require("redux");

const initialState = {
  news: {
    data: [],
    isLoading: true,
    error: null
  },
  slides: {
    data: [],
    isLoading: true,
  },
  burgerMenu: {
    isOpen: false,
    error: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEWS": {
      return {
        ...state, news: {data: [...action.payload], isLoading: false}
      };
    }
    case "SET_SLIDES": {
      return {
        ...state, slides: {data: [...action.payload], isLoading: false}
      };
    }
    case "TOGGLE_MENU": {
      return {...state, burgerMenu: {data: action.payload}}
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