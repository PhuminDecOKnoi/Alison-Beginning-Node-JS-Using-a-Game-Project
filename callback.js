
function message(greeting, callback){
    console.log(greeting);
    callback();
}

function afterword(){
    console.log('Good Bye');
}
message('Hello',afterword); // function = message(greeting ,callback);