import createStore from "redux-zero";

const initialState = {
    items: [],
    planets: [],
};

const store = createStore(initialState);
export default store;