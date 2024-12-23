// get refrences to the form and display area
var resumeForm = document.getElementById("resume-form");
var resumeDisplay = document.getElementById('resume-display');
//Handle from submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobileNo = document.getElementById("mobileNo")
        .value;
    var education = document.getElementById("education")
        .value;
    var experiance = document.getElementById("experiance")
        .value;
    var skills = document.getElementById("skills").value;
    //generate the resume content dynamically
    var resumeHTML = "\n    <h2><b><center>Editable Resume</center></b></h2>\n    <h3><u>Personal Information</u></h3><br>\n    <p><b>Name: </b><span contenteditable=\"true\"> ".concat(name, "</span></p><br>\n    <p><b>Email: </b><span contenteditable=\"true\"> ").concat(email, "</span></p><br>\n    <p><b>mobileNo: </b><span contenteditable=\"true\"> ").concat(mobileNo, "</span></p><br>\n\n    <h3><u>Education</u></h3><br>\n    <p contenteditable=\"true\">").concat(education, "</p><br>\n\n     <h3><u>Experiance</u></h3><br>\n    <p contenteditable=\"true\">").concat(experiance, "</p><br>\n\n     <h3><u>Skills</u></h3><br>\n    <p contenteditable=\"true\">").concat(skills, "</p><br>\n    ");
    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume display element missing.");
    }
});
