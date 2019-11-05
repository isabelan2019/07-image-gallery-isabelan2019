var photoIndex=-1;

var photoArray = [document.getElementById('one'), document.getElementById('two'),
document.getElementById('three'),document.getElementById('four'),
document.getElementById('five'),document.getElementById('six'),
document.getElementById('seven'),document.getElementById('eight'),
document.getElementById('nine'),document.getElementById('ten'),
document.getElementById('eleven'),document.getElementById('twelve')];

document.getElementById('close-btn').addEventListener('click',close);
document.getElementById('prev-btn').addEventListener('click',prev);
document.getElementById('next-btn').addEventListener('click',next);

for (i=0;i<photoArray.length;i++){
  photoArray[i].addEventListener('click',open);
}


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

function next(){
  if(photoIndex>=11){
    document.getElementById('photo-big').src=photoArray[photoIndex].src;
  }
  else{
  photoIndex=photoIndex-(-1);
  document.getElementById('photo-big').src=photoArray[photoIndex].src;
  }
}

function prev(){
  if(photoIndex<=0){
    document.getElementById('photo-big').src=photoArray[photoIndex].src;
  }
  else{
  photoIndex-=1;
  document.getElementById('photo-big').src=photoArray[photoIndex].src;
  }
}
