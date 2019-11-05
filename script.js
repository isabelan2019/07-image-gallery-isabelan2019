//document.getElementById('one').addEventListener("click",thisSlide(0));
//document.getElementById('one').addEventListener("click",open);
//document.getElementById('two').addEventListener("click",thisSlide(1));
//document.getElementById('two').addEventListener("click",open);

//document.getElementById('three').addEventListener("click",thisSlide(2));
//document.getElementById('three').addEventListener("click",open);

//document.getElementById('four').addEventListener("click",thisSlide(3));
//document.getElementById('four').addEventListener("click",open);

//document.getElementById('five').addEventListener("click",thisSlide(4));
//document.getElementById('five').addEventListener("click",open);

//document.getElementById('six').addEventListener("click",thisSlide(5));
//document.getElementById('six').addEventListener("click",open);

//document.getElementById('seven').addEventListener("click",thisSlide(6));
//document.getElementById('seven').addEventListener("click",open);

//document.getElementById('eight').addEventListener("click",thisSlide(7));
//document.getElementById('eight').addEventListener("click",open);
//document.getElementById('nine').addEventListener("click",open);
//document.getElementById('ten').addEventListener("click",open);
//document.getElementById('eleven').addEventListener("click",open);
//document.getElementById('twelve').addEventListener("click",open);


var photoIndex=(-1);

var photoArray =
[document.getElementById("one"),
document.getElementById("two"),
document.getElementById("three"),
document.getElementById('four'),
document.getElementById('five'),
document.getElementById('six'),
document.getElementById('seven'),
document.getElementById('eight'),
document.getElementById('nine'),
document.getElementById('ten'),
document.getElementById('eleven'),
document.getElementById('twelve')];

for (i=0;i<photoArray.length;i++){
  photoArray[i].addEventListener("click",open);
}
document.getElementById('close-btn').addEventListener("click",close);
document.getElementById('prev-btn').addEventListener("click",prev);
document.getElementById('next-btn').addEventListener("click",next);

function open(){
  if (photoIndex=-1){
  photoIndex=this.getAttribute("data-index");
  }
  document.getElementById('photo-big').src=photoArray[photoIndex].src;
  document.getElementById('zoom').style.display="block";
  document.getElementById('main').style.display="none";
}

function close(){
  document.getElementById('main').style.display="grid";
  document.getElementById('zoom').style.display="none";
}

function prev(){
  photoIndex-=1;
  document.getElementById('photo-big').src=photoArray[photoIndex].src;
}
function next(){
  photoIndex+=1;
  document.getElementById('photo-big').src=photoArray[photoIndex].src;
}
