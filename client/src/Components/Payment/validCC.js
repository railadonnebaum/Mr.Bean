function validateCCNumber(ccNumber) {
    if (ccNumber === "" || /^\d{8,16}$/.test(ccNumber))
        return true
    return false
}

function validateCCSecureNumber(secureNumber) {
    if (secureNumber === "" || /^\d{3}$/.test(secureNumber) || /^\d{4}$/.test(secureNumber))
        return true
    return false
}

export {
    validateCCSecureNumber,
    validateCCNumber
}
