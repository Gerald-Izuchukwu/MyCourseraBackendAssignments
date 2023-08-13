const amqp = require("amqplib/callback_api");
//create conn
const receiveFromRabbitMQ = () => {
  amqp.connect("amqp://localhost", (err, connection) => {
    if(err){
      throw err
    }
    connection.createChannel((err, channel)=>{
      if(err){
        throw err
      }
      const QUEUE = "testQueue"
      channel.assertQueue(QUEUE)
      channel.consume(QUEUE,(msg)=>{
        console.log(msg.content.toString());
      }, {
        noAck: true
      })
    })
    // Capture any error if present
    // Create a channel to send info to queue
    // Create a fanout exchange within the channel
    // Bind the exchange to the queue
  });
};

receiveFromRabbitMQ()

module.exports = { receiveFromRabbitMQ };
