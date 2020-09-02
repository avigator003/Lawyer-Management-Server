const Communication = require('../../../models/communication')
const nodemailer = require("nodemailer")

var sesTransport = require('nodemailer-ses-transport');

var SESCREDENTIALS = {
  accessKeyId : "accesskey" ,
  secretAccessKey : "secretkey"
};

var transporter = nodemailer.createTransport(sesTransport({
    // accessKeyId: "AKIA3OKRZPIAJPQRB6VJ",
    
    accessKeyId: "AKIAJWEU66KXH6URMLXQ",
    secretAccessKey: "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",

    // secretAccessKey: "BEPVrwmcEluziDs3f5MF6wbkfPKW0WLQsUnKKEwqEp8u",
    // rateLimit: 5
}));

// Create New log
exports.create = (req, res) => {

    let communication = new Communication(req.body)

 
    communication.save().then(data => {
            res.status(200).json({status: true, message:"communication Saved", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}


exports.deleteCommunication = (req, res) => {
// console.log(req.params.id)
Communication.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Communication Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Communication.find({}).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"Communication fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//View One
exports.view = (req, res) => {

    Communication.findById(req.params.id).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"Communication fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewSpecific = (req, res) => {

    Communication.find({userId:req.params.id}).populate("from matter to").
        then(data => {
            res.status(200).json({status: true, message:"Communication fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


exports.viewForMatter = (req, res) => {

    Communication.find({userId:req.params.id, matter:req.params.matter}).populate("from matter to").
        then(data => {
            res.status(200).json({status: true, message:"Communication fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit contact
exports.editCommunication = (req, res) => {

    Communication.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Communication updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

   //fetch for one user and client
   exports.viewSpecificCommunicationClient = (req, res) => {
    
    Communication.find({userId:req.params.id, from:req.params.contact}).populate("from matter to")
        .then(data => {
            res.status(200).json({status: true, message:" fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

 //fetch for one user and client
 exports.sendEmail = (req, res) => {
    

    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'anas3rde@gmail.com',
    //       pass: '8123342590'
    //     }
    //   });
    
    //   var mailOptions = {
    //     from: 'FromName <registeredMail@xxx.com>',
    //     to: 'registeredMail@xyz.com', // list of receivers
    //     subject: 'Amazon SES Template TesT', // Subject line
    //     html: <p>Mail message</p> // html body
    // };

        // var url = "https://distracted-rosalind-719c41.netlify.app" +'/verified/?token='+user._id;
      
    //   var userEmail = user.emailAddress;
      var emailText = 'Please click on the link below to verify your Account';
    //   emailText += '<p><a href="'+url+'">click here</a>';
      var mailOptions = {
        from: 'anas3rde@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        //   res.json({ 'success': false, 'message': error });
        } 
          res.json({ 'success': true, 'message': 'email sent ' })
        
      });






    // Communication.find({userId:req.params.id, from:req.params.contact}).populate("from matter to")
    //     .then(data => {
            // res.status(200).json({status: true, message:" fetched"})

//         }).catch(error => {
//         res.status(200).json({status: false, message:error})

//         })
}