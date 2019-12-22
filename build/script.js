const switchTheme = e => {
  e.target.parentElement.classList.toggle("onoffswitch_checked");
  
  const defaultTheme = document.querySelectorAll(".theme_color_project-default");
  const inverseTheme = document.querySelectorAll(".theme_color_project-inverse")

  for(elem of defaultTheme) {
    elem.classList.remove("theme_color_project-default");
    elem.classList.add("theme_color_project-inverse");
  }
  for(elem of inverseTheme) {
    elem.classList.remove("theme_color_project-inverse");
    elem.classList.add("theme_color_project-default");
  }
};

const history = e => {
  e.target.nextElementSibling.classList.toggle("history__hide");
};

document.body.addEventListener("click", (e) => {
  const elem = e.target

  if(elem.classList.contains("onoffswitch__button")) {
    switchTheme(e);
    return;
  }

  console.log(elem.classList);

  if (elem.classList.contains("history__show")) {
    history(e);
  } 

});