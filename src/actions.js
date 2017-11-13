import store from "./store";
import url from './data/earth-like-results.json'

// export const de = () => {
//     get
// }
export const getJSON = () => {
    console.log('url', url)
    return new Promise(function(resolver, error) {
        let ajax = new XMLHttpRequest();
        ajax.open('GET', url)
        ajax.send()
        ajax.onreadystatechange = function() {
            if (ajax.readyState === 4) {
                let response = JSON.parse(ajax.responseText)
                resolver(response)
            }
        }
    })
}
export async function search(text) {
    console.log(url, 'url')
    fetch(url)
        .then(res => {
            store.setState({
                items: res
            });
            // const res = await fetch (url);
            // store.setState({
            //     items : res
            // })
        })
    console.log(store.getState().items)
}