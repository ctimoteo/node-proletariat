var
	Proletariat	= require('../lib/proletariat').Client;
	proletariat	= new Proletariat({host: "127.0.0.1",DEBUG:true}),

	works = [];

for ( var x = 0 ; x < 1000 ; x++ ) {
	works.push(function(handler){
		var r = 3+3;
		handler(null,r);
	});
}

proletariat.work(works,function(err,res){
	if ( err ) {
		console.log("Error running work: ",err);
		return;
	}

	console.log("Result: ",res.length);
	process.exit(0);
});
