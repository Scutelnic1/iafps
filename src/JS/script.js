document.getElementById("play-button").addEventListener("click", function () {
    // Ascunde elementele vechi
    document.querySelector(".button-container").classList.add("hidden");
    document.querySelector("h1").classList.add("hidden");

    // Afișează animația de loading
    const loadingAnimation = document.getElementById("loading-animation");
    loadingAnimation.classList.add("active");

    // Simulează un timp de așteptare (ex. încărcare de pagină)
    setTimeout(() => {
        loadingAnimation.classList.remove("active"); // Ascunde animația
        // Redirecționează la o altă pagină
        window.location.href = "HomePage.html"; // Înlocuiește cu URL-ul dorit
    }, 5000); // Timpul în milisecunde (10000 ms = 10 secunde)
});
