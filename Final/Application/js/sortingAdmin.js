function ResetTableHeaders() {
    var tableHeaders = [
        document.getElementById("SortByFirstName"),
        document.getElementById("SortByLastName"),
        document.getElementById("SortByEmail"),
        document.getElementById("SortByNewsletter"),
        document.getElementById("SortByBreakingNews"),
        document.getElementById("SortByPendingRemoval")
    ];

    for (header in tableHeaders) {
        tableHeaders[header].innerText = tableHeaders[header].innerText.split(" ")[0];
    }
}

// Sort movies depending on clicked table header
function SortMembers(field) {
    switch (field) {
        case "FirstName":
            SortByFirstName();
            break;
        case "LastName":
            SortByLastName();
            break;
        case "Email":
            SortByEmail();
            break;
        case "Newsletter":
            SortByNewsletter();
            break;
        case "BreakingNews":
            SortByBreakingNews();
            break;
        case "PendingRemovals":
            SortByPendingRemovals();
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
            SortMembers(field);
        } else {
            sortOrder = 1;
            SortMembers(field);
        }
    } else {
        SortMembers(field);
    }
}

// Sort by member first name
function SortByFirstName() {
    ResetTableHeaders();
    sortedBy = "FirstName";
    if (sortOrder == 1) {
        members.sort(compareFirstNameDescending);
        document.getElementById("SortByFirstName").innerText = "First Name \u2193";
    } else {
        members.sort(compareFirstNameAscending);
        document.getElementById("SortByFirstName").innerText = "First Name \u2191";
    }
}

// Sort by member last name
function SortByLastName() {
    sortedBy = "LastName";
    ResetTableHeaders();
    if (sortOrder == 1) {
        members.sort(compareLastNameDescending);
        document.getElementById("SortByLastName").innerText = "Last Name \u2193";
    } else {
        members.sort(compareLastNameAscending);
        document.getElementById("SortByLastName").innerText = "Last Name \u2191";
    }
}

// Sort by member email
function SortByEmail() {
    sortedBy = "Email";
    ResetTableHeaders();
    if (sortOrder == 1) {
        members.sort(compareEmailDescending);
        document.getElementById("SortByEmail").innerText = "Email \u2193";
    } else {
        members.sort(compareEmailAscending);
        document.getElementById("SortByEmail").innerText = "Email \u2191";
    }
}

// Sort by member subscribed to newsletter
function SortByNewsletter() {
    sortedBy = "Newsletter";
    ResetTableHeaders();
    if (sortOrder == 1) {
        members.sort(compareNewsletterDescending);
        document.getElementById("SortByNewsletter").innerText = "Newsletter \u2193";
    } else {
        members.sort(compareNewsletterAscending);
        document.getElementById("SortByNewsletter").innerText = "Newsletter \u2191";
    }
}

// Sort by member subscribed to breaking news
function SortByBreakingNews() {
    sortedBy = "BreakingNews";
    ResetTableHeaders();
    if (sortOrder == 1) {
        members.sort(compareBreakingNewsDescending);
        document.getElementById("SortByBreakingNews").innerText = "Breaking News \u2193";
    } else {
        members.sort(compareBreakingNewsAscending);
        document.getElementById("SortByBreakingNews").innerText = "Breaking News \u2191";
    }
}

// Sort by pending removals
function SortByPendingRemoval() {
    sortedBy = "PendingRemoval";
    ResetTableHeaders();
    if (sortOrder == 1) {
        members.sort(comparePendingRemovalDescending);
        document.getElementById("SortByPendingRemoval").innerText = "Pending Removal \u2193";
    } else {
        members.sort(comparePendingRemovalAscending);
        document.getElementById("SortByPendingRemoval").innerText = "Pending Removal \u2191";
    }
}

// Function to sort array returned from PHP by FirstName ascending
function compareFirstNameAscending(a, b) {
    if (a.FirstName.toLowerCase() < b.FirstName.toLowerCase()) {
        return -1;
    }
    if (a.FirstName.toLowerCase() > b.FirstName.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by FirstName descending
function compareFirstNameDescending(a, b) {
    if (a.FirstName.toLowerCase() < b.FirstName.toLowerCase()) {
        return 1;
    }
    if (a.FirstName.toLowerCase() > b.FirstName.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by LastName ascending
function compareLastNameAscending(a, b) {
    if (a.LastName.toLowerCase() < b.LastName.toLowerCase()) {
        return -1;
    }
    if (a.LastName.toLowerCase() > b.LastName.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by LastName descending
function compareLastNameDescending(a, b) {
    if (a.LastName.toLowerCase() < b.LastName.toLowerCase()) {
        return 1;
    }
    if (a.LastName.toLowerCase() > b.LastName.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by Email ascending
function compareEmailAscending(a, b) {
    if (a.Email.toLowerCase() < b.Email.toLowerCase()) {
        return -1;
    }
    if (a.Email.toLowerCase() > b.Email.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Email descending
function compareEmailDescending(a, b) {
    if (a.Email.toLowerCase() < b.Email.toLowerCase()) {
        return 1;
    }
    if (a.Email.toLowerCase() > b.Email.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by Newsletter ascending
function compareNewsletterAscending(a, b) {
    if (a.Newsletter.toLowerCase() < b.Newsletter.toLowerCase()) {
        return -1;
    }
    if (a.Newsletter.toLowerCase() > b.Newsletter.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by Newsletter descending
function compareNewsletterDescending(a, b) {
    if (a.Newsletter.toLowerCase() < b.Newsletter.toLowerCase()) {
        return 1;
    }
    if (a.Newsletter.toLowerCase() > b.Newsletter.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by BreakingNews ascending
function compareBreakingNewsAscending(a, b) {
    if (a.BreakingNews.toLowerCase() < b.BreakingNews.toLowerCase()) {
        return -1;
    }
    if (a.BreakingNews.toLowerCase() > b.BreakingNews.toLowerCase()) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by BreakingNews descending
function compareBreakingNewsDescending(a, b) {
    if (a.BreakingNews.toLowerCase() < b.BreakingNews.toLowerCase()) {
        return 1;
    }
    if (a.BreakingNews.toLowerCase() > b.BreakingNews.toLowerCase()) {
        return -1;
    }
    return 0;
}

// Function to sort array returned from PHP by PendingRemoval ascending
function comparePendingRemovalAscending(a, b) {
    if (parseFloat(a.PendingRemoval) < parseFloat(b.PendingRemoval)) {
        return -1;
    }
    if (parseFloat(a.PendingRemoval) > parseFloat(b.PendingRemoval)) {
        return 1;
    }
    return 0;
}

// Function to sort array returned from PHP by PendingRemoval descending
function comparePendingRemovalDescending(a, b) {
    if (parseFloat(a.PendingRemoval) < parseFloat(b.PendingRemoval)) {
        return 1;
    }
    if (parseFloat(a.PendingRemoval) > parseFloat(b.PendingRemoval)) {
        return -1;
    }
    return 0;
}
