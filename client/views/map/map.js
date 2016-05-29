// Template.map.onRendered(() => {
// 	jQuery(document).ready(function($){
// 	//set your google maps parameters
// 	var latitude = -20,
// 		longitude = -60;
// 	function map_zoom() {
// 		var map_zoom = 3;	
// 		var windowWidth = $(window).width();
// 		if (windowWidth > 500) {
// 			map_zoom = 3;
// 			if (windowWidth > 1000) {
// 				map_zoom = 4;
// 				if (windowWidth > 2020) {
// 					map_zoom = 5;
// 					if (windowWidth > 4020) {
// 						map_zoom = 6;
// 					}
// 				}
// 			}
// 		}
// 		return map_zoom;	
// 	}
// 	var gmarkers1 = [];
// 	var markers1 = [];
// 	// Our markers
// 	markers1 = [
// 	    ['0', 'Ghostbusters', 'New York', 40.689184, -74.044586, 'extinta', 115, 'mammalia'],	    
// 	    ['1', 'Scott Pilgrim v.s. The World', 'Toronto', 43.656049, -79.392591, 'extinta-silvestre', 130, 'mammalia'],
// 	    ['2', 'Twin Peaks', 'Washington State', 47.495050, -121.786895, 'peligro-critico', 130, 'mammalia'],
// 	    ['3', 'Back to the Future', 'Los Angeles', 34.073760, -117.551828, 'extinta', 130, 'mammalia'],
// 	    ['4', 'The Hateful Eight', 'Colorado', 38.959364, -105.673996, 'peligro-critico', 130, 'reptilia'],
// 	    ['5', 'Fear and Loathing in Las Vegas', 'Las Vegas', 35.998443, -115.193645, 'extinta-silvestre', 145, 'reptilia'],
	    
// 	    ['6', 'City of God', 'Rio de Janeiro', -22.916978, -43.188847, 'peligro-critico', 115, 'mammalia'],
// 	    ['7', 'The Motorcycle Diaries', 'Buenos Aires to Caracas', -37.074275, -57.046577, 'peligro-critico', 145, 'reptilia'],
	    
// 	    ['8', 'Sherlock', 'London', 51.523850, -0.158621, 'peligro-critico', 115, 'mammalia'],
// 	    ['9', 'Doctor Who', 'Cardiff', 51.459601, -3.160501, 'extinta', 115, 'mammalia'],
// 	    ['10', 'Game of Thrones', 'Europe', 55.134749, -6.380690, 'peligro-extincion', 130, 'aves'],
	    
// 	    ['11', 'Star Wars: The Force Awakens', 'Lake District', 54.684365, -3.233232, 'extinta', 130, 'aves'],
// 	    ['12', 'Midnight in Paris', 'Paris', 48.858356, 2.294471, 'extinta-silvestre', 115, 'mammalia'],
// 	    ['13', 'Run Lola Run', 'Berlin', 52.521377, 13.385320, 'casi-amenazada', 115, 'mammalia'],
// 	    ['14', 'The Danish Girl', 'Copenhagen', 55.667219, 12.571010, 'casi-amenazada', 115, 'mammalia'],
// 	    ['15', 'War and Peace', 'The Baltic Region', 59.922655, 30.293444, 'peligro-extincion', 130, 'reptilia'],
	    
// 	    ['16', 'Lord of the Rings Trilogy', 'New Zealand', -41.894021, 173.489618, 'vulnerable', 130, 'aves'],
// 	    ['17', 'Finding Nemo', 'East Australian Coast', -16.540126, 145.486195, 'vulnerable', 130, 'amphibia'],
	   
