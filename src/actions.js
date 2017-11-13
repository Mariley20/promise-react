import store from "./store";
export const getJSON = (url) => {
    return new Promise(function(resolver, error) {
        let ajax = new XMLHttpRequest();
        ajax.open('GET', url)
        ajax.send()
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4) {
                let response = JSON.parse(ajax.responseText)
                resolver(response)
            }
        }
        console.log(response)
    })
}