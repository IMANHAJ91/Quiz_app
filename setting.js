import Quiss from "./quiss.js";
class setting{
    constructor(){
     this.settingDom=document.querySelector(".settings");
     this.quissDom=document.querySelector(".quiss") ;  
     this.categoryDom=document.querySelector("#category");
     this.nQuestionDom=document.querySelector("#nQuestion");
     this.difficultyDom=[document.querySelector("#easy"),document.querySelector("#medium"),document.querySelector("#hard")];
    this.startBtn=document.querySelector("#start");
    this.startBtn.addEventListener("click" ,this.startQuissApp)
    this.quiss={};
    }
startQuissApp= async()=>{
 
   var amount=this.nQuestionDom.value;
    var category=this.categoryDom.value;
    var difficulty=this.difficultyDom.find(item=>item.checked).value;
    const Url=`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
  var data =await this.getData(Url);
  
 
 if(data){
     this.quissDom.style.display="block";
     this.settingDom.style.display="none";
 }
 console.log(data);
 this.quiss=new Quiss(amount,data);
  
}

async getData(file) {
    let myObject = await fetch(file);
    let myData=await myObject.json();
    let myResult=myData.results;
    return myResult ;

  }
}


export default setting;
