const cleanPhone = phone => {
    let preffix = "+254";
    let result = "";
    phone = phone.replace(/\s/g, "");
  
    if (phone.charAt(0) == 0) {
      phone.substr(1);
      result = preffix + phone.substr(1);
    } else if (phone.charAt(0) == "7") {
      result = preffix + phone;
    } else if (phone.charAt(0) == "2") {
      result = "+" + phone;
    } else if (phone.charAt(0) == "+") {
      result = phone;
    } else if (phone.charAt(0) == "1") {
      result = preffix + phone;
    }
    return result;
  };
  
  module.exports = cleanPhone;