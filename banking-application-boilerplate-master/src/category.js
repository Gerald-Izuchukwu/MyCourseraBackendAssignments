var category = function category(key) {
  
  switch (key.toLowerCase()) {
    case "pl":
      return "Personal Loan";
    case "vl":
      return "Vehicle Loan";
    case "el":
      return "Education Loan";
    case "hl":
      return "Home Loan";
    default:
      return "Unknown Category";
  }

  };
  
  module.exports = {
    category: category
  };