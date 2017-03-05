function data(api_key, api_secret, account_id){
    
    var https = require('https');

    var options = {

    host: 'api.urlgoeshere.com',

    port: 443,
        
    path: '/path/goes/here/?example=parameters/', //account ID might go into the path if you are hard coding it, it did for the one I had to code this for.

       // authentication headers

    headers: {

    'Authorization': 'Basic ' + new Buffer(api_key + ':' + api_secret).toString('base64')  //You can hard code the api_key and api_secret in by putting them within 'api_key' and 'api_secret'

   }   
};
   var request = https.get(options, function(res){

   var body = "";

   res.on('data', function(data) {  //on response('data', function(data) <---- creates function that pulls in data on response.

      body += data; //Pulling in data in blocks of code.  This adds the data as it comes in.  
                    //For example, it might pull, "This is part", then "of the code."  body += data makes it "this is part of the code."
   });

   res.on('end', function() {  // res.on('end', function() <----What you specify in this function tells it how to respond when the data coming in ends.

    //here we have the full response, html or json object

      console.log(body);  // Will print out all the data it pulled in in the terminal.
       
   })

   res.on('error', function(e) {

      console.log("Got error: " + e.message);  // how to respond when an error is received.  A good response is error.statusCode.  
                                               //401 = access denied.  400 = just didn't work.  200 = success.
   });
        
	});
    
}