module.exports.phone = (phone) => {
     phone = phone.replaceAll(' ','');
     phone = phone.replaceAll('-','');
     phone = phone.replaceAll('+','');
     if(phone.charAt(0) == 1)
       phone = phone.substring(1);

    return phone
}