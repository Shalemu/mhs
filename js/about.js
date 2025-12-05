const accButtons = document.querySelectorAll(".acc-btn");

accButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        
        const item = btn.parentElement;
        const content = btn.nextElementSibling;

        if (item.classList.contains("active")) {
            item.classList.remove("active");
            content.style.maxHeight = 0;
        } else {
            document.querySelectorAll(".acc-item").forEach(i => {
                i.classList.remove("active");
                i.querySelector(".acc-content").style.maxHeight = 0;
            });

            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
