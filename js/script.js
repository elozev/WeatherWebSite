var searchBtnCount = 0;

const API_KEY = "49460e11ec90a8ee40f7bb2f1aa1c0e8";

function loadInfo(data){
	alert(data.name);
	console.log(data.name + data.sys.country);
	$('#cityName').append(data.name);
	$('#countryName').append(data.sys.country);	
	$('#temp').append(parseFloat(data.main.temp) - 273.15 + " &deg;C");
	$('#wind').append(data.wind.speed + " km/h");
}

$(document).ready(function(){

	    $("#searchBtn").click(function(){
			if(searchBtnCount == 0){
	   			searchBtnCount++;
	        	var div = $("#boxSearch");
		        div.animate({height: '+=100px'}, "slow");
				div.animate({left: '-=150px'}, "slow");
		        div.animate({width: '+=300px'}, "slow");
		        $("#weatherInfo").show();
			}
			var input = $('#placeInput').val()
			apiCall(input);
	    });
});

function apiCall(city){

    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
        type: "GET",
        dataType: "json",
        success: function (data) {
        	console.log("Success")
        	loadInfo(data);
        },
        error: function (data) {
			alert("Error" + data.cod);
        }
    })
}