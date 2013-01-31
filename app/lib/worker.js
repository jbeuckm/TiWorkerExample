worker.addEventListener('message', function(event){

		var url =  event.data.url;
		var filename = event.data.filename;
Ti.API.info(JSON.stringify( event));

		worker.postMessage('complete');
});
