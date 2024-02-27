// // skills section
// document.addEventListener("DOMContentLoaded", function () {
//   const skillBlocks = document.querySelectorAll(".skill-container div");
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.2,
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("in-view");
//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   skillBlocks.forEach((block) => {
//     observer.observe(block);
//   });
// });


// // project section
// document.addEventListener("DOMContentLoaded", function () {
//   const projectGrids = document.querySelectorAll(".project-grid");
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.2,
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("in-view");
//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   projectGrids.forEach((grid) => {
//     observer.observe(grid);
//   });
// });


// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(max-width: 768px)");

const view = (e) => {
  // check if media query is true
  if (e.matches) {
    console.log("media query");
    const project = document.querySelectorAll(".project");
    const code = document.querySelectorAll(".code");
    for (let i = 0; i < project.length; i++) {
      project[i].innerHTML = "VIEW PROJECT";
    }
    for (let i = 0; i < code.length; i++) {
      code[i].innerHTML = "VIEW CODE";
    }
  }
};

mediaQuery.addEventListener("change", view);

// inital state
view(mediaQuery);

const form = document.getElementById("messageForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageTextarea = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isMessageValid) {
    // Form is valid, proceed with submission
    form.submit();
    form.reset();
  }
});

const validateName = () => {
  const nameValue = nameInput.value.trim();
  const nameError = document.getElementById("nameError");

  if (nameValue === "") {
    nameError.innerHTML = "Please enter a name";
    return false;
  } else {
    nameError.innerHTML = "";
    return true;
  }
};

const validateEmail = () => {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailError = document.getElementById("emailError");

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    emailError.innerHTML = "Invalid email address";
    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
};

const validateMessage = () => {
  const messageValue = messageTextarea.value.trim();
  const messageError = document.getElementById("messageError");

  if (messageValue === "") {
    messageError.innerHTML = "Please enter your message";
    return false;
  } else {
    messageError.innerHTML = "";
    return true;
  }
};
