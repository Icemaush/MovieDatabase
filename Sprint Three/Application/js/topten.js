// Get top ten data and refresh every 5 seconds
function GetTopTenData(field) {
    clearInterval(autoRefreshId);
    var count = 1;
    TopTen(field);
    autoRefreshId = setInterval(function() {
        TopTen(field);
        console.log("Refresh: " + count);
        count++
    }, 5000);
}

// Search database for top 10 most searched movies
function TopTen(field) {
    var xhttp;
    var title = document.getElementById("title").value;
    var genre = document.getElementById("genre").value;
    var rating = document.getElementById("rating").value;
    var year = document.getElementById("year").value;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest(); // For most browsers
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP"); // For IE
    }
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText.length != 0) {
                document.getElementById("errorMessage").style.display = "none";
                var results = this.responseText.replace(/\\/g, "")
                    .replace(/ "/g, " \'").replace(/" /g, "\' ")
                movies = JSON.parse(results);

                // Sort movies
                sortOrder = 1;
                SortMovies(field);
                
                GetTopTenGraph(movies, field);
                UpdateTable();
                
            } else {
                ClearTable();
                document.getElementById("errorMessage").innerHTML = "No movies found.";
                document.getElementById("errorMessage").style.display = "inline";
            }
        }
    };
    xhttp.open("POST", "./php/Index/top_ten.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("title=" + title + "&genre=" + genre + "&rating=" + rating + "&year=" + year + "&field=" + field);
}

// Load top ten movies graph from database
function GetTopTenGraph(movies, field) {
    var json = JSON.stringify(movies);
    var xhttp;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest(); // For most browsers
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP"); // For IE
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var results = this.responseText;
            $('.graphoutput').attr('src', 'data:image/png;base64,' + results);
            document.getElementById("graph").style.display = "inline";
        }
    };
    xhttp.open("POST", "./php/Index/get_top_ten_graph.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("jsonObject=" + json + "&field=" + field);
}