/* Control Links by clicking on bars and x-mark icons*/

document.querySelector(".header .logo i").onclick = () => {
    document.querySelector(".header .links").classList.toggle("handle-links");
}

document.querySelector(".header .links li:first-of-type i").onclick = () => {
    document.querySelector(".header .links").classList.add("handle-links");
}