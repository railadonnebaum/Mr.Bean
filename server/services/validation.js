exports.validateCustomer = function(customer){
    const allValidate = validateName(customer.UserName) &&
        validateName(customer.FirstName) &&
        validateName(customer.LastName) &&
        validateEmail(customer.Email) &&
        validateZipCode(customer.Password);
    if (allValidate) {
        return true
    }
    return false
}

exports.validateEmail = function validateEmail(email){
    var re = /\S+@\S+\.\S+/;   
    if (re.test(email))
        return true;
    return false;
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;   
    if (re.test(email))
        return true;
    return false;
}

function validateName(name) {
    if (/^[A-Za-z\s]+$/.test(name)) { 
        return true;
    };
    return false;
}

function validateZipCode(ZipCode) {
    if (/^\d{5}$/.test(ZipCode))
        return true
    return false
}
