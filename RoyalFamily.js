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

console.log(childOf(POW))
