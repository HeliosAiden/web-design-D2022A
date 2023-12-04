const originURL = window.location.origin
const concatURL = path => {return `${originURL}/${path}`}

export const urlRoutes = {
    404: {
        pathName: concatURL("/pages/404.html"),
        title: "",
        description: "",
    },
    "/": {
        pathName: concatURL("/pages/index.html"),
        title: "",
        description: "",
    },
    "/about": {
        pathName: concatURL("/pages/about.html"),
        title: "",
        description: "",
    },
    "/contact": {
        pathName: concatURL("/pages/contact.html"),
        title: "",
        description: "",
    },
}