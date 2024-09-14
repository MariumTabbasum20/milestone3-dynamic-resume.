// listing element
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //collect input values
    var ProfilePictureInput = document.getElementById("Profile Picture");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //picture elements
    var ProfilePictureFile = (_a = ProfilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var ProfilePictureURL = ProfilePictureFile ? URL.createObjectURL(ProfilePictureFile) : '';
    //create resume output
    var resumeOutput = "\n    <h2><b>Resume</b></h2>\n     ".concat(ProfilePictureURL ? "<img src=\" ".concat(ProfilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n    <h3>Personal Information </h3>\n    <p><b>Name:</b> ").concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone: </b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p> ").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p> ").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p> ").concat(skills, "</p>\n    ");
    //display the generated resume
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeOutput;
    }
    else {
        console.error('the resume display element is missing.');
    }
    ;
});
