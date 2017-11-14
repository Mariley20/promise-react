import store from "./store";
// import url from './data/earth-like-results.json'

export async function search() {
    const url = "data/earth-like-results.json";
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log('res', res)
            store.setState({
                items: res.results
            })
        });
    console.log('items', store.getState().items)

}
export async function search2(index, url) {

    console.log('url2', url, 'index', index)
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log('res', res)
            store.setState({
                index: res
            })
        });

}