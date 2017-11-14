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

    const cloneItem = [...store.getState().items]
    cloneItem.map(
        (item, index) => {
            console.log('i', item, 'in', index)
            fetch(item.toString())
                .then(response => response.json())
                .then(response => {
                    console.log('response', response)
                    let dataPlanet = [...store.getState().planets];
                    dataPlanet.push(response);
                    store.setState({
                        planets: dataPlanet,
                    })
                })
        }
    )
    console.log('items', store.getState().items)
    console.log('planets', store.getState().planets)

}

// url.map((item,index)=>{
//         fetch(item)
//         .then(response => response.json())
//         .then(res => {
//             let newItems = [...store.getState().items];
//             newItems.push(res);
//             store.setState({
//                 items:newItems,
//             })