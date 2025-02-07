// Animăm mingea pentru a se mișca într-un mic cerc
const mingea = document.querySelector('.minge');

let angle = 0;
function miscareMinge() {
    angle += 1;
    const x = 150 * Math.cos(angle * Math.PI / 180);
    const y = 150 * Math.sin(angle * Math.PI / 180);
    mingea.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    requestAnimationFrame(miscareMinge);
}

miscareMinge();
