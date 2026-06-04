// FIX 1: Added quotes around "score"
let score = Number(localStorage.getItem("score")) || 0;

const nextbtn = document.querySelector(".next-btn");

// All scoring and navigation must happen inside the click event
nextbtn.addEventListener("click", () => {
    
    // Check Question 1
    let q1 = document.querySelector('input[name=ques1]:checked');
    if (q1 && q1.value === "Inca Empire") {
        score++;
    }
    
    // Check Question 2
    let q2 = document.querySelector('input[name=ques2]:checked');
    if (q2 && q2.value === "Constantinople") {
        score++;
    }
    
    // Check Question 3
    let q3 = document.querySelector('input[name=ques3]:checked');
    if (q3 && q3.value === "1853") {
        score++;
    }
    
    // Check Question 4
    let q4 = document.querySelector('input[name=ques4]:checked');
    if (q4 && q4.value === "13") {
        score++;
    }
    
    // Check Question 5
    let q5 = document.querySelector('input[name=ques5]:checked');
    if (q5 && q5.value === "Sudan") {
        score++;
    }
    
    // Save updated score to localStorage
    localStorage.setItem("score", score);
    
    // FIX 2 & 3: Redirect only AFTER clicking and saving
    window.location.href = "index5.html";
});
