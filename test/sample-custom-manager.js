#!/usr/bin/env node

var
	Manager	= require('../lib/proletariat').Manager,
	manager	= new Manager({ DEBUG: false, SACRED_GUARANTEES: false });

// Customize work->worker assign method

manager.workSelectWorker = function(w,workers,availability) {

	var
		comrades = Object.keys(workers);

	if ( w.assigntimeout ) {
		console.log("Not assigning (i'm bad)");
		return null;
	}

	return this.workers[comrades[parseInt(Math.random()*comrades.length)]];

};

manager.on('sysmsg',function(m){
	console.log("System message: ",m);
});

// Start

manager.start();
