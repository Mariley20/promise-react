import store from "./store";
// import url from './data/earth-like-results.json'

export async function search() {
    const res = await fetch("data/earth-like-results.json");
    const generalJSON = await res.json();
    let list = await addPlanets(generalJSON.results);
    console.log('list fir-37152', list);
    store.setState({
        items: list,
        planets: generalJSON
    });
    console.log('planetJS', generalJSON)
}

function addPlanets(list) {
    return Promise.all(list.map(item => fetch(item).then(res => res.json())))

}