// ==========================
// SAVE FOOD DONATION
// ==========================

function saveDonation(event) {
    event.preventDefault();

    const donation = {
        donor: document.getElementById("donor").value,
        food: document.getElementById("food").value,
        quantity: document.getElementById("quantity").value,
        location: document.getElementById("location").value
    };

    let donations =
        JSON.parse(localStorage.getItem("donations")) || [];

    donations.push(donation);

    localStorage.setItem(
        "donations",
        JSON.stringify(donations)
    );

    alert("Food Donation Submitted Successfully!");

    document.getElementById("donationForm").reset();
}



// ==========================
// SAVE EMERGENCY REQUEST
// ==========================
function saveRequest(event) {

    event.preventDefault();

    let type =
        document.getElementById("requestType").value;

    let people =
        document.getElementById("people").value;

    let location =
        document.getElementById("location").value;

    if (type === "") {
        alert("Please select request type");
        return;
    }

    let requests =
        JSON.parse(localStorage.getItem("requests")) || [];

    let request = {
        type: type,
        people: people,
        location: location
    };

    requests.push(request);

    localStorage.setItem(
        "requests",
        JSON.stringify(requests)
    );

    alert("Request Submitted Successfully!");

    window.location.href =
        "requests.html";
}

// ==========================
// LOAD DASHBOARD DATA
// ==========================

function loadDashboard() {

    let donations =
        JSON.parse(localStorage.getItem("donations")) || [];

    let requests =
        JSON.parse(localStorage.getItem("requests")) || [];

    const donationCount =
        document.getElementById("donationCount");

    const requestCount =
        document.getElementById("requestCount");

    const mealCount =
        document.getElementById("mealCount");

    const volunteerCount =
        document.getElementById("volunteerCount");

    if (donationCount)
        donationCount.innerText = donations.length;

    if (requestCount)
        requestCount.innerText = requests.length;

    if (mealCount)
        mealCount.innerText = donations.length;

    if (volunteerCount)
        volunteerCount.innerText = 25;
}



// ==========================
// DISASTER MODE
// ==========================

function toggleDisasterMode() {

    document.body.classList.toggle("disaster");

    const btn =
        document.getElementById("modeBtn");

    if (!btn) return;

    if (document.body.classList.contains("disaster")) {

        btn.innerText =
            "Disable Disaster Mode";

    } else {

        btn.innerText =
            "Activate Disaster Mode";
    }
}