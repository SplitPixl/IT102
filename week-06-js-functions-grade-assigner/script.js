// Turns a numeric score into a letter grade
function assignedScore(score) {
    // Check the score argument passed to the function
    if (score < 0 || score > 100) { // Less than 0 or greater than 100 is invalid
        return "Please enter a score between 0 and 100.";
    } else if (score >= 90) { // Greater than or equal to 90 is an A
        return "You got an A";
    } else if (score >= 80) { // Greater than or equal to 80 is a B
        return "You got a B";
    } else if (score >= 70) { // Greater than or equal to 70 is a C
        return "You got a C";
    } else if (score >= 60) { // Greater than or equal to 60 is a D
        return "You got a D";
    } else { // Less than 60 is an F
        return "You got an F";
    }
}

// Bonus:
// function runs when the button on the page is clicked
function buttonClick() {
    var score = parseInt(document.getElementById("score").value); // Cite: https://www.w3schools.com/jsref/prop_text_value.asp
    alert(assignedScore(score));
}
