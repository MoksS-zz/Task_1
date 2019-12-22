function switchTheme(e) {
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

function history (e) {
  e.target.nextElementSibling.classList.toggle("history__hide");
};

// если вызвать document.body, то почему то возникает ошибка
// в вашем автотесте
const body = document.getElementsByTagName("BODY")[0];

body.onclick = function(e) {
  const elem = e.target

  if(elem.classList.contains("onoffswitch__button")) {
    switchTheme(e);
    return;
  }

  if (elem.classList.contains("history__show")) {
    history(e);
  } 

};