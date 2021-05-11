var up = document.querySelector(".yukari_cik");
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        up.classList.add("yukari_cikiptal");
    } else {
        up.classList.remove("yukari_cikiptal");
    }
});
up.addEventListener("click", function() {
    window.scrollTo(0, 0);
});