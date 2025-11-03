// To handle promes object then(), catch() can aysnc, await
let pobj = new Promise((resolve, reject)=>{
    let data = {
        name:"amar", age:20, dept:"cse"
    }
    setTimeout(()=>{
        reject({msg:"Couldn't able to fetch the data"})
    }, 5000)
})
pobj.then((data)=>{
        console.log("data received", data)
    }).catch((err)=>{
        console.log("error", err);
    })