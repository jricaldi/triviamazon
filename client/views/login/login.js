Template.login.onCreated(() => {
	Session.set("test",3);
});

Template.login.onRendered(() => {
	console.log("ssss");
	setTimeout(function() {
		$('.modal-trigger').leanModal({
		    ready: function() { console.log("qaa"); setTimeout(function(){ 
		    	$(window).trigger("resize"); 
		    }, 1500); },
		});
	}, 2000);

});
