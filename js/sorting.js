function ResetTableHeaders() {
    var tableHeaders = [
        document.getElementById("SortByTitle"),
        document.getElementById("SortByStudio"),
        document.getElementById("SortByStatus"),
        document.getElementById("SortBySound"),
        document.getElementById("SortByVersions"),
        document.getElementById("SortByPrice"),
        document.getElementById("SortByRating"),
        document.getElementById("SortByYear"),
        document.getElementById("SortByGenre"),
        document.getElementById("SortByAspect"),
        document.getElementById("SortBySearchCount")
    ];

    for (header in tableHeaders) {
        tableHeaders[header].innerText = tableHeaders[header].innerText.split(" ")[0];
    }
}

// Sort movies depending on clicked table header
function SortMovies(field) {
    switch (field) {
        case "Title":
            SortByTitle();
            break;
        case "Studio":
            SortByStudio();
            break;
        case "Status":
            SortByStatus();
            break;
        case "Sound":
            SortBySound();
            break;
        case "Versions":
            SortByVersions();
            break;
        case "Price":
            SortByPrice();
            break;
        case "Rating":
            SortByRating();
            break;
        case "Year":
            SortByYear();
            break;
        case "Genre":
            SortByGenre();
            break;
        case "Aspect":
            SortByAspect();
            break;
        case "SearchCount":
            SortBySearchCount();
            break;
        default:
            break;
    }
    UpdateTable();
}

// Change sort order
function ChangeSortOrder(field) {
    if (field == sortedBy) {
        if (sortOrder == 1) {
            sortOrder = 2;
            SortMovies(field);
        } else {
            sortOrder = 1;
            SortMovies(field);
        }
    } else {
        SortMovies(field);
    }
}

// Sort by movie title
function SortByTitle() {
    ResetTableHeaders();
    sortedBy = "Title";
    if (sortOrder == 1) {
        movies.sort(compareTitleDescending);
        document.getElementById("SortByTitle").innerText = "Title \u2193";
    } else {
        movies.sort(compareTitleAscending);
        document.getElementById("SortByTitle").innerText = "Title \u2191";
    }
}

// Sort by movie studio
function SortByStudio() {
    sortedBy = "Studio";
    ResetTableHeaders();
    if (sortOrder == 1) {
        movies.sort(compareStudioDescending);
        document.getElementById("SortByStudio").innerText = "Studio \u2193";
    } else {
        movies.sort(compareStudioAscending);
        document.getElementById("SortByStudio").innerText = "Studio \u2191";
    }
}

// Sort by movie Status
function SortByStatus() {
    sortedBy = "Status";
    ResetTableHeaders();
    if (sortOrder == 1) {
        movies.sort(compareStatusDescending);
        document.getElementById("SortByStatus").innerText = "Status \u2193";
    } else {
        movies.sort(compareStatusAscending);
        document.getElementById("SortByStatus").innerText = "Status \u2191";
    }
}

// Sort by movie Sound
function SortBySound() {
    sortedBy = "Sound";
    ResetTableHeaders();
    if (sortOrder == 1) {
        movies.sort(compareSoundDescending);
        document.getElementById("SortBySound").innerText = "Sound \u2193";
    } else {
        movies.sort(compareSoundAscending);
        document.getElementById("SortBySound").innerText = "Sound \u2191";
    }
}

// Sort by movie Versions
function SortByVersions() {
    sortedBy = "Versions";
    ResetTableHeaders();
    if (sortOrder == 1) {
        movies.sort(compareVersionsDescending);
        document.getElementById("SortByVersions").innerText = "Versions \u2193";
    } else {
        movies.sort(compareVersionsAscending);
        document.getElementById("SortByVersions").innerText = "Versions \u2191";
    }
}

// Sort by movie Price
function SortByPrice() {
    sortedBy = "Price";
    ResetTableHeaders();
    if (sortOrder == 1) {
        movies.sort(comparePriceDescending);
        document.getElementById("SortByPrice").innerText = "Price \u2193";
    } else {
        movies.sort(comparePriceAscending);
        document.getElementById("SortByPrice").innerText = "Price \u2191";
    }
}

// Sort by movie Rating
function SortByRating() {
    sortedBy = "Rating";
    ResetTableHeaders();
    if (sortOrder == 1) {
        movies.sort(compareRatingDescending);
        document.getElementById("SortByRating").innerText = "Rating \u2193";
    } else {
        movies.sort(compareRatingAscending);
        document.getElementById("SortByRating").innerText = "Rating \u2191";
    }
}

// Sort by movie Year
function SortByYear() {
    sortedBy = "Year";
    ResetTableHeaders();
    if (sortOrder == 1) {
        movies.sort(compareYearDescending);
        document.getElementById("SortByYear").innerText = "Year \u2193";
    } else {
        movies.sort(compareYearAscending);
        document.getElementById("SortByYear").innerText = "Year \u2191";
    }
}

// Sort by movie Genre
function SortByGenre() {
    sortedBy = "Genre";
    ResetTableHeaders();
    if (sortOrder == 1) {
        movies.sort(compareGenreDescending);
        document.getElementById("SortByGenre").innerText = "Genre \u2193";
    } else {
        movies.sort(compareGenreAscending);
        document.getElementById("SortByGenre").innerText = "Genre \u2191";
    }
}

// Sort by movie Aspect
function SortByAspect() {
    sortedBy = "Aspect";
    ResetTableHeaders();
    if (sortOrder == 1) {
        movies.sort(compareAspectDescending);
        document.getElementById("SortByAspect").innerText = "Aspect \u2193";
    } else {
        movies.sort(compareAspectAscending);
        document.getElementById("SortByAspect").innerText = "Aspect \u2191";
    }
}

