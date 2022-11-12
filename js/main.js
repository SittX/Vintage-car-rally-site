let menu = document.getElementById("menu");

let closeMenu = () => {
    menu.style.right = "-1080px";
}
let openMenu = () => {
    menu.style.right = "0";
}

let noResultAlreadyOn = false;
let searchQuestion = () => {
    document.getElementById("questionNotFound").style.display = "none";
    // Get input element and extract its  value 
    let availableQuestionCount = -1;
    let inputValue = document.getElementById("question-searchbar").value.toLowerCase();
    let questions = document.getElementsByClassName("accordion__question");
    for (var i = 0; i < questions.length; i++) {
        var result = questions[i].getElementsByTagName("a")[0];
        txtValue = result.textContent || result.innerText;

        // Search if the inputValue is present in the txtValue
        if (txtValue.toLowerCase().indexOf(inputValue) > -1) {
            questions[i].style.display = "";
            availableQuestionCount++;
        }
        else {
            questions[i].style.display = "none";
        }
    }

    // availableQuesitonCount is used to display a "Not Found" message to user when there is no result of the user input
    // It counts the total numbers of question left based on the user input
    if (availableQuestionCount < 0) {
        document.getElementById("questionNotFound").style.display = "block";
    }
}
