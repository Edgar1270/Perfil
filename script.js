
const data = {
    name: "Edgar Carrillo",
    description: "Sou desenvolvedor Front-end apaixonado por tecnologia e jogos de tiros e animes.",
    email: "edgareddie55@gmail.com",
    tel: "(21)99318-1424"
}

function loadUserProfile(data) {
    document.getElementById("userName").textContent = data.name;
    document.getElementById("userDescription").textContent = data.description;
    document.getElementById("userEmail").textContent = data.email;
    document.getElementById("userTel").textContent = data.tel;
}

document.addEventListener("DOMContentLoaded", function () {
    loadUserProfile(data);
});