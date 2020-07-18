const Communication = require('../../../models/contacts.js')


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

    Communication.find({userId:req.params.id}).
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