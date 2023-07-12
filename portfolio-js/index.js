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



