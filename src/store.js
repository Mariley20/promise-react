import createStore from "redux-zero";

let sharedProps = {
    show: true,
    target: ""
}
let biografy = [];
const initialState = {
    biografy: biografy,
    selected: 0,
    sharedProps: sharedProps,
    show: false
};

const store = createStore(initialState);
export default store;