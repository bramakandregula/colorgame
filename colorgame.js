var numsquares=6;
var colors=randomcolors(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var displaycolor=document.getElementById("displaycolor");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var newcolors=document.querySelector("button");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
  numsquares=3;
  colors=randomcolors(numsquares);
  pickedcolor=pickcolor();
  this.classList.add("selected");
  hardbtn.classList.remove("selected");
  displaycolor.textContent=pickedcolor;
  h1.style.background="steelblue";
  message.textContent=" ";
  newcolors.textContent="new colors";
  for(var i=0;i<squares.length;i++)
  {
    if(colors[i])
    {
      squares[i].style.background=colors[i];
    } else{
      squares[i].style.display="none";
    }
  }
});
hardbtn.addEventListener("click",function(){
  numsquares=6;
  easybtn.classList.remove("selected");
  this.classList.add("selected");
  colors=randomcolors(numsquares);
  pickedcolor=pickcolor();
  displaycolor.textContent=pickedcolor;
  h1.style.background="steelblue";
  message.textContent=" ";
  newcolors.textContent="newcolors";
  for(var i=0;i<numsquares;i++)
  {
    if(colors[i])
    {

      squares[i].style.background=colors[i];
      squares[i].style.display="block";
    }
  }
});

newcolors.addEventListener("click",function(){
  newcolors.textContent="newcolors";
  colors=randomcolors(numsquares);
  pickedcolor=pickcolor();
  for(var i=0;i<numsquares;i++)
  {
    squares[i].style.background=colors[i];
  }
  h1.style.background="steelblue";
  message.textContent=" ";
  displaycolor.textContent=pickedcolor;
});
displaycolor.textContent=pickedcolor +" ";
for(var i=0;i<numsquares;i++)
{
  squares[i].style.background=colors[i];
  squares[i].addEventListener("click",function(){

    if(this.style.background===pickedcolor)
    {
      changecolors(pickedcolor);
      message.textContent="correct";
      h1.style.background=pickedcolor;
      newcolors.textContent="play again?"
    }
    else{
        this.style.background="#232323";
        message.textContent="trt again";
    }
  });
}
function changecolors(col)
{
  for(var i=0;i<squares.length;i++)
  {
    squares[i].style.background=col;
  }
}
function pickcolor(){
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}
function randomcolors(num)
{
  var arr=[];
  for(var i=0;i<num;i++)
  {
    arr.push(getrandom());
  }
  return arr;
}
function getrandom()
{
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb("+r+", "+g+", "+b+")";
}
