Template.game.onRendered(() => {
	var obtenidos = Animal.find().fetch();
		console.log(obtenidos);
		var _result = [];
		for (var i = obtenidos.length - 1; i >= 0; i--) {
			var obj = [];
			obj.push(i);
			obj.push(obtenidos[i].nombre);
			obj.push(obtenidos[i].nombreCientefico);
			obj.push(obtenidos[i].Latitud);
			obj.push(obtenidos[i].Longitud);
			switch(parseInt(obtenidos[i].estado)) {
			    	case 0:
			        obj.push("sin-peligro-actual");
			        break;
			    	case 1:
			        obj.push("preocupacion-menor");
			        break;
			        case 2:
			        obj.push("casi-amenazada");
			        break;
			        case 3:
			        obj.push("vulnerable");
			        break;
			        case 4:
			        obj.push("peligro-extincion");
			        break;
			        case 5:
			        obj.push("peligro-critico");
			        break;
			        case 6:
			        obj.push("extinta-silvestre");
			        break;
			        case 7:
			        obj.push("extinta");
			        break;
			}
			obj.push(145);
				switch(parseInt(obtenidos[i].clase)) {
			    	case 1:
			        obj.push("mammalia");
			        break;
			    	case 2:
			        obj.push("aves");
			        break;
			        case 3:
			        obj.push("reptilia");
			        break;
			        case 4:
			        obj.push("amphibia");
			        break;
			        case 5:
			        obj.push("insecta");
			        break;
			}
			obj.push(obtenidos[i].imagen)
			_result.push(obj);
		}
		console.log(_result);
		Session.set("listaObtenidos", _result);


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
	$(document).on("click", "#keyboard li", function() {
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
	$(document).on("click","#word li", function() {
		$(this).removeClass("typed").text(".");
		var num = $(this).attr("data-num");
		console.log(num);		
		
		$("#keyboard .input" + num).removeClass("used");
		$(this).attr("data-num", "");
	});	
	//Reset
	$(document).on("click","#trivia .reset",function() {
		resetKeyboard();
		resetWord();
	});
	//Next
	$(document).on("click","#trivia .next",function() {
		var animal = _.flatten(_.sample(Animal.find().fetch(), 1));
		Session.set("animal", (animal)[0]);
	});
	//Popup close
	// $("#popupNext .close").click(function() {
	// 	$("#popupNext").hide();
	// }); 

	},1500)
});

Template.game.helpers({
  imagen: function() {
  	var imagen = (Session.get("animal")).imagen;
	return imagen;
  },
  countName: () => {
  	var animal = _.flatten(_.sample(Animal.find().fetch(), 1));
  	Session.set("animal", (animal)[0]);
  	var nombre = ((Session.get("animal")).nombre).toUpperCase().split('');
  	for (var i = nombre.length - 1; i >= 0; i--) {
  		if (nombre[i] === ' ')
  			nombre[i] = '.';
  	}
  	Session.set("nombre", nombre.join(''));
  	nombre = _.shuffle(nombre);
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