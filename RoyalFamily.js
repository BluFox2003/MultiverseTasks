const GeorgeVI = {
    name: "George VI"
}
const Lizzy2 = {
    name: "Elizabeth II"
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

const Diana = {
    name: "Diana"
}

const Camila = {
    name: "Camila"
}

POW.parents = [Philip, Lizzy2]

function childOf(Object){
    return Object.parents;
}

console.log(childOf(POW))

//GitHub Test