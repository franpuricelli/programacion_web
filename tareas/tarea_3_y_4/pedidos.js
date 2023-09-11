document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var nombre = urlParams.get("nombre");
    var apellido = urlParams.get("apellido");
    var variedadCafe = urlParams.get("variedad_cafe");
    var snacks = urlParams.get("snacks");
    var cupon = urlParams.get("cupon") ? "Sí" : "No";

    document.getElementById("nombre").textContent = nombreCompleto;
    document.getElementById("apellido").textContent = empresa;
    document.getElementById("variedad_cafe").textContent = variedadCafe;
    document.getElementById("snacks").textContent = snacks;
    document.getElementById("cupon").textContent = cupon;

    document.getElementById("volver").addEventListener("click", function() {
        window.history.back();
    });
});