const finalScore = localStorage.getItem("score") || 0;
const result= document.querySelector(".Result");

if (result) {
    result.textContent = finalScore;
}

const restartBtn = document.getElementById("restart-btn");

if (restartBtn) {
    restartBtn.addEventListener("click", () => {
        localStorage.setItem("score", 0);
        window.location.href = "index.html";
    });
}

