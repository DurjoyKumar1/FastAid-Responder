
let btn=document.querySelector(".btn-submit");

btn.addEventListener("click",function(e){
    let name1=document.querySelector("#name").value.trim();
    let email1=document.querySelector("#email").value.trim();
    let phone1=document.querySelector("#phone").value.trim();
    let location1=document.querySelector("#location").value.trim();
    let description1=document.querySelector("#description").value.trim();

    if(name1==="" || email1==="" || phone1==="" || location1=== ""||
    description1===""){
        alert("Please fill all the fields");
        e.preventDefault();
    }
    else{
        alert("Your request has been submitted successfully. We will get back to you soon.");
        e.preventDefault();
    }
});
