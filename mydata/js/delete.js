
function mydel(myid){
    let url=`http://localhost:3000/student/${myid}`
    fetch(url, {method:"DELETE"}).then((res)=>alert("data delete!!!!"));
}

async function display(){
    let mytab=`<table border="1" bgcolor="pink" width="700">
    <tr bgcolor="orange">
        <td> Rollno</td>
        <td> Name</td>
        <td> City</td>
        <td> Fees</td>
        <td> Delete</td>`


    let obj =await fetch(" http://localhost:3000/student");
    let data=await obj.json();



   
    data.map((key)=>{
        mytab+=`<tr>
            <td> ${key.rollno}</td>
<td> ${key.name}</td>
<td> ${key.city}</td>
<td> ${key.fees}</td>

<td>
<a href="#" onclick="mydel(${key.id})">
<img src="th.jpeg" width="40" height="40">
</a>
</td>
</tr>

     `;
  

    });
    mytab+= "</table>"
    document.getElementById("demo").innerHTML=mytab;
    console.log(mytab)


}

display();