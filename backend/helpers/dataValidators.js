module.exports.expirationYear = (expirationYear) => {
    const date = new Date();
    let currentYear = date.getFullYear();
    let endYear = currentYear + 10;
    if(expirationYear < currentYear || expirationYear > endYear)
       throw new Error("Invalid value for expiration year.");
    else
       return true;
}