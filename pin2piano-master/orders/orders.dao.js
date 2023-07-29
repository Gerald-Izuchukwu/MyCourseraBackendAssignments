const { v4: uuidv4 } = require("uuid");
const Order = require('../orders/orders.entity.js')

/* 
  saveOrder should be a function that calls the save() function on Orders Model 
  to persist order data in MongoDB Orders collection of shoppingcartDB
*/
const saveOrder = function(order, done) {
  let newOrder = new Order({
    orderId: order.orderId,
    OrderName: order.orderName,
    productId : order.productId,
    ProductName: order.productName,
    UserId: order.userId,
    UserName: order.userName,
    UnitsPlaced: order.unitsPlaced,
    UpdatedOn : order.updatedOn,
    UpdatedBy: order.updatedBy
  })

  newOrder.save((err, savedOrder)=>{
    if(err){
      console.log(err.message);
      return done('There was an error creating that product')
    }
    return done(null, savedOrder)
  })

  
}


/* 
  findOrdersPlacedByUser should be a function that calls the find() function on Orders Model 
  to fetch all documents from Orders collection of shoppingcartDB,
  containing data of Orders for a given UserId
*/
const findOrdersPlacedByUser = async function(userId, done){
  const orders = await Order.find({"UserId": userId})
  if(!orders){
    console.log('No order with the userId');
    return done('No orders matches that userId')
  }
  return done(null, orders)
}


module.exports = {
  saveOrder,
  findOrdersPlacedByUser
}