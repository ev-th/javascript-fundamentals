const checkLength = (phoneNumber) => {
    return phoneNumber.length <= 10;
}

const filterLongNumbers = (arr) => {
    return arr.filter(checkLength)
}

const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd'
]

console.log(filterLongNumbers([]))