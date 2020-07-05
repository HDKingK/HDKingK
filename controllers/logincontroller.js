var path = require('path');

/// ***************** ***************** *****************
/// ***************** ***************** Config DB CONNECTION
const MongoClient = require('mongodb').MongoClient;
const mongosee = require('mongoose');


/// *****************  Models
const Account = require('../models/account');

/// ***************** 
const uri  = "mongodb+srv://hdkingk:fNurWIXbjjEkdeog@cluster0-pflck.gcp.mongodb.net/ATN?retryWrites=true&w=majority";


/// ###################### CODE
async function viewLogin(request, response) {

    var username = request.query.username;
    var password = request.query.password;

    const xdb = await mongosee.connect(
        uri, 
        { useNewUrlParser: true , useUnifiedTopology: true }
    );
    
    if (xdb) 
    {
        xQuery = { Password : password , Username : username};
        const kq = await Account.find(xQuery).exec();

        if (kq && kq.length == 1) {          
            request.session.login_user = username;
            request.session.cookie.login_user = username;
            console.log("\n\t LOGIN THanh cong ! " +  username);
            response.redirect("/");
        } else {
            response.render("login", { mesg : "... KO co Data DB ! "} );
        }
    } else {
        response.render("login", { mesg : "... KO connect duoc DB ! "} );
    }

}

module.exports = viewLogin;

