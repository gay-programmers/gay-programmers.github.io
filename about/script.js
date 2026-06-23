document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("theme").value = theme;
    document.getElementById("theme").addEventListener("change", function(e) {
        Cookies.set("theme", e.target.value, { expires: 365, path: "/", sameSite: "none", secure: true });
        document.documentElement.setAttribute("data-theme", e.target.value);
    });
});