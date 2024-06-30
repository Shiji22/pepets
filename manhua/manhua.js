// JavaScript for Image Modal
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const close = document.querySelector(".close");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = item.src;
        });
    });

    close.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
