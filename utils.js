const getCurrentYear = () => new Date().getFullYear();

document.getElementById("current-year").innerHTML = `© ${getCurrentYear()}`;
