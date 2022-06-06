var url ="https://masai-vouchers-api.herokuapp.com/api/vouchers";
getdata()
 async function getdata(){
       let data = await fetch(url)
       data = await data.json()
       console.log(data[0].vouchers);
       showdata(data[0].vouchers)
       
      
   }
  
   var store = JSON.parse(localStorage.getItem("user")) || [];
   var allvoucher = JSON.parse(localStorage.getItem("purchase")) || [] 
 
   function showdata(val){
    let vouchers = document.getElementById("voucher_list");
    val.forEach((ele,index) => {
        let img = document.createElement('img');
        img.src=ele.image;
        img.style.width="100%";
        img.style.height="50%";
        img.style.margin= "auto";

        let p1 = document.createElement("p");
        p1.innerText=ele.name;

        let h1 = document.createElement("h3");
        h1.innerText= ele.price;

        let button = document.createElement("button");
        button.innerText = "Buy";
        button.value="Buy";
        button.addEventListener("click", function(){
           let v1= additem(ele,ele.price,index);
             if(v1==true)
             {
                 alert("add voucer successfully")
             }

        });
      let div = document.createElement("div");
      div.style.textAlign="center";
      div.style.border = "solid black 1px";
      div.style.width = "80%";
      div.style.padding = '10px';
      div.append(img,p1,h1,button)

      vouchers.append(div);
    });
   }

function additem(ele,p,i){
    allvoucher.push(ele);
    localStorage.setItem("purchase",JSON.stringify(allvoucher));
    return true;
}