// 	    ['18', 'Sense8', 'Mumbai', 19.071815, 72.878445, 'peligro-extincion', 115, 'mammalia'],
// 	    ['19', 'Apocalypse Now', 'Philippines / Vietnam', 12.349496, 123.418140, 'preocupacion-menor', 130, 'amphibia'],
// 	    ['20', 'Kill Bill', 'Tokyo', 35.708317, 139.732192, 'preocupacion-menor', 115, 'mammalia'],
// 	    ['21', 'Lara Croft: Tomb Raider', 'Cambodia', 11.571225, 104.928655, 'vulnerable', 130, 'aves'],
// 	    ['22', 'Mad Max: Fury Road', 'Namibia', -22.518532, 17.072431, 'preocupacion-menor', 130, 'aves'],
// 	    ['23', 'Spectre', 'Tangier', 35.755448, -5.833038, 'vulnerable', 115, 'mammalia'],
// 	    ['24', 'Mandela: Long Walk To Freedom', 'South Africa', -33.935148, 18.418463, 'peligro-critico', 145, 'reptilia'],
// 	];
// 	/**
// 	 * Function to add marker to map
// 	 */
// 	    var infoReference = { infoBubble: [] };

// 	function addMarker(marker) {
// 		var id = marker[0];
// 	    var estado = marker[5];
// 	    var clase = marker[7];
// 	    var title = marker[1];
// 	    var pos = new google.maps.LatLng(marker[3], marker[4]);


// 	    marker1 = new google.maps.Marker({
// 	        title: title,
// 	        position: pos,
// 	        estado: estado,
// 	        clase: clase,
// 	        map: map,
// 	        icon: marker_url,
// 	     //   optimized : false
// 	    });
// 	    gmarkers1.push(marker1);
// 	    google.maps.event.addListener(marker1, 'mouseover', function (marker1, id) {
// 	        return function (e) {  
// 	        	if (infoReference.infoBubble[id] != undefined) {
// 	        		infoReference.infoBubble[id].close();
// 	        	}  
// 			    infoReference.infoBubble[id].open(map, marker1);
// 	        }
// 	    }(marker1, id));	    
// 	    google.maps.event.addListener(marker1, 'mouseout', function () {
// 	    	return function (e) {	   
		    		
// 	    		for (i = 0; i < markers1.length; i++) {
// 		    		if (infoReference.infoBubble[i] !== undefined) {
// 		    			infoReference.infoBubble[i].close();
// 		    		}	
// 		    	}
// 	    	}	    	
// 	   	}());
// 	}
// 	/**
// 	 * Function to filter markers by category
// 	 */
// 	filterMarkers = function (element) {
// 		var count = 0;
// 	    for (i = 0; i < markers1.length; i++) {
// 	    	marker = gmarkers1[i];
// 	    	marker.setVisible(true);
// 	    	//If it is not a parent filter
// 	    	if (!$(this).hasClass("all")) {
// 	    		//Check the parent
// 	    		var classElement = $(element.target).data("parent");
// 	    		classElement = classElement.substr(0, classElement.length-6); 
// 				if ($("." + classElement).is(":checked")) {
// 					$("." + $(element.target).data("parent")).prop('checked', true); 
// 				} else {
// 					$("." + $(element.target).data("parent")).prop('checked', false); 
// 				}
// 			} else {
// 				//If it is a parent filter and it is checked
// 				var type = $(element.target).data("filtertype");
// 				if ($(element.target).is(":checked")) {
// 					//Check the childs
// 	    			$('input.' + type ).prop('checked', true); 					
// 				} else {
// 					//If it is not checked, uncheck childs
// 	    			$('input.' + type ).prop('checked', false); 
// 	    		}
// 			}
// 			//If parent is checked and child is not checked, hide marker with that subtype
// 	    	$("input.all").each(function() {
// 	    		var type = $(this).data("filtertype");
// 	    		if ($(this).is(":checked")) {
// 	    			if (!$('input.'+ marker[type] + "." + type ).is(':checked')) {
// 			        	if (marker.visible) {
//  			        		marker.setVisible(false);
// 			        		count++;
// 			        	}
// 			        } 
// 	    		} 
// 	    	});      
// 	    }
// 	    if (count == markers1.length) {
// 	    	$("#noMatch").show();
// 	    	$("#noMatch span").text("No se encontraron resultados.");
// 	    }
// 	}
// 	$('input[type="checkbox"]').prop('checked', false)
// 								.change(filterMarkers);
// 	//google map custom marker icon - .png fallback for IE11
// 	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
// 	var marker_url = ( is_internetExplorer11 ) ? '../img/cd-icon-location.png' : '../img/cd-icon-location.png';
		
