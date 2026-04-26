function addTrip() {
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;

    if(destination === "" || date === "") {
        alert("Please fill all fields!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = "✈️ " + destination + " - " + date;

    document.getElementById("tripList").appendChild(li);

    document.getElementById("destination").value = "";
    document.getElementById("date").value = "";
}
