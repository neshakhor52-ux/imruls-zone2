
async function go(){
 let u=document.getElementById("url").value;
 let r=await fetch("/api/all?url="+encodeURIComponent(u));
 let j=await r.json();
 document.getElementById("res").innerText="Done";
}
