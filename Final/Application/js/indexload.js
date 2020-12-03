// Process on page load
$(document).ready( function (){
    GetOptions();
    SetScrollToTop();
    SetModalFunction();
    SetRatingStarAnimation();
});

// Modal close button functionality
function SetModalFunction() {
    // Close active modal only when pressing close button
    $('.modalCloseButton').on('click', function(){
        var $this = $(this);
        var modalId = $this.attr('data-modalid');
        $('#' + modalId).modal('hide');
    })

    // Reset form data to default values on modal close
    $("#modalSubscribe").on('hide.bs.modal', function(){
        $("#subscribeFirstName").val("");
        $("#subscribeLastName").val("");
        $("#subscribeEmail").val("");
        $("#subscribeNewsletter").prop("checked", true);
        $("#subscribeBreakingNews").prop("checked", true);
        $("#subscribeAlert").hide();
    });

    // Dim background modals
    $("#modalUnsubscribe").on('hide.bs.modal', function(){
        $("#unsubscribeEmail").val("");
        $("#unsubscribeAlert").hide();
    });

    // Reset rating modal on close
    $("#modalRateMovie").on('hide.bs.modal', function(){
        $("#ratingAlert").hide();
        ResetStarColors();
        SetRatingStarAnimation();
        EnableStarButtons();
    });
}

// Set scroll to top button functionality
function SetScrollToTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
}

// Update search options based on existing database records
function GetOptions() {
    UpdateGenreOptions();
    UpdateRatingOptions();
    UpdateYearOptions();
}

// Add genre search options
function UpdateGenreOptions() {
    var xhttp;
    var genreOptions = document.getElementById("genre");

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest(); // For most browsers
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP"); // For IE
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var options = [] = JSON.parse(this.responseText);

            for (row in options) {
                var genreOption = document.createElement('option');
                genreOption.innerHTML = options[row].Genre;
                genreOptions.append(genreOption);
            }
        }
    };
    xhttp.open("POST", "./php/Index/get_genre_options.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

// Add rating search options
function UpdateRatingOptions(element, options) {
    var xhttp;
    var ratingOptions = document.getElementById("rating");

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest(); // For most browsers
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP"); // For IE
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var options = [] =JSON.parse(this.responseText);

            for (row in options) {
                var ratingOption = document.createElement('option');
                ratingOption.innerHTML = options[row].Rating;
                ratingOptions.append(ratingOption);
            }
        }
    };
    xhttp.open("POST", "./php/Index/get_rating_options.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

// Add year search options
function UpdateYearOptions(element, options) {
    var xhttp;
    var yearOptions = document.getElementById("year");

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest(); // For most browsers
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP"); // For IE
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var options = [] = JSON.parse(this.responseText);

            for (row in options) {
                var yearOption = document.createElement('option');
                yearOption.innerHTML = options[row].Year;
                yearOptions.append(yearOption);
            }
        }
    };
    xhttp.open("POST", "./php/Index/get_year_options.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
