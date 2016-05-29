Template.game.onRendered(() => {
	setTimeout( () => {
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
					.attr("data-num", $(this).attr("data-num") )
					.text(texto);
			}
			if ($("#word li").not(".typed").length == 0){
				var texto = "";
				$("#word").find("li").each(function(){
					texto = texto + $(this).text();
				});
				console.log("jeojeojo"+ Session.get("nombre"));
				if(texto === Session.get("nombre")){
					Session.set("detalle",true);
					console.log("holaaa" + Session.get("detalle"));
				}
			}
		} 				
	});
	//Erase letter
	$("#word li").click(function() {
		$(this).removeClass("typed").text(".");
		var num = $(this).attr("data-num");
		console.log(num);		
		
		$("#keyboard .input" + num).removeClass("used");
		$(this).attr("data-num", "");
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

	},1500)
});

Template.game.helpers({
  imagen: function() {
  	var imagen = (Session.get("animal")).imagen;
	return imagen;
  },
  countName: () => {
  	var animal = _.flatten(_.sample(Animal.find().fetch(), 1))
  	Session.set("animal", (animal)[0]);
  	var nombre = ((Session.get("animal")).nombre).toUpperCase().split('');
  	for (var i = nombre.length - 1; i >= 0; i--) {
  		if (nombre[i] === ' ')
  			nombre[i] = '.';
  	}
  	Session.set("nombre", nombre.join(''));
  	return nombre;
  },
  detalle: () => {
  	return Session.get("detalle");
  },
  animal : () => {
  	return Session.get("animal");
  }
});

Template.game.events({
	"click #seguir" : () => {
		Session.set("detalle",false)
	}
});