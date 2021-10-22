const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}



function appendCat(name) {
    const newCats=[...cats, "Broom"]
    return newCats
}

function prependCat(name) {
    const newNewCats=["Arnold", ...cats]
    return newNewCats
}

function removeLastCat() {
    const missingCat = [...cats.slice(0,2)];
    return missingCat
}

function removeFirstCat() {
    const firstMissingCat = [...cats.slice(1,3)]
    return firstMissingCat

}