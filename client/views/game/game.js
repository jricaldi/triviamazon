Template.game.onRendered(() => {
	console.log(Session.get("animalTest"))
	function resetWord() {
		$("#word li").removeClass("typed")
			.text(".")
			.data("num", "");
	}
	function resetKeyboard() {
		$("#keyboard li").removeClass("used");
	}
	//Type letter		
	$("#keyboard li").click(function() {
		if ($("#word li").not(".typed").length > 0){
			if (!$(this).hasClass("used")) {
				var texto = $(this).text();
				$(this).addClass("used");
				$("#word li").not(".typed").first()
					.addClass("typed")
					.data("num", $(this).data("num") )
					.text(texto);
			}
		}					
	});
	//Erase letter
	$("#word li").click(function() {
		$(this).removeClass("typed").text(".");
		var num = $(this).data("num");
		$("#keyboard .input" + num).removeClass("used");
	});	
	//Reset
	$("#trivia .reset").click(function() {
		resetKeyboard();
		resetWord();
	});
	//Next
	$("#trivia .next").click(function() {
		$("#popupNext").show();
	});
	//Popup close
	$("#popupNext .close").click(function() {
		$("#popupNext").hide();
	}); 
});

Template.game.helpers({
  animal: function() {
  	var animal = _.flatten(_.sample(Animal.find().fetch(), 1));
	return animal;
  },
  countName: () => {
  	var animal = _.flatten(_.sample(Animal.find().fetch(), 1))
  	Session.set("animal", animal);
  	var nombre = ((Session.get("animal")))[0].nombre.split('');
  	for (var i = nombre.length - 1; i >= 0; i--) {
  		if (nombre[i] === ' ')
  			nombre[i] = '.';
  	}
  	console.log(nombre);
  	return nombre;
  },

});