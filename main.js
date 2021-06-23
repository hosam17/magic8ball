image = document.createElement("img");
image.setAttribute("src", "magic8ball_extra.png")
divAnswer=document.createElement("div");
document.body.appendChild(divAnswer);
divAnswer.appendChild(image);
tryagain=document.createElement('h2');

function ask () {
    question=document.getElementById("question").value;
    if (question[question.length-1]!=="?") {
        document.getElementById("repeatQuestion").innerHTML="please ask a question ends with '?'"   
        tryagain.innerHTML="";
    }
   else{ document.getElementById("repeatQuestion").innerHTML= question
    

    choice = Math.floor(((Math.random())*20)+1);
    path="magic8ball_"+choice+".png"
     
    
    image.setAttribute("src", path);
    

  
      
    while (divAnswer.firstChild) {
    divAnswer.removeChild(divAnswer.firstChild);
        
    }
      
    
      

    divAnswer.appendChild(image);

   //document.getElementById("tryagain").innerHTML='please ask again';
   
   document.body.appendChild(tryagain);
   tryagain.innerHTML="Please ask another question if you like!";
   document.getElementById("question").value="";
    
    }}
document.getElementById("ask").addEventListener("click",ask);
