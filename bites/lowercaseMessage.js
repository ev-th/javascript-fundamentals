const lowercaseMessage = (message) => {
    return message.toLowerCase()
}

const transform = (string, func) => {
    return func(string)
}

console.log(transform('HeLLo WoRlD', lowercaseMessage))