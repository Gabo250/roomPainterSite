import Cookies from "universal-cookie"

export const experationDate = {
    WEEK: 1000 * 3600 * 24 * 7,
    MONTH: 1000 * 3600 * 24 * 30
};

export const setCookie = (name, value, expdate) => {
    const cookie = new Cookies();    
    const date = new Date(new Date().getTime() + expdate);
    console.log(date);

    cookie.set(name, value, {
        path: "/",
        expires: date,
        domain: window.location.hostname
    });
}

export const getCookie = (name) => {
    const cookie = new Cookies();
    return cookie.get(name);
}