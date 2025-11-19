document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn-cta").forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "#";
            });
        });

    });

