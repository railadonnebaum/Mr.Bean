var nodemailer = require('nodemailer');

exports.emailNewsLetter = function(email){
    var transporter = nodemailer.createTransport({
        service:'gmail.com',
        auth: {
            user:'email address',
            pass:'password'
        }
    });

    var mailOptions = {
        from:'email address',
        to:email,
        subject:'Mr. Bean\'s News Letter',
        text:`We are happy to share with you our News Letter:\nhttps://gofile.io/d/A9wO1L\nWe Hope you enjoy it....\nBest wishes,\nMr. Bean`
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else{
            console.log('sent email!')
        }
    })
}


exports.emailPurchase = function(email,name ){
    var transporter = nodemailer.createTransport({
        service:'gmail.com',
        auth: {
            user:'email address',
            pass:'password'
        }
    });

    var mailOptions = {
        from:'email address',
        to:email,
        subject:'Thanks for buying Mr. Bean',
        text:`Hi ${name},\nThank you for your order:\nwe will do our best to ensure you get your order as soon as possible.\nWe will be happy to serve you next time.\nMr. Bean`
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else{
            console.log('sent email!')
        }
    })
}

exports.emailIdea = function(email){
    var transporter = nodemailer.createTransport({
        service:'gmail.com',
        auth: {
            user:'email address',
            pass:'password'
        }
    });

    var mailOptions = {
        from:'email address',
        to:email,
        subject:'Thanks for sharing with us your Idea',
        text:`Thank You for sharing with us your new idea,\nWe will be happy to upgrade, with your new idea\nBest wishes,\nMr. Bean`
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else{
            console.log('sent email!')
        }
    })
}

exports.emailQuestion = function(email){
    var transporter = nodemailer.createTransport({
        service:'gmail.com',
        auth: {
            user:'email address',
            pass:'password'
        }
    });

    var mailOptions = {
        from:'email address',
        to:email,
        subject:'Your question has been received by the system',
        text:`Greetings!\nYour question has been received, we will try to answer you within 14 working days.\nBest wishes,\nMr. Bean`
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else{
            console.log('sent email!')
        }
    })
}