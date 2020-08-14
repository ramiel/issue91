const mongoose = require('mongoose');
const Coupon = require('./coupon');


const start = async () => {
  mongoose.connect('mongodb://127.0.0.1:27017/issue91',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  
  await Coupon.create({
    name: 'a name ' + Math.floor(Math.random() * 5),
    code: 'code-' + Math.floor(Math.random() * 100),
    value: 50
  });

  Coupon.counterReset('id', err => {
    console.log(err);
  })
}

start();
