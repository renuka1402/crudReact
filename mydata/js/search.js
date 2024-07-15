
let a=document.getElementById("btn1").addEventListener("click" ,mysave)
 async function mysave(){
    let rno=document.getElementById("rno").value;



    let url=  `http://localhost:3000/student/?rollno=${rno}`;
    let obj =await fetch(url);
    let mydata=await obj.json();

    let mytab=`<table border="1" bgcolor="pink" width="700">
    <tr bgcolor="orange">
        <td> Rollno</td>
        <td> Name</td>
        <td> City</td>
        <td> Fees</td>
        <td> Delete</td>
        </tr>
        <tr>
        <td>${mydata[0].rollno}</td>
        <td>${mydata[0].name}</td>
        <td>${mydata[0].city}</td>
        <td>${mydata[0].fees}</td>
        </tr>
        </table>`;
        document.getElementById("demo").innerHTML=mytab;
 }
