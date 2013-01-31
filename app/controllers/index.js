
$.index.open();


var worker = require('ti.worker');
var task = worker.createWorker('worker.js');

task.addEventListener('message', function(e){
	Ti.API.info('task event '+JSON.stringify(e));
		
    task.terminate();
});


task.postMessage({
    url: 'http://google.com',
    filename: 'saved.html'
});

