var user = JSON.parse(localStorage.getItem("user")) || [];

 document.querySelector("#user").addEventListener("submit",submitdata);

function submitdata(){
    event.preventDefault();
   var name=document.getElementById("name").value;
   var address = document.getElementById("address").value;
   var email  =document.getElementById("email").value;
   var amount = document.getElementById("amount").value;
    
    arr=[];
    var obj={
          name:name,
          email:address,
          address:email,
          amount:amount,
    };
    
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("user",JSON.stringify(arr));
}