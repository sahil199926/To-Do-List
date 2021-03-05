var ch=new Set();
var c;
var p;
document.getElementById("typ").addEventListener("keypress",(Event)=>{ 
   if (Event.keyCode === 13)
  { Event.preventDefault();
    funck();}});



function funck(){

 var v=document.getElementById("typ").value;
 if(v=="")
 {return;}
if(ch.has(v)==false){
//<i class="fa fa-trash-o" style="font-size:20px;"></i>
ch.add(v);
 var child=document.createElement('li');
child.innerHTML=v;
var icon=document.createElement('i');
icon.classList.add('fa');
icon.classList.add('fa-trash-o');
icon.style.float='right';
icon.setAttribute('onclick','remov(event);');
icon.onmouseover =()=>{icon.style.color='red';};
icon.onmouseout =()=>{icon.style.color='black';};
//icon.setAttribute();
child.appendChild(icon);
child.setAttribute("class","list-group-item");
child.style.textOverflow="ellipsis";
child.style.overflow='hidden';
document.getElementsByClassName("list-group")[0].append(child);
}
else{
  alert("The task is already there");
}
document.getElementById("typ").value="";
}
function remov(event){
  document.getElementsByClassName('modal')[0].style.display='block';
   c=event.target;
    p=event.target.parentNode;
  // event.target.parentNode.remove();
  // event.target.remove();
  // ch.delete(t.innerHTML);
}
function condelet(){
c.remove();
ch.delete(p.innerHTML);
p.remove();
document.getElementsByClassName('modal')[0].style.display='none';
}
function notdele(){
  document.getElementsByClassName('modal')[0].style.display='none';
}