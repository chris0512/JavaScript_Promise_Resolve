let sentToAirport = true;
let p = new Promise(function(resolve, reject){
    if(sentToAirport){
        resolve("from resolve(): send to airport");
    }else{
        console.log("can't sent to airport'");
        reject();
    }
});

p.then(function(message){console.log(`${message} - promise resolved`)})
    .catch(function(){console.log("Promise reject")});