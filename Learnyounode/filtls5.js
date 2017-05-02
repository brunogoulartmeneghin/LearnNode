let fs = require('fs');
let str;
let array;

let lines = fs.readdir(process.argv[2],function callback(err,data){
	if(err)
		console.log("Ocorreu um erro");
	else{
		str = data.toString();

		array = str.split('\n');

		console.log(array.length - 1);
	}

});



