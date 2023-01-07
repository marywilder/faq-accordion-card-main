let questionContainer = document.querySelectorAll(".question-container");



questionContainer.forEach((q => {
  q.addEventListener("click", (e) => {

    //toggle answer
    
    const answer = e.currentTarget.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    answer.style.animation = "faqs 1s";
    
    //question selected

    qSelected();

    function qSelected() {
    const question = e.currentTarget.firstElementChild;
    question.classList.toggle("question-selected");
    }
   


    //arrow animation
    
    arrowUp();


    function arrowUp() {
      const arrow = e.currentTarget.lastElementChild;
      arrow.classList.toggle("arrow-up");
    } 

    
  })


}))


