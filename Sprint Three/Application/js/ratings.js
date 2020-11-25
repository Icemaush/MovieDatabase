// Set values for rating stars
$(document).on("click", ".ratemovie", function() {
    var title = $(this).attr("id");
    $(".rating-star").attr("name", title);
});

// Set values for rating stars
$(document).on("click", ".rating-star", function() {
    var title = $(this).attr("name");
    var score = $(this).attr("value");
    RateMovie(title, score);

    DisableStarMouseoverEvents();
    DisableStarButtons();

    // Set stars under selection to gold
    if ($(this).attr("id") == "1star") {
        $(this).css("color", "gold");
    } else if ($(this).attr("id") == "2star") {
        $("#1star").css("color", "gold");
        $(this).css("color", "gold");
    } else if ($(this).attr("id") == "3star") {
        $("#1star").css("color", "gold");
        $("#2star").css("color", "gold");
        $(this).css("color", "gold");
    } else if ($(this).attr("id") == "4star") {
        $("#1star").css("color", "gold");
        $("#2star").css("color", "gold");
        $("#3star").css("color", "gold");
        $(this).css("color", "gold");
    } else if ($(this).attr("id") == "5star") {
        $("#1star").css("color", "gold");
        $("#2star").css("color", "gold");
        $("#3star").css("color", "gold");
        $("#4star").css("color", "gold");
        $(this).css("color", "gold");
    }
});

// Reset star colours to default
function ResetStarColors() {
    $("#1star").css("color", "rgb(92, 80, 50)");
    $("#2star").css("color", "rgb(92, 80, 50)");
    $("#3star").css("color", "rgb(92, 80, 50)");
    $("#4star").css("color", "rgb(92, 80, 50)");
    $("#5star").css("color", "rgb(92, 80, 50)");
}

// Set rating star animation
function SetRatingStarAnimation() {
    $('.rating-1star-div').mouseover( function() {
        $(this).find(' > button').css("color", "gold");
        }).mouseout(function() {
        $(this).find(' > button').css("color", "rgb(92, 80, 50)");
    })

    $('.rating-2star-div').mouseover( function() {
        $('.rating-1star-div').find(' > button').css("color", "gold");
        $(this).find(' > button').css("color", "gold");
        }).mouseout(function() {
        $('.rating-1star-div').find(' > button').css("color", "rgb(92, 80, 50)");
        $(this).find(' > button').css("color", "rgb(92, 80, 50)");
    })

    $('.rating-3star-div').mouseover( function() {
        $('.rating-1star-div').find(' > button').css("color", "gold");
        $('.rating-2star-div').find(' > button').css("color", "gold");
        $(this).find(' > button').css("color", "gold");
        }).mouseout(function() {
        $('.rating-1star-div').find(' > button').css("color", "rgb(92, 80, 50)");
        $('.rating-2star-div').find(' > button').css("color", "rgb(92, 80, 50)");
        $(this).find(' > button').css("color", "rgb(92, 80, 50)");
    })

    $('.rating-4star-div').mouseover( function() {
        $('.rating-1star-div').find(' > button').css("color", "gold");
        $('.rating-2star-div').find(' > button').css("color", "gold");
        $('.rating-3star-div').find(' > button').css("color", "gold");
        $(this).find(' > button').css("color", "gold");
        }).mouseout(function() {
        $('.rating-1star-div').find(' > button').css("color", "rgb(92, 80, 50)");
        $('.rating-2star-div').find(' > button').css("color", "rgb(92, 80, 50)");
        $('.rating-3star-div').find(' > button').css("color", "rgb(92, 80, 50)");
        $(this).find(' > button').css("color", "rgb(92, 80, 50)");
    })

    $('.rating-5star-div').mouseover( function() {
        $('.rating-1star-div').find(' > button').css("color", "gold");
        $('.rating-2star-div').find(' > button').css("color", "gold");
        $('.rating-3star-div').find(' > button').css("color", "gold");
        $('.rating-4star-div').find(' > button').css("color", "gold");
        $(this).find(' > button').css("color", "gold");
        }).mouseout(function() {
        $('.rating-1star-div').find(' > button').css("color", "rgb(92, 80, 50)");
        $('.rating-2star-div').find(' > button').css("color", "rgb(92, 80, 50)");
        $('.rating-3star-div').find(' > button').css("color", "rgb(92, 80, 50)");
        $('.rating-4star-div').find(' > button').css("color", "rgb(92, 80, 50)");
        $(this).find(' > button').css("color", "rgb(92, 80, 50)");
    })
}

// Disable star mouseover events
function DisableStarMouseoverEvents() {
    $(".rating-1star-div").unbind("mouseover mouseout");
    $(".rating-2star-div").unbind("mouseover mouseout");
    $(".rating-3star-div").unbind("mouseover mouseout");
    $(".rating-4star-div").unbind("mouseover mouseout");
    $(".rating-5star-div").unbind("mouseover mouseout");
}

// Disable star buttons
function DisableStarButtons() {
    $("#1star").prop("disabled", true);
    $("#2star").prop("disabled", true);
    $("#3star").prop("disabled", true);
    $("#4star").prop("disabled", true);
    $("#5star").prop("disabled", true);
}

// Enable star buttons
function EnableStarButtons() {
    $("#1star").prop("disabled", false);
    $("#2star").prop("disabled", false);
    $("#3star").prop("disabled", false);
    $("#4star").prop("disabled", false);
    $("#5star").prop("disabled", false);
}

// Rate movie
function RateMovie(title, score) {
    var xhttp;
    xhttp = new XMLHttpRequest(); // For most browsers
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText.length != 0) {
                DisplayAlert("ratingAlert", "alert alert-success", "Thanks for rating this movie!");
            } else {
                DisplayAlert("ratingAlert", "alert alert-danger", "Unable to process request. Please try again later.");
            }
        }
    };
    xhttp.open("POST", "./php/Index/rate_movie.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("title=" + title + "&score=" + score);
}