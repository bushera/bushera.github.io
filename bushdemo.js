 function toggle(menu){
  menu = document.getElementById(menu);
 
 if(menu.dataset.opened == "no"){
   menu.style.transform = "perspective(800px) rotateX(0deg)";
   menu.dataset.opened = "yes";
 }
 
 else{
   menu.style.transform = "perspective(800px) rotateX(90deg)";
   menu.dataset.opened = "no";
 }
 
}

function togglecp(){
var cp = document.getElementById("cp");

if( cp.style.height == "0px"){
cp.style.right = "10px";
cp.style.height = "36px";
cp.style.position = "absolute"

}
else
{
cp.style.right = "-260px";
cp.style.height = "0px"
}

}