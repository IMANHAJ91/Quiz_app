class Final{
    constructor(correctAnswers,totalAmount){
        this.scoreDom=document.querySelector("#score");
        this.againBtn=document.querySelector("#again");
        this.render(correctAnswers,totalAmount);
        this.againBtn.addEventListener("click",this.startAgain) ;

    }
    render(correctAnswers,totalAmount){
        this.scoreDom.innerHTML=`you answerd ${correctAnswers} of ${totalAmount}` ;
    }
    startAgain (){
         location.reload();
    }
}
export default Final;