// Sort by movie SearchCount
function SortBySearchCount() {
    sortedBy = "SearchCount";
    ResetTableHeaders();
    if (sortOrder == 1) {
        movies.sort(compareSearchCountDescending);
        document.getElementById("SortBySearchCount").innerText = "SearchCount \u2193";
    } else {
        movies.sort(compareSearchCountAscending);
        document.getElementById("SortBySearchCount").innerText = "SearchCount \u2191";
    }
}

// Function to sort array returned from PHP by title ascending
function compareTitleAscending(a, b) {
    if (a.Title.toLowerCase() < b.Title.toLowerCase()) {
        return -1;
    }
    if (a.Title.toLowerCase() > b.Title.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by title descending
function compareTitleDescending(a, b) {
    if (a.Title.toLowerCase() < b.Title.toLowerCase()) {
        return 1;
    }
    if (a.Title.toLowerCase() > b.Title.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by studio ascending
function compareStudioAscending(a, b) {
    if (a.Studio.toLowerCase() < b.Studio.toLowerCase()) {
        return -1;
    }
    if (a.Studio.toLowerCase() > b.Studio.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Studio descending
function compareStudioDescending(a, b) {
    if (a.Studio.toLowerCase() < b.Studio.toLowerCase()) {
        return 1;
    }
    if (a.Studio.toLowerCase() > b.Studio.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by Status ascending
function compareStatusAscending(a, b) {
    if (a.Status.toLowerCase() < b.Status.toLowerCase()) {
        return -1;
    }
    if (a.Status.toLowerCase() > b.Status.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Status descending
function compareStatusDescending(a, b) {
    if (a.Status.toLowerCase() < b.Status.toLowerCase()) {
        return 1;
    }
    if (a.Status.toLowerCase() > b.Status.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by Sound ascending
function compareSoundAscending(a, b) {
    if (a.Sound.toLowerCase() < b.Sound.toLowerCase()) {
        return -1;
    }
    if (a.Sound.toLowerCase() > b.Sound.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Sound descending
function compareSoundDescending(a, b) {
    if (a.Sound.toLowerCase() < b.Sound.toLowerCase()) {
        return 1;
    }
    if (a.Sound.toLowerCase() > b.Sound.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by Versions ascending
function compareVersionsAscending(a, b) {
    if (a.Versions.toLowerCase() < b.Versions.toLowerCase()) {
        return -1;
    }
    if (a.Versions.toLowerCase() > b.Versions.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Versions descending
function compareVersionsDescending(a, b) {
    if (a.Versions.toLowerCase() < b.Versions.toLowerCase()) {
        return 1;
    }
    if (a.Versions.toLowerCase() > b.Versions.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by Price ascending
function comparePriceAscending(a, b) {
    if (parseFloat(a.RecRetPrice) < parseFloat(b.RecRetPrice)) {
        return -1;
    }
    if (parseFloat(a.RecRetPrice) > parseFloat(b.RecRetPrice)) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Price descending
function comparePriceDescending(a, b) {
    if (parseFloat(a.RecRetPrice) < parseFloat(b.RecRetPrice)) {
        return 1;
    }
    if (parseFloat(a.RecRetPrice) > parseFloat(b.RecRetPrice)) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by Rating ascending
function compareRatingAscending(a, b) {
    if (a.Rating.toLowerCase() < b.Rating.toLowerCase()) {
        return -1;
    }
    if (a.Rating.toLowerCase() > b.Rating.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Rating descending
function compareRatingDescending(a, b) {
    if (a.Rating.toLowerCase() < b.Rating.toLowerCase()) {
        return 1;
    }
    if (a.Rating.toLowerCase() > b.Rating.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by Year ascending
function compareYearAscending(a, b) {
    if (a.Year.toLowerCase() < b.Year.toLowerCase()) {
        return -1;
    }
    if (a.Year.toLowerCase() > b.Year.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Year descending
function compareYearDescending(a, b) {
    if (a.Year.toLowerCase() < b.Year.toLowerCase()) {
        return 1;
    }
    if (a.Year.toLowerCase() > b.Year.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by Genre ascending
function compareGenreAscending(a, b) {
    if (a.Genre.toLowerCase() < b.Genre.toLowerCase()) {
        return -1;
    }
    if (a.Genre.toLowerCase() > b.Genre.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Genre descending
function compareGenreDescending(a, b) {
    if (a.Genre.toLowerCase() < b.Genre.toLowerCase()) {
        return 1;
    }
    if (a.Genre.toLowerCase() > b.Genre.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by Aspect ascending
function compareAspectAscending(a, b) {
    if (a.Aspect.toLowerCase() < b.Aspect.toLowerCase()) {
        return -1;
    }
    if (a.Aspect.toLowerCase() > b.Aspect.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Aspect descending
function compareAspectDescending(a, b) {
    if (a.Aspect.toLowerCase() < b.Aspect.toLowerCase()) {
        return 1;
    }
    if (a.Aspect.toLowerCase() > b.Aspect.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by SearchCount ascending
function compareSearchCountAscending(a, b) {
    if (parseInt(a.SearchCount) < parseInt(b.SearchCount)) {
        return -1;
    }
    if (parseInt(a.SearchCount) > parseInt(b.SearchCount)) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by SearchCount descending
function compareSearchCountDescending(a, b) {
    if (parseInt(a.SearchCount) < parseInt(b.SearchCount)) {
        return 1;
    }
    if (parseInt(a.SearchCount) > parseInt(b.SearchCount)) {
        return -1;
    }
    return 0;
}
