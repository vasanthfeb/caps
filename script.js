document.getElementById("user_input").value="";


function upp(){
    let answer=document.getElementById("user_input").value;
    answer=answer.toUpperCase();
    document.getElementById("user_input").value=answer;
   
}
function cle(){
    document.getElementById("user_input").value="";
}

function low(){
    let answer=document.getElementById("user_input").value;
    answer=answer.toLowerCase();
    document.getElementById("user_input").value=answer;
}
function cpy(){
    let answer=document.getElementById("user_input").value;
    navigator.clipboard.writeText(answer);
    alert("Text Copied !")
}
