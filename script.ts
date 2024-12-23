// get refrences to the form and display area

const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById(
  'resume-display'
) as HTMLDivElement;

//Handle from submission
resumeForm.addEventListener('submit', (event: Event) => {
  event.preventDefault(); //prevent page reload

  //collect input values

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const mobileNo = (document.getElementById("mobileNo") as HTMLInputElement)
    .value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experiance = (document.getElementById("experiance") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  //generate the resume content dynamically
  const resumeHTML = `
    <h2><b><center>Editable Resume</center></b></h2>
    <h3><u>Personal Information</u></h3><br>
    <p><b>Name: </b><span contenteditable="true"> ${name}</span></p><br>
    <p><b>Email: </b><span contenteditable="true"> ${email}</span></p><br>
    <p><b>mobileNo: </b><span contenteditable="true"> ${mobileNo}</span></p><br>

    <h3><u>Education</u></h3><br>
    <p contenteditable="true">${education}</p><br>

     <h3><u>Experiance</u></h3><br>
    <p contenteditable="true">${experiance}</p><br>

     <h3><u>Skills</u></h3><br>
    <p contenteditable="true">${skills}</p><br>
    `;

  // Display the generated resume

  if (resumeDisplay) {
    resumeDisplay.innerHTML = resumeHTML;
  } else {
    console.error("The Resume display element missing.");
  }
});
