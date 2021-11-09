const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat() {
    cats.push('Ralph')
}

function destructivelyPrependCat() {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat() {
    const newCats = [...cats,
    'Broom',]
    return newCats
}

function prependCat() {
    const newNewCats = [
        'Arnold',
        ...cats
    ]
    return newNewCats
};

function removeLastCat() {
    const slicedCats = [...cats.slice(0, -1)]
    return slicedCats
};

function removeFirstCat() {
    const slicedTwiceCats = [...cats.slice(1)]
    return slicedTwiceCats
}