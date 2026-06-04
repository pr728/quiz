
let score = Number(localStorage.getItem("score")) || 0;

const nextbtn = document.querySelector(".next-btn");


nextbtn.addEventListener("click", () => {
    
    // Check Question 1
    let q1 = document.querySelector('input[name=ques1]:checked');
    if (q1 && q1.value === "Nile River") {
        score++;
    }
    
    // Check Question 2
    let q2 = document.querySelector('input[name=ques2]:checked');
    if (q2 && q2.value === "Gujarat") {
        score++;
    }
    
    // Check Question 3
    let q3 = document.querySelector('input[name=ques3]:checked');
    if (q3 && q3.value === "Nepal") {
        score++;
    }
    
    // Check Question 4
    let q4 = document.querySelector('input[name=ques4]:checked');
    if (q4 && q4.value === "Tropic of Capricorn") {
        score++;
    }
    
    // Check Question 5
    let q5 = document.querySelector('input[name=ques5]:checked');
    if (q5 && q5.value === "Mars") {
        score++;
    }
    
    // Save updated score to localStorage
    localStorage.setItem("score", score);
    
    //  Redirect ONLY happens after clicking and saving
    window.location.href = "index4.html";
});
