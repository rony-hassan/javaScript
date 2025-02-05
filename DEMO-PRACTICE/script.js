//Add and change HTML

// STEP 1: Create the element

const newH1 = document.createElement("h1");

// STEP 2: Add attributes/properties

newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3: Append element to DOM

//document.body.prepend(newH1);
//document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);

// Sandwitch between box1 and box2

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);

// STEP 4: Remove HTML element