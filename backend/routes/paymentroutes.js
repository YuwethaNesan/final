const express = require('express');
const paymentRouter = express.Router();
const stripe = require('stripe')('sk_test_51HbW5xJnYK09rM9tsUXpqVnlaCvt2gRjuPWQFoJWipEHwLNs5bLxCtc5v6uXZOpXeUgYPTBG8C3yIWiGHPyp2EZf00D2f047Vr');
// const sendMail = require("./sendEmail")
paymentRouter.get ("/",function(req,res,next) {
    res.render ('index',{title:'express'});
});
paymentRouter.post ("/payment",(req,res) =>{
    const totalamount=req.body.totalamount;
    const token=req.body.token;
    console.log(totalamount);

    stripe.customers.create({
        email: token.email,
        source:token.id
      })
        .then(customer => {
         stripe.charges.create({
             amount:totalamount,
             currency:"usd",
             customer:customer.id,
             receipt_email:token.email
         })
         })// .then(result => {
        //     sendMail.paymentname(token.email)
        //     res.status(200).send(result)})
        .catch(error => console.error(error));
});

module.exports = paymentRouter;