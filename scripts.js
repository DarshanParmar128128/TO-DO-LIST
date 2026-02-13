
console.log("hello");

var inputs=document.querySelector("#insert");
var addtast=document.querySelector("#addtast");
var all=document.querySelector(".all");
var deletee=document.querySelector(".active");
var complet=document.querySelector(".complet");
var del=document.querySelector(".cleare");
var valid=document.querySelector("#valid");
var datacollect=[];
//  add task in console 
addtast.addEventListener("click",function (events) {
    events.preventDefault(); //  form reload stop karega
    if(inputs.value===""){
        valid.textContent="please enter the text !";
    }
    else{
        valid.textContent="";
    }
    // console.log(inputs.value);

    // convert in array format
    datacollect.push(inputs.value);
    inputs.value="";
});
var p=[];
 // display all record  
all.addEventListener("click",(events)=>{
   events.preventDefault();
   datacollect.forEach(function mydata(p){
    console.log(p);
     let list=document.createElement("li");
     list.textContent=p;
     document.querySelector(".tasllist").appendChild(list);
     
})
})
// delete all record
deletee.addEventListener("click",(events)=>{
      events.preventDefault();
      datacollect=[];  // all data nnull
      document.querySelector(".tasllist").innerHTML="";  // ui all data remove null
     
});