// 	//define the basic color of your map, plus a value for saturation and brightness
// 	var	main_color = '#0D6C91',
// 		water_color = '#0D6C91',
// 		landscape_color = "#f2e4c7",
// 		saturation_value= 0,
// 		brightness_value= 0;

// 	//we define here the style of the map
// 	var style= [ 	
// 		{
// 			//set saturation for the labels on the map
// 			elementType: "labels",
// 			stylers: [
// 				{saturation: saturation_value
// 					//visibility: "off"
// 				}
// 			],
// 		},  
// 	    {	//poi stands for point of interest - don't show these lables on the map 
// 			featureType: "poi",
// 			elementType: "labels",
// 			stylers: [
// 				{visibility: "off"}
// 			]
// 		},
// 		{
// 			featureType: "administrative",
// 			elementType: "labels.text.fill",
// 			stylers: [
// 				{color: "#000000"},
// 			/*	{weight: 0.2 }*/
			
// 			]	
// 		},
// 		{
// 			//don't show highways lables on the map
// 	        featureType: 'road.highway',
// 	        elementType: 'labels',
// 	        stylers: [
// 	            //{visibility: "off"}
// 	        ]
// 	    }, 
// 		{ 	
// 			//don't show local road lables on the map
// 			featureType: "road.local", 
// 			elementType: "labels.icon", 
// 			stylers: [
// 				//{visibility: "off"} 
// 			] 
// 		},
// 		{ 
// 			//don't show arterial road lables on the map
// 			featureType: "road.arterial", 
// 			elementType: "labels.icon", 
// 			stylers: [
// 				//{visibility: "off"}
// 			] 
// 		},
// 		{
// 			//don't show road lables on the map
// 			featureType: "road",
// 			elementType: "geometry.stroke",
// 			stylers: [
// 				//{visibility: "off"}
// 			]
// 		}, 
// 		//style different elements on the map
// 		{ 
// 			featureType: "transit", 
// 			elementType: "geometry.fill", 
// 			stylers: [
// 				{ hue: main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		}, 
// 		{
// 			featureType: "poi",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		},
// 		{
// 			featureType: "poi.government",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		},
// 		{
// 			featureType: "poi.sport_complex",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		},
// 		{
// 			featureType: "poi.attraction",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		},
// 		{
// 			featureType: "poi.business",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		},
// 		{
// 			featureType: "transit",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		},
// 		{
// 			featureType: "transit.station",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		},
// 		{
// 			featureType: "landscape",
// 			stylers: [
// 				//{ hue: main_color },
// 				{ color: landscape_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
			
// 		},
// 		{
// 			featureType: "road",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		},
// 		{
// 			featureType: "road.highway",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		}, 
// 		{
// 			featureType: "water",
// 			//elementType: "geometry",
// 			elementType: "all",
// 			stylers: [
// 				//{ hue: main_color },
// 				{ color: water_color },
// 				{ visibility: "on" }, 
// 				{ lightness: brightness_value }, 
// 				{ saturation: saturation_value }
// 			]
// 		}
// 	];
		
// 	//set google map options
// 	var map_options = {
//       	center: new google.maps.LatLng(latitude, longitude),
//       	zoom: map_zoom(),
//       	//panControl: false,
//       	zoomControl: true,
//       	mapTypeControl: false,
//       	streetViewControl: false,
//       	mapTypeId: google.maps.MapTypeId.ROADMAP,
//       	scrollwheel: false,
//       	styles: style,
//     }
//     //inizialize the map
// 	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
// 	//add a custom marker to the map
// 	function convertToSlug(Text)
// 	{
// 	    return Text
// 	        .toLowerCase()
// 	        .replace(/ /g,'-')
// 	        .replace(/[^\w-]+/g,'')
// 	        ;
// 	}
// 	for (i = 0; i < markers1.length; i++) {		
//     	marker = markers1[i];
//     	var id = marker[0];
//     	var height = marker[6];
//     	var content = '<img class="infoImage" src="../img/icons/icon' + id + '.png"/><h2 class="infoTitle">' + marker[1] + '</h2>'
// 	    				+ '<p class="infoDesc">' + marker[2] + '</p>'
// 	    				+ '<a href="../map/'+ convertToSlug('movies-in-' + marker[8]) + '" class="infoButton">Ver Info</a>';
	  
