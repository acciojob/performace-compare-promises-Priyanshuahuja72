const apiUrls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4",
    "https://jsonplaceholder.typicode.com/todos/5",
    "https://jsonplaceholder.typicode.com/todos/6",
    "https://jsonplaceholder.typicode.com/todos/7",
    "https://jsonplaceholder.typicode.com/todos/8",
    "https://jsonplaceholder.typicode.com/todos/9",
    "https://jsonplaceholder.typicode.com/todos/10",
];
window.promises = [];
function PromiseApi(api)
{
    return new Promise((resolve) => {
        resolve(
            fetch(api)
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data);
                let innerData = data.title;
                return innerData;
            })
        )
    })
}

function runningPromise()
{
    let pone = document.getElementById("output-all")
    let ptwo = document.getElementById("output-any")
    for (let i = 0; i < apiUrls.length; i++) {
      promises.push(PromiseApi(apiUrls[i]));
    }
   Promise.all(promises).then((result)=> pone.innerHTML = result);
   Promise.any(promises).then((result)=> pone.innerHTML = result);
}
runningPromise();
