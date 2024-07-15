function edit(id){

    let myroll=document.getElementById("myrno").value;
    
    let myname=document.getElementById("mynm").value;
    
    let  mycity=document.getElementById("myct").value;
    
    let myfees=document.getElementById("myfees").value;

  
    let upl=`http://localhost:3000/student/${id}`;
  fetch(upl,{
    method:"PATCH",
    body :JSON.stringify({
        rollno :myroll,
        name :myname,
        city : mycity,
        fees :myfees
    }),
    headers :{
        "Content-Type": "application/json "
    
}
}).then(res=> res.json()).then(json=>alert("data save!!!"));


}



async function hello(id){
    let upl=`http://localhost:3000/student/${id}`;
    let obj=await fetch(upl);
    let mydata=await obj.json();
    let mytext=`
    Edit Rollno :<input type="test" value="${mydata.rollno}" id="myrno">
    <br>
    Edit Nmae:<input type="test" value="${mydata.name}"  id="mynm">
    <br>
    Edit City:<input type="test" value="${mydata.city}"  id="myct">
    <br>
    Edit Fees :<input type="test" value="${mydata.fees}"  id="myfees">
    <br>
    <button onclick="edit(${mydata.id})">search </button>`;

    document.getElementById("demo1").innerHTML=mytext;

}
async function datadisplay(){
    let mytab=`<table border="1" bgcolor="pink" width="1500">
    <tr bgcolor="yellow">
        <td> Rollno</td>
        <td> Name</td>
        <td> City</td>
        <td> Fees</td>
        <td>Edit</td>
     `

let upl="http://localhost:3000/student"
let obj=await fetch(upl);
let mydata=await obj.json();
mydata.map((key)=>{
    mytab+=`<tr>
        <td> ${key.rollno}</td>
<td> ${key.name}</td>
<td> ${key.city}</td>
<td> ${key.fees}</td>
<td>
<a href="#" onclick="hello(${key.id})">
<img src="edit.jpeg" width="30" height="30">

 `;


});
mytab+= "</table>"
document.getElementById("demo").innerHTML=mytab;



}


datadisplay();



function edit(id){
    let myroll=document.getElementById("myrno").value;
    
    let myname=document.getElementById("mynm").value;
    
    let  mycity=document.getElementById("myct").value;
    
    let myfees=document.getElementById("myfees").value;
    
    let upl=`http://localhost:3000/student/${id}`;
    fetch(upl,{
        method:"PATCH",
        body:JSON.stringify({     rollno :myroll,
            name :myname,
            city : mycity,
            fees :myfees})
    ,
    headers :{
        " Content-type": "application/json"
    }

}).then((res=>res.json))
}