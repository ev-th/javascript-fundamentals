const printHello = () => {
    console.log('Hello!');
}

const executeAfterDelay = (seconds, func) => {
    setTimeout(func, seconds * 1000)
}

executeAfterDelay(5, printHello)