// 	  	infoReference.infoBubble[id] = new InfoBubble({
// 	      content: content,
// 	      //position: new google.maps.LatLng(-32.0, 149.0),
// 	      shadowStyle: 1,
// 	      padding: 0,
// 	      backgroundColor: '#ebebeb',
// 	      borderRadius: 5,
// 	      arrowSize: 10,
// 	      borderWidth: 2,
// 	      minWidth: 190,
// 	      maxWidth: 190,
// 	      minHeight: height,
// 	      maxHeight: height,
// 	      borderColor: '#0D6C91',
// 	      disableAutoPan: true,
// 	      hideCloseButton: true,
// 	      arrowPosition: 50,
// 	      backgroundClassName: 'transparent',
// 	      arrowStyle: 0
// 	 	});	    
//     }
//     for (i = 0; i < markers1.length; i++) {
//         addMarker(markers1[i]);  
//     }
// 	google.maps.event.addDomListener(window, "resize", function() {
//   		var center = new google.maps.LatLng(latitude, longitude);
// 		map.setZoom(map_zoom()); 
// 	  	map.setCenter(center); 
// 	});
//  	google.maps.event.addListener(map, 'center_changed', function() {
//     	checkBounds(map);}
// 	);
// 	var filterControlDiv = document.getElementById('filter_the_map');	
//  	// If the map position is out of range, move it back
//  	var strictBounds = new google.maps.LatLngBounds(
// 	  new google.maps.LatLng(-40.760781, -90.400391),
// 	  new google.maps.LatLng(0.065543, -45.572269) 
// 	);
// 	function checkBounds(map) {
//         if (strictBounds.contains(map.getCenter())) return;

//         // We're out of bounds - Move the map back within the bounds
//         var c = map.getCenter(),
//         x = c.lng(),
//         y = c.lat(),
//         maxX = strictBounds.getNorthEast().lng(),
//         maxY = strictBounds.getNorthEast().lat(),
//         minX = strictBounds.getSouthWest().lng(),
//         minY = strictBounds.getSouthWest().lat();

//         console.log(x + " < " + minX);
//         console.log(x + " > " + maxX);
//         console.log(y + " < " + minY);
//         console.log(y + " > " + maxY);

//         if (x < minX) x = minX;
//         if (x > maxX) x = maxX;
//         if (y < minY) y = minY;
//         if (y > maxY) y = maxY;

//         map.setCenter(new google.maps.LatLng(y, x));
//     }



//   	//insert the zoom div on the top left of the map
//   	map.controls[google.maps.ControlPosition.LEFT_TOP].push(filterControlDiv);

//   	$(".filterHeader").click(function() {
//   		$("#filter_the_map").toggleClass("closed");
//   	});
// 	var options = {

// 	  url: "../db/movies.json",

// 	  getValue: function(element) {
// 	  	return element.title + " - " + element.location;
// 	  },
// 	  template: {
//        // type: "description",
//         //fields: {
//             //description: "location"
//        // }
//       },
// 	  list: {	
// 	    match: {
// 	      enabled: true
// 	    },
// 	    onSelectItemEvent: function() {
            
//         },
//         onChooseEvent: function() {
//         	var coordinates= $("#search").getSelectedItemData().coordinates;
//             var newCenter= new google.maps.LatLng(coordinates[0], coordinates[1]);
//             map.setCenter(newCenter);
//             map.setZoom(8); 
//         }
// 	  },
// 	  theme: "square"
// 	};

// 	$("#search").easyAutocomplete(options);	
// 	$("#noMatch .close").click(function() {
// 		$("#noMatch").hide();
// 	});
// 	jQuery.getJSON('http://opensharecount.com/count.json?url=http://expediablog.co.uk/world-on-screen/', function (data) {
// 	    jQuery('#twitter-url-shares').text(data.count);
// 	});
// });
// });