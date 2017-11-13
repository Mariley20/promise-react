import store from "./store";
export const closeModal = () => {
    store.setState({
        show: false
    })
}
export const showModal = () => {
    console.log('show', store.getState().show)
    store.setState({
        show: true
    });
    console.log('newshow', store.getState().show)
}
export const toggle = () => {
    console.log("ñ", store.getState().show);
    let newVal = store.getState().show ? false : true;
    store.setState({
        show: newVal
    });
}