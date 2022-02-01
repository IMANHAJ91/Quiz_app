class Question {
    constructor(question)
    {
        this.questionDom=document.querySelector("#question");
        this.answersDom=[
            document.querySelector("#a1"),
            document.querySelector("#a2"),
            document.querySelector("#a3"),
            document.querySelector("#a4"),
        ]
        this.correctAnswer=question.correct_answer;
        this.answers=[this.correctAnswer,...question.incorrect_answers]
        this.isCorrect=false;
        this.question=question.question;

    }
    answer(checkedElement){
        this.isCorrect=checkedElement[0].textContent===this.correctAnswer ? true : false;
    }
    render(){
        this.questionDom.innerHTML=this.question;
        this.answersDom.forEach((ele,index)=>{
            ele.innerHTML=`<input type="radio" name="radio">`+this.answers[index] ;
        })
    }
}
export default Question ;