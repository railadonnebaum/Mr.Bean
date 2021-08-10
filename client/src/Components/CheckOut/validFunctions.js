function validateName(name) {
    if (name === "" || /^[A-Za-z\s]+$/.test(name)) { 
        return true;
    };
    return false;
}

function validateAddress(address) {
    if (address === "" || /^[A-Za-z 0-9-\s]+$/.test(address)) { 
        return true;
    }
    return false
}

function validateCity(city) {
    if (city === "" || /^[A-Za-z\s]+$/.test(city)) { 
        return true;
    };
    return false;
}

function validateZipCode(ZipCode) {
    if (ZipCode === "" || /^\d{5}$/.test(ZipCode))
        return true
    return false
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;   
    if (re.test(email) || email === "")
        return true;
    return false;
}

function validatePhoneNumber(number) {
    if (number === "") return true;
    if (number.length < 9 || number.length > 10 || isNaN(number) || number[0] !== '0') return false;
    return true;
}

export {
    validateName,
    validateCity,
    validateAddress,
    validateZipCode,
    validateEmail,
    validatePhoneNumber
}
