


async function display(){
    let mytab=`<table border="1" bgcolor="pink" width="1500">
    <tr bgcolor="orange">
        <td> Rollno</td>
        <td> Name</td>
        <td> City</td>
        <td> Fees</td>`


    let obj =await fetch(" http://localhost:3000/student");
    let data=await obj.json();



   
    data.map((key)=>{
        mytab+=`<tr>
            <td> ${key.rollno}</td>
<td> ${key.name}</td>
<td> ${key.city}</td>
<td> ${key.fees}</td>

     `;
  

    });
    mytab+= "</table>"
    document.getElementById("demo").innerHTML=mytab;
    console.log(mytab)


}

display();
