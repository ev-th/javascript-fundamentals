const notifyByEmail = (email_address) => {
    return `Email send to: ${email_address}`
}

const notifyByText = (phone_number) => {
    return `Text send to: ${phone_number}`
}

const notify = (str, func) => {
    return func(str);
}

console.log(notify('evan@example.com', notifyByEmail))
console.log(notify('12345678909', notifyByText))