const amqp = require('amqplib/callback_api')
//create conn
const sendToRabbitMQ = (msg)=>{    
   
    // Create a channel to send info to queue
    amqp.connect('amqp://localhost', (err, connection)=>{
        if(err){
            throw err
        }
        connection.createChannel((err, channel)=>{
            if(err){
                throw err
            }
            const QUEUE = 'testQueue'
            channel.assertQueue(QUEUE)
            // msg = "hello-message"
            channel.sendToQueue(QUEUE, Buffer.from(msg))
            console.log(msg);
        })
        setTimeout(()=>{
            connection.close
            process.exit(0)
        }, 500)
        
    })
    
    // Check if queue is present or not/assert queue
    
    // Write a setTimeout function to exit after the message is sent
    
    // return true if the message is sent successfully    
    return true
}

sendToRabbitMQ('hello-consumer')

module.exports ={sendToRabbitMQ}

 