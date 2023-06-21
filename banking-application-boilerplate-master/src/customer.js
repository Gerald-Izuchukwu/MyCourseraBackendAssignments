var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      const existingCustomer = customerList.find((customer) => customer[0] === CustomerId);

      if (existingCustomer) {
        return;
      }

    
      const newCustomer = [
        CustomerId,
        CustomerName,
        CustomerAge,
        CustomerAddress,
        CustomerContactNumber,
        Category
    ];
    
      customerList.push(newCustomer);
      
}

const updateCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
  for (let i = 0; i < customerList.length; i++) {
    if (customerList[i][0] === CustomerId) {
      customerList[i][1] = CustomerName;
      customerList[i][2] = CustomerAge;
      customerList[i][3] = CustomerAddress;
      customerList[i][4] = CustomerContactNumber;
      customerList[i][5] = Category;
      break;
    }
  }
};

const getAllCustomers=()=>{
  // Write the Logic here
  return customerList
}



module.exports={addCustomer,updateCustomer,getAllCustomers}