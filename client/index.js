

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    searchterm = e.target.searchterm.value;
    
})






























// "Below is non-functional code to try to implement the google search api"
// const key = "AIzaSyDGxjb37qHVXzvLRNCqe3ibebG6kgt_Xcg";
// const engineId = "3a3f3266232d4c34b"
// let searchterm = "dog";

// function search(searchTerm){
    //     url =`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&cx=${engineId}&key=${key}`;
    //     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .then(data => processData(data))
//         .catch(err => console.warn(err));
// }
// function processData(data){
//     fetch("http://localhost:3000/",{
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(res => res.json())
// }

// https://www.googleapis.com/customsearch/v1?q=cat&cx=3a3f3266232d4c34b&key=AIzaSyDGxjb37qHVXzvLRNCqe3ibebG6kgt_Xcg