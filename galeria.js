
window.addEventListener("load", function(){

    var listItem=document.getElementsByTagName("a");
    for (var i=0; i<listItem.length;i++){
        var listItem2=document.getElementsByTagName("a")[i];
            listItem2.addEventListener("click", function(e){
            e.preventDefault();
    
        var img = document.getElementById("imgVistaPrevia");
            img.setAttribute("src",e.srcElement.href);

        var titulo = document.getElementById("tituloImagen");
            titulo.innetText = e.srcElement.title;    
});
  }
  });      

