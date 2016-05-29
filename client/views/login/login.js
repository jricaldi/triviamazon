Template.login.onCreated(() => {
	Session.set("test",3);
});

Template.login.onRendered(() => {
	$('.modal-trigger').leanModal();
});
