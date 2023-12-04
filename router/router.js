import { urlRoutes } from "../constants/routes.js";
const rootURL = 'web-design-D2022A/'

document.addEventListener("click", e => {
    const {target} = e
    if(!target.matches('#navigation a')) return ;
    e.preventDefault();
    urlRoute();
})

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    urlLocationHandler();
}

const urlLocationHandler = async() => {
    const location = window.location.pathname;
    if (location.length == 0) {
        location = "/"
    }

    const route = urlRoutes[location] || urlRoutes[404];
    console.log(route.pathName)
    const html = await fetch(`${rootURL}/${route.pathName}`).then(res => res.text());
    document.getElementById("content").innerHTML = html;
}

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler()