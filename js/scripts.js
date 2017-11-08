
var colimg = document.querySelectorAll(".colimg"),
    colbutton = document.querySelectorAll(".colbutton"),
    fgFiltr = document.querySelectorAll("[data-colandero]"),
    colimg = makeArray(colimg);

function makeArray(list){

  var arr =[];

  for(var i=0;i<list.length;i++){
    arr.push(list[i]);
  }
  return arr;
}

function showAll(list){
  for( var i=0;i<list.length;i++){
    list[i].style.display="";
    list[i].classList.remove("hide");
    list[i].classList.add("show");

  }
}

function hideAll(list){
  for(var i=0;i<list.length;i++){

    list[i].classList.add("hide");
    list[i].classList.remove("show");


  }
}
function displayNone(list){
  for(var i=0;i<list.length;i++){

    list[i].style.display="none";

  }

}


colbutton[0].addEventListener("click",function(e){
  hideAll(colimg);

  setTimeout(function(){showAll(colimg);},500)
},false);
function addFuncToButtons(){
  for(var x=1;x<colbutton.length;x++){
    colbutton[x].addEventListener("click",function(e){
      var txt = e.target.innerText.toLowerCase(),
          list =[];
      hideAll(colimg);
      setTimeout(function(){displayNone(colimg);},500)
      for(var i in colimg){
        var dataFiltr = fgFiltr[i].dataset.colandero.toLowerCase().split(" ");
        for(var z in dataFiltr){
          if(txt===dataFiltr[z]){
            list.push(colimg[i]);
          }
        }
      }
        setTimeout(function(){showAll(list);},500)
    },false);
  }
}
addFuncToButtons();
