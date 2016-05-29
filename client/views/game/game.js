Template.game.onRendered(() => {
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