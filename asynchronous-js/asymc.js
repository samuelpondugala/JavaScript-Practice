// To handle promes object then(), catch() can aysnc, await
let pobj = new Promise((resolve, reject)=>{
    let data = {
        name:"amar", age:20, dept:"cse"
    }
    setTimeout(()=>{
        // reject({msg:"Couldn't able to fetch the data"})
        resolve(data)
    }, 5000)
})
let fun  = async()=>{
    try{
        let data = await pobj
        console.log(data)
    }
    catch(err){
        console.log("error",err);
    }
}