
//DRAG AND DROP - ENTRADAS
    var images=document.querySelectorAll('.img-container');
     box1 = document.getElementById('dropbox1');  
     box2 =document.getElementById('dropbox2'); 
     box3 = document.getElementById('dropbox3'); 
     dropcontainer = document.getElementById('drop-container');
     
    for(var i=0; i<images.length; i++){
    images[i].addEventListener('dragstart', drag);
    }

    box1.addEventListener('drop', drop1);
    box2.addEventListener('drop', drop2);
    box3.addEventListener('drop', drop3);

    dropcontainer.addEventListener('dragover', function(e){
        e.preventDefault();
        e.target.classList.add('hover') });
    
    dropcontainer.addEventListener('dragleave', function(e){
        e.target.classList.remove('hover') });
        dropcontainer.addEventListener('drop', function(e){
        e.target.classList.remove('hover') });       
//

function drag(e){
    imgDraged=e.target;
    e.dataTransfer.setData('Text', imgDraged.getAttribute('id'));
}

function drop1(e){
    var id=e.dataTransfer.getData('Text');
    
    var src=document.getElementById(id).src;
        box1.innerHTML='<img src="'+src+'" height="400px" width="275px">';
        (imgDraged).style.display='none';  
}

function drop2(e){
    var id=e.dataTransfer.getData('Text');
    var src=document.getElementById(id).src;
        box2.innerHTML='<img src="'+src+'" height="400px" width="275px">';
        (imgDraged).style.display='none';
}

function drop3(e){
    var id=e.dataTransfer.getData('Text');
    var src=document.getElementById(id).src;
    box3.innerHTML='<img src="'+src+'" height="400px" width="275px">';
    (imgDraged).style.display='none'
}

function reload() {
    window.location.reload();
}