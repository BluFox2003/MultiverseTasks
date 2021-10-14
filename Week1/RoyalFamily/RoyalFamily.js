const GeorgeVI = {
    name: "George VI"
}
const Lizzy2 = {
    name: "Elizabeth II",
    age: 1000000
}
Lizzy2.parents = [GeorgeVI.name, "Elizabeth"]

const PrincessMargaret = {
    name: "Margaret"
}

PrincessMargaret.parents = [GeorgeVI.name, "Elizabeth"]

const Philip = {
    name: "Philip"
}

const POW = {
    name: "Charles"
}

POW.parents = [Philip.name, Lizzy2.name]

const Diana = {
    name: "Diana"
}

const Camila = {
    name: "Camila"
}

const William = {
    name: "William"
}

William.parents = [POW.name, Diana.name]

//Functions
function childOf(Object){
    return Object.parents;
}

function royalInfo(Object){
    const age = Object.age;
    const name = Object.name;
    const parent = childOf(Object);
    const a = age.toString();
    let info = name + " is " + a + " years old and is a child of " + parent[0] + " and " + parent[1];
    return info;
    
}

console.log(royalInfo(Lizzy2));

module.exports = { Lizzy2, childOf, GeorgeVI }