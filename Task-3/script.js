function addStudent()
{
    let name=document.getElementById("name").value;
    let course=document.getElementById("course").value;
    if(name ===""||course ==="")
    {
        alert("please enter all fields")
        return;
    }
    let table=document.getElementById("studentTable");

    let row=document.createElement("tr");

   let nameCell=document.createElement("td");
   nameCell.innerText=name;

   let courseCell=document.createElement("td");
   courseCell.innerText=course;
   
   let actionCell=document.createElement("td");

   let deleteButton=document.createElement("button");
   deleteButton.innerText="delete";

   deleteButton.onclick = function()
   {
    row.remove();

   };

   actionCell.appendChild(deleteButton);

   row.appendChild(nameCell);
   row.appendChild(courseCell);
   row.appendChild(actionCell);

   table.appendChild(row);

   document.getElementById("name").value="";
   document.getElementById("course").value="";
}