function note() {
    var dateElem = document.getElementById("date-text");
    var dateVal = dateElem.value;
    var bodyElem = document.getElementById("body-text");
    var bodyVal = bodyElem.value;
    
    // console.log("date is " + dateVal);
    // console.log(bodyVal);

    // Create new date elemt for note section 
    var notedate = document.createElement("h2");
    var dateText = document.createTextNode(dateVal);
    notedate.appendChild(dateText);

    // Ceate new body text for note section 
    var noteBody = document.createElement("p");
    var bodyText = document.createTextNode(bodyVal);
    noteBody.appendChild(bodyText);
    
    // Add date element and body element to div "note-text"
    var noteElem = document.getElementById("note-text");
    noteElem.appendChild(notedate);
    noteElem.appendChild(bodyText);
}


const hour = new Date().getHours();
let greeting;
if (hour <12) {
    greeting = "Good Morning!";
} else if (hour <18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}
document.getElementById("hours").innerHTML = greeting;

const date = new Date()
document.getElementById("clock").innerHTML = date;

setTimeout = (Date(), 1000);