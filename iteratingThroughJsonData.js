// Lets say you are trying to iterate through the data on the next line that was returned during a API get call and was passed into the function as "data".
//{"data":{"items":[{"date":"2017-02-02","revenue":111.1234567,"randomdata":000},{"date":"2017-02-03","revenue":123.98765,"randomdata":0000,}],"message":"Top 2 rows returned."}


function parseRubiconData(data){
    
    var setUpToIterate = JSON.parse(data);

   setUpToIterate.data.items.forEach(function(item) {   //Notice above that it has two keys, data, and items, before it goes into the array.      
                                                        //So you need to said up variableName.data.items.forEach(function(item){ for whatever you want to call)};
           var date = item.date;
           var randomData = item.randomdata;
           var revenue = item.revenue;
           var revenueTwoDecimalSpotsOnly = Number.parseFloat(revenue).toFixed(2) // This line changes revenue, which is a dollar amount, from 111.12334567 to 111.12   
            
              console.log("Revenue: " + revenue);
              console.log("Revenue with 2 decimals only: " + revenueTwoDecimalSpotsOnly)
              console.log("date: " + date);
              console.log("Random Data: " + randomData);
              console.log(" ");

                //The result would look something like this:
                //Revenue: 111.1234567
                //Revenue with 2 decimal only: 111.12
                //date: 2017-02-02
                //Random Data: 000
                //
                //Revenue: 123.98765
                //Revenue with 2 decimal only: 123.98
                //date: 2017-02-03
                //Random Data: 0000

               console.log("This person spent " + revenueTwoDecimalSpotsOnly + " with their random data being " + randomData + " on " + date + ".");
               console.log(" ");

               //This person spent 111.12 with their random data being 000 on 2017-02-02.
               //
               //This person spent 123.98 with their random data being 0000 on 2017-02-03.       
           }
)}