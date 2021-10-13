const GeorgeVI = {
    name: "George VI"
}
const Lizzy2 = {
    name: "Elizabeth II"
}
Lizzy2.parents = [GeorgeVI, "Elizabeth"]

const PrincessMargaret = {
    name: "Margaret"
}
PrincessMargaret.parents = [GeorgeVI, "Elizabeth"]

const Philip = {
    name: "Philip"
}

function childOf(Object){
    return Object.parents;
}

console.log(childOf(Lizzy2))

//GitHub Test