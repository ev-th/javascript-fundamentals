const addToBatch = (arr, num) => {
    if (arr.length < 5) {
        return arr.concat(num)
    } else {
        return arr
    }
}

module.exports = addToBatch;