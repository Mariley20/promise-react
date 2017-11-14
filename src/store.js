import createStore from "redux-zero";

const initialState = {
    items: [],
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': []
};

const store = createStore(initialState);
export default store;