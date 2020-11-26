//Question Setting
//Using for Question Setting App! 
//The codes here adapted from https://github.com/pkkj/SkyExplorer1/blob/master/t100_ts/TS/Common/MapUtils.ts & https://gis.stackexchange.com/questions/88273/triggering-click-event-on-leaflet-map

//var global variable first
var popup = L.popup();
var coord;
var latitude;
var longitude;

//Geting the coordinates when clicking the map and filling the latlng into the form automatically
//toString(): A method returns a string representing the object
//substr(): A method returns a portion of the string

function onMapClick(e){
	popup.setLatLng(e.latlng);
	
	coord = e.latlng.toString();
	coord = coord.substr(7, coord.length - 1);   //limited the coordinates display way
	coord = coord.split(')')[0]; 
	
	latitude = coord.split(',')[0];

	longitude = coord.split(',')[1];
	
	popup.setContent('Coordinates: ' + latitude + ' ,  ' + longitude);
	popup.openOn(mymap);
	
	document.getElementById('latitude').value=latitude
	document.getElementById('longitude').value=longitude
	}

	mymap.on('click', onMapClick);


































