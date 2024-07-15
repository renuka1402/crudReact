let a=document.getElementById("btn1").addEventListener("click" ,mysave)
function mysave(){
    let rno=document.getElementById("rno").value;
    let nm=document.getElementById("nm").value;
    let ct=document.getElementById("ct").value;
    let fs=document.getElementById("fs").value;


    let url="  http://localhost:3000/student";

    fetch(url,{

        method : "POST",

        body :JSON.stringify({
            rollno :rno,
            name :nm,
            city :ct,
            fees :fs

        }),

        headers :{
            "Content-Type": "application/json ; charset=UTF-8"
        }
    }).then(res=> res.json()).then(json=>alert("data save!!!"));
}