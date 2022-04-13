
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
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function drop1(e){
    var id=e.dataTransfer.getData('Text');
    if(id!="img1"){
        box1.innerHTML='<p>❌ La imagen no es correcta</p>';
        // this.style.border='2px solid red'
    }else{
        var src=document.getElementById(id).src;
        box1.innerHTML='<img src="'+src+'" height="400px" width="275px">';
        (id=img1).style.display='none';    
    }
}

function drop2(e){
    var id=e.dataTransfer.getData('Text');
    if(id!="img2"){
        box2.innerHTML='<p>❌ La imagen no es correcta</p>';
    }else{
        var src=document.getElementById(id).src;
        box2.innerHTML='<img src="'+src+'" height="400px" width="275px">';
        (id=img2).style.display='none';
    }
}

function drop3(e){
    var id=e.dataTransfer.getData('Text');
    if(id!="img3"){
        box3.innerHTML='<p>❌ La imagen no es correcta</p>';
    }else{
        var src=document.getElementById(id).src;
        box3.innerHTML='<img src="'+src+'" height="400px" width="275px">';
        (id=img3).style.display='none'
    }
}

function reload() {
    window.location.reload();
}

