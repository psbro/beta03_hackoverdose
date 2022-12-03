module.exports.randomString = async (length = 5) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports.formatDBErrors = (errors) => {
    let arrErrors = [];    
    errors.forEach(error => {
        let objError = {};
        objError.errorMessage = error.message;
        objError.paramName = error.path;
        arrErrors.push(objError);
    });

    return arrErrors;
}