document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn_cta").forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "form.html";
            });
        });
    });