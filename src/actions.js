import store from "./store";
// import url from './data/earth-like-results.json'

export async function search() {
    // const url = "data/earth-like-results.json";
    // fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
    //         store.setState({
    //             items: res.results,
    //         })
    //     });


    const res = await fetch("data/earth-like-results.json");
    const generalJSON = await res.json();
    let list = addPlanets(generalJSON.results);
    console.log('list fir-37152', list)
    store.setState({
        planets: list,
    })
}

function addPlanets(list) {
    return Promise.all(list.map(item => fetch(item).then(res => res.json())))

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