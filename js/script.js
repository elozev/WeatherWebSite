$(document).ready(function(){
    $("#searchBtn").click(function(){
        var div = $("#boxSearch");
        div.animate({height: '+=100px'}, "slow");
		div.animate({left: '-=150px'}, "slow");
        div.animate({width: '+=300px'}, "slow");
        // div.animate({right: '+=100px'}, "slow");

        $("#weatherInfo").show();
    });
});

function apiCall(city, region){
	
    $.ajax({
        url: "http://localhost:8080/rest-ajax-homework/api/cars",
        type: "GET",
        dataType: "json",
        data: {
            "manufacturer" : filterManufacturer,
            "model" : filterModel,
            "year" : filterYear,
            "engineType" : filterEngine,
            "page": currentPageLoaded++
        },
        success: function (data) {
            $.each(data, function (index) {
                loadIntoTable(data[index]);
            })
            isGettingRequest = true;
        },
        error: function () {
            $('#noMoreToLoad').empty();
            var paragraph = $('<p>');
            paragraph.append('<b>No more cars to load<b>');
            paragraph.append('</p>');
            $('#noMoreToLoad').append(paragraph);
            isEndOfTableReached = true;
        }
    })
}