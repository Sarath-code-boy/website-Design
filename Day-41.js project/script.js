document.getElementById("studentform").addEventListener("submit",function(event)
{
        event.preventDefault();
        //get values
        let name =document.getElementById("name").value.trim();
        let email=document.getElementById("email").value.trim();
        let mobile=document.getElementById("mobile").value.trim();
        let age=document.getElementById("age").value.trim();

        let valid =true;

       // clear previous message
       document.getElementById("nameError").innerHTML="";
       document.getElementById("emailError").innerHTML="";
       document.getElementById("mobileError").innerHTML="";
       document.getElementById("ageError").innerHTML="";
       //Name validation
       if(name == "")
       {
        document.getElementById("nameError").innerHTML="Name is Required";
        valid =false;
       }
       else if(!/^[A-Za-z]+$/.test(name))
       {
        document.getElementById("nameError").innerHTML="Only Alphabets allowd";
        valid=false;
       }
       //Email validation
       if(email == "")
       {
        document.getElementById("emailError").innerHTML="Email is Required";
        valid=false;
       }
       else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
       {
        document.getElementById("emailError").innerHTML="Enter valid email";
        valid=false;
       }
       //mobile validation
       if(mobile == "")
       {
        document.getElementById("mobileError").innerHTML="mobile is required";
       }
       else if(!/^[0-9]{10}$/.test(mobile))
       {
        document.getElementById("mobileError").innerHTML="Enter valid mobile number";
        valid=false;
       }
       
       //Age validation
       if(age=="")
       {
        document.getElementById("ageError").innerHTML="Age is required";

       }
       else if(!/^[0-9]+$/.test(age))
       {
        document.getElementById("ageError").innerHTML="age must contain numbers only";
        valid=false;
       }
       else if(age<18 || age>60)
       {
        document.getElementById("ageError").innerHTML="age must be between 18 to 60";
        valid=false;
       }
       if (valid)
       {
        alert("form submitted successfully");
       }
    });