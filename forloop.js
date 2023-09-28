

let jsn = [{ "id":"10", "class": "child-of-9" }, { "id": "11", "class": "child-of-10" }]

for (let i=0; i<jsn.length; i++)    //for loop
{
    console.log (jsn[i].id)
    console.log (jsn[i].class)
}

console.log("-------------------------------------")

console.log(jsn)

for (let j in jsn)                  // for in loop
{
    console.log (jsn[j].id)
    console.log (jsn[j].class)
}


for(let j of jsn)                 // for of loop
{
    console.log (j)
}



