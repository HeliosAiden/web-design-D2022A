import { urlRoutes, rootURL } from "../constants/routes.js";

document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("#navigation a")) return;
  e.preventDefault();
  urlRoute();
});

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = async () => {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = "/";
  }

  const route = urlRoutes[location] || urlRoutes[404];
  const html = await fetch(`${rootURL}${route.pathName}`).then((res) =>
    res.text()
  );
  document.getElementById("content").innerHTML = html;
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();
