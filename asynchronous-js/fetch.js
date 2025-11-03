fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((data)=>{
    console.log(data)
}).catch(()=>{
    console.log("error in fetching the data")
})