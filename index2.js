const nextbtn = document.querySelector(".next-btn"); 

nextbtn.addEventListener("click", () => { 
    let score = 0; 

    let q1 = document.querySelector('input[name=ques1]:checked'); 
    if (q1 && q1.value === "Leaf") { score++; } 

    let q2 = document.querySelector('input[name=ques2]:checked'); 
    if (q2 && q2.value === "Femur") { score++; } 

    let q3 = document.querySelector('input[name=ques3]:checked'); 
    if (q3 && q3.value === "Saturn") { score++; } 

    let q4 = document.querySelector('input[name=ques4]:checked'); 
    if (q4 && q4.value === "Liquid") { score++; } 

    let q5 = document.querySelector('input[name=ques5]:checked'); 
    if (q5 && q5.value === "Ostrich") { score++; } 

    localStorage.setItem("score", score); 
    window.location.href = "index3.html"; 
});
