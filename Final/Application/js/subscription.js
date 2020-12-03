// Check if email exists in database
function FindMember(email, type) {
    var xhttp = new XMLHttpRequest(); // For most browsers
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText.length != 0) {

                if (type == "subscribe") {
                    DisplayAlert("subscribeAlert", "alert alert-danger", "Email is already registered.");
                } else {
                    UnsubscribeUpdateDB(email);
                    UnsubscribeSendEmail(email);
                }
            } else {
                
                if (type == "subscribe") {
                    SubscribeUpdateDB();
                    DisplayAlert("subscribeAlert", "alert alert-success", "You are now subscribed.");
                } else {
                    DisplayAlert("unsubscribeAlert", "alert alert-danger", "Email not registered.");
                }
            }
        }
    };
    xhttp.open("POST", "./php/Index/find_member.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("userEmail=" + email);
}

// Process subscribe request
function SubscribeRequest() {
    var email = document.getElementById("subscribeEmail").value;
    DisplayAlert("subscribeAlert", "alert alert-warning", "Processing request...")
    if (CheckSubscriptionOptions()) {
        FindMember(email, "subscribe");
    } else {
        DisplayAlert("subscribeAlert", "alert alert-danger", "Please select a subscription option.");
    }
}

// Subscribe, add record to database
function SubscribeUpdateDB() {
    var firstName = document.getElementById("subscribeFirstName").value;
    var lastName = document.getElementById("subscribeLastName").value;
    var email = document.getElementById("subscribeEmail").value;
    var newsletter;
    var breakingNews;
    
    if (document.getElementById("subscribeNewsletter").checked) {
        newsletter = "yes";
    } else {
        newsletter = "no";
    }

    if (document.getElementById("subscribeBreakingNews").checked) {
        breakingNews = "yes";
    } else {
        breakingNews = "no";
    }
    
    var xhttp = new XMLHttpRequest(); // For most browsers
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText.length != 0) {
                console.log(this.responseText);
                DisplayAlert("subscribeAlert", "alert alert-success", "You are now subscribed.");
            }
        }
    };
    xhttp.open("POST", "./php/Index/subscribe.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("firstName=" + firstName + "&lastName=" + lastName + "&email=" + email + "&newsletter=" + newsletter + "&breakingNews=" + breakingNews);
}

// Check if a subscription option is checked
function CheckSubscriptionOptions() {
    if (!document.getElementById("subscribeNewsletter").checked && !document.getElementById("subscribeBreakingNews").checked) {
        return false;
    } else {
        return true;
    }
}

// Process unsubscribe request
function UnsubscribeRequest() {
    var email = document.getElementById("unsubscribeEmail").value;
    DisplayAlert("unsubscribeAlert", "alert alert-warning", "Processing request...");
    FindMember(email, "unsubscribe");
}

// Send email from subscriptions email to admin email
function UnsubscribeSendEmail(email) {
    var xhttp = new XMLHttpRequest(); // For most browsers

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            DisplayAlert("unsubscribeAlert", "alert alert-success", "You are now unsubscribed.");
        }
    };
    xhttp.open("POST", "./php/Index/unsubscribe_send_email.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("userEmail=" + email);
}

// Update RemovalPending field in database
function UnsubscribeUpdateDB(email) {
    var xhttp = new XMLHttpRequest(); // For most browsers

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("POST", "./php/Index/unsubscribe_update_database.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("userEmail=" + email);
}