import Final from "./final.js";
import Question from "./question.js";

class Quiss {
constructor(amount,questions)
{
    this.quissDom=document.querySelector(".quiss");
    this.current=document.querySelector(".current");
    this.total=document.querySelector(".total");
    this.final=document.querySelector(".final");
    this.nextBtn=document.querySelector("#next");
    this.totalAmount=amount;
    this.AnsweredAmount=0;
    this.questions=this.setQuestion(questions);
    this.nextBtn.addEventListener("click",this.nextQuestion)
    this.renderQuestion()
    
}
setQuestion(questions){
    return questions.map(question=>new Question(question)) ;
}
nextQuestion=()=>{
    const checkElement=this.questions[this.AnsweredAmount].answersDom.filter(ele=>ele.firstChild.checked);
    if(checkElement.lenght==0){
        alert("ckech element");
    }
    else{
        this.questions[this.AnsweredAmount].answer(checkElement);
        this.AnsweredAmount++;
        this.AnsweredAmount<this.totalAmount?this.renderQuestion():this.endQuestion();
    }


}
endQuestion=()=>{
    this.quissDom.style.display="none";
    this.final.style.display="block";
    const correct=this.countCorrectAnswer();
    new Final(correct,this.totalAmount)

}
renderQuestion=()=>{
    this.questions[this.AnsweredAmount].render();
    this.current.innerHTML=this.AnsweredAmount+1;
    this.total.innerHTML=this.totalAmount;
}
countCorrectAnswer=()=>{
let count=0;
this.questions.forEach(ele=>{
    if(ele.isCorrect==true)
    { count++; }
    
});
return count ;
}
}
export default Quiss;