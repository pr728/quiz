// Initialize the score first
let score = Number(localStorage.getItem("score")) || 0;


function submit() {
    // Check Question 1
    let q1 = document.querySelector('input[name=ques1]:checked');
    if (q1 && q1.value === "Brazil") {
        score++;
    }
    
    // Check Question 2
    let q2 = document.querySelector('input[name=ques2]:checked');
    if (q2 && q2.value === "Gymnastics") {
        score++;
    }
    
    // Check Question 3
    let q3 = document.querySelector('input[name=ques3]:checked');
    if (q3 && q3.value === "Carbohydarte") {
        score++;
    }
    
    // Check Question 4
    let q4 = document.querySelector('input[name=ques4]:checked');
    if (q4 && q4.value === "Nepal") {
        score++;
    }
    
    // Check Question 5
    let q5 = document.querySelector('input[name=ques5]:checked');
    if (q5 && q5.value === "Red Kangaroo") {
        score++;
    }
    
    // Check Question 6
    let q6 = document.querySelector('input[name=ques6]:checked');
    if (q6 && q6.value === "Avocado") {
        score++;
    }
    
    // Check Question 7
    let q7 = document.querySelector('input[name=ques7]:checked');
    if (q7 && q7.value === "Blackberry") {
        score++;
    }
    
    // Check Question 8
    let q8 = document.querySelector('input[name=ques8]:checked');
    if (q8 && q8.value === "Golf") {
        score++;
    }

    // Save the final score to localStorage
    localStorage.setItem("score", score);
    
    // Redirect to the next page
    window.location.href = "index6.html";
}
