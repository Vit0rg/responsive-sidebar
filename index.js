const body = document.querySelector("body");
const sidebar = document.querySelector("nav");
const menu = document.querySelector("nav ul li span");
const theme_icon = document.querySelector(".bx-sun");

function expand_menu()
{
  body.classList.toggle("collapse");
  body.classList.contains("collapse")? menu.innerText = "Menu": menu.innerText = "Collapse"
}

function expand_li()
{
  sidebar.classList.add("expand-li");
}

function collapse_li()
{
  sidebar.classList.remove("expand-li");
}

function theme_switch()
{
  body.classList.toggle("invert");
  theme_icon.classList.toggle("bx-sun")
  theme_icon.classList.toggle("bx-moon")
}