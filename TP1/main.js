
//taches a faire max:
// swap les s'images pour les etoiles
//voir la fin du fichier js pour les 2 implementations possibles

fetch('https://log2420-serve.herokuapp.com/JSON/output.json')
            
    .then(function (response) {
        return response.json();    //transforme le fichier json en javascript
    })
    .then(function (data) {    // on obtient lobjet js cree plus haut
    
    console.log(data);
    addElementElections(data);
      // addElementElections(data);
    addElementPartisFederaux(data);
        // addElementPartisProvinciaux(data);
    })
    .catch(function (err) {   //regarde si une erreur s'est incruste
        console.log('error: ' + err);
            
    });

function addElementElections (data) { 

  //Elections//
  document.getElementById("box1_0_nom").innerHTML = data.Elections[0].name;
  document.getElementById("box1_0_date").innerHTML = data.Elections[0].date;
  
  document.getElementById("box1_1_nom").innerHTML = data.Elections[1].name;
  document.getElementById("box1_1_date").innerHTML = data.Elections[1].date;

  document.getElementById("box1_2_nom").innerHTML = data.Elections[2].name;
  document.getElementById("box1_2_date").innerHTML = data.Elections[2].date;

  document.getElementById("box1_3_nom").innerHTML = data.Elections[3].name;
  document.getElementById("box1_3_date").innerHTML = data.Elections[3].date;
  
  //PartisFederaux//
  document.getElementById("box2_0_abv").innerHTML = data.PartisFederaux[0].abreviation;
  document.getElementById("box2_0_fn").innerHTML = data.PartisFederaux[0].fullname;

  document.getElementById("box2_1_abv").innerHTML = data.PartisFederaux[1].abreviation;
  document.getElementById("box2_1_fn").innerHTML = data.PartisFederaux[1].fullname;

  document.getElementById("box2_2_abv").innerHTML = data.PartisFederaux[2].abreviation;
  document.getElementById("box2_2_fn").innerHTML = data.PartisFederaux[2].fullname;

  document.getElementById("box2_3_abv").innerHTML = data.PartisFederaux[3].abreviation;
  document.getElementById("box2_3_fn").innerHTML = data.PartisFederaux[3].fullname;

  document.getElementById("box2_4_abv").innerHTML = data.PartisFederaux[4].abreviation;
  document.getElementById("box2_4_fn").innerHTML = data.PartisFederaux[4].fullname;

  document.getElementById("box2_5_abv").innerHTML = data.PartisFederaux[5].abreviation;
  document.getElementById("box2_5_fn").innerHTML = data.PartisFederaux[5].fullname;

  //PartisProvinciaux//
  document.getElementById("box3_0_abv").innerHTML = data.PartisProvinciaux[0].abreviation;
  document.getElementById("box3_0_fn").innerHTML = data.PartisProvinciaux[0].fullname;

  document.getElementById("box3_1_abv").innerHTML = data.PartisProvinciaux[1].abreviation;
  document.getElementById("box3_1_fn").innerHTML = data.PartisProvinciaux[1].fullname;

  document.getElementById("box3_2_abv").innerHTML = data.PartisProvinciaux[2].abreviation;
  document.getElementById("box3_2_fn").innerHTML = data.PartisProvinciaux[2].fullname;

  document.getElementById("box3_3_abv").innerHTML = data.PartisProvinciaux[3].abreviation;
  document.getElementById("box3_3_fn").innerHTML = data.PartisProvinciaux[3].fullname;

  document.getElementById("box3_4_abv").innerHTML = data.PartisProvinciaux[4].abreviation;
  document.getElementById("box3_4_fn").innerHTML = data.PartisProvinciaux[4].fullname;

  document.getElementById("box3_5_abv").innerHTML = data.PartisProvinciaux[5].abreviation;
  document.getElementById("box3_5_fn").innerHTML = data.PartisProvinciaux[5].fullname;

  document.getElementById("box3_6_abv").innerHTML = data.PartisProvinciaux[6].abreviation;
  document.getElementById("box3_6_fn").innerHTML = data.PartisProvinciaux[6].fullname;
}

function switchRadio_1() {
  if($('#btn_cerclePlein_1').css('display') == 'none')
  {
      document.getElementById("partis").innerHTML = "Partis politiques fédéraux";
      $('#btn_cercleVide_1').css('display', 'none');
      $('#btn_cerclePlein_1').css('display', 'block');
      $('#btn_cercleVide_2').css('display', 'block');
      $('#btn_cerclePlein_2').css('display', 'none');
      $('#btn_cercleVide_3').css('display', 'block');
      $('#btn_cerclePlein_3').css('display', 'none');
      $('#btn_cercleVide_4').css('display', 'block');
      $('#btn_cerclePlein_4').css('display', 'none');
      $('#btn_carreVide_7').css('display', 'none');
      $('#btn_carrePlein_7').css('display', 'none');

      document.getElementById("partisFederaux_1").style.display = "block";
      document.getElementById("partisProvinciaux_1").style.display = "none";
      document.getElementById("partisFederaux_2").style.display = "block";
      document.getElementById("partisProvinciaux_2").style.display = "none";
      document.getElementById("partisFederaux_3").style.display = "block";
      document.getElementById("partisProvinciaux_3").style.display = "none";
      document.getElementById("partisFederaux_4").style.display = "block";
      document.getElementById("partisProvinciaux_4").style.display = "none";
      document.getElementById("partisFederaux_5").style.display = "block";
      document.getElementById("partisProvinciaux_5").style.display = "none";
      document.getElementById("partisFederaux_6").style.display = "block";
      document.getElementById("partisProvinciaux_6").style.display = "none";
      document.getElementById("partisProvinciaux_7").style.display = "none";

  } 
}


function showFederaux(){
  var firstRadio = document.getElementById("firstRadio");
  var thirdRadio = document.getElementById("thirdRadio");

  var federaux = document.getElementById("federaux")
  var provinciaux = document.getElementById("provinciaux")

  if(firstRadio || thirdRadio){
    federaux.style.display = "block";
    provinciaux.style.display = "none";
  }
  else{
    federaux.style.display = "none";
  }

}


function showProvinciaux(){
  var secondRadio = document.getElementById("secondRadio");
  var fourthRadio = document.getElementById("fourthRadio");

  var provinciaux = document.getElementById("provinciaux")
  var federaux = document.getElementById("federaux")

  if(secondRadio || fourthRadio){
    provinciaux.style.display = "block";
    federaux.style.display = "none";
  }
  else{
    provinciaux.style.display = "none";
  }

}



function linkCheckBoxes(){
   
  var count = 0;

  var firstButton = document.getElementById("firstButton");
  var secondButton = document.getElementById("secondButton");
  
  var fed0 = document.getElementById("fed0");
  var fed1 = document.getElementById("fed1");
  var fed2 = document.getElementById("fed2");
  var fed3 = document.getElementById("fed3");
  var fed4 = document.getElementById("fed4");
  var fed5 = document.getElementById("fed5");
  var prov0 = document.getElementById("prov0");
  var prov1 = document.getElementById("prov1");
  var prov2 = document.getElementById("prov2");
  var prov3 = document.getElementById("prov3");
  var prov4 = document.getElementById("prov4");
  var prov5 = document.getElementById("prov5");
  var prov6 = document.getElementById("prov6");

  if(fed0.checked == true){count++;}
  if(fed1.checked == true){count++;}
  if(fed2.checked == true){count++;}
  if(fed3.checked == true){count++;}
  if(fed4.checked == true){count++;}
  if(fed5.checked == true){count++;}
  if(prov0.checked == true){count++;}
  if(prov1.checked == true){count++;}
  if(prov2.checked == true){count++;}
  if(prov3.checked == true){count++;}
  if(prov4.checked == true){count++;}
  if(prov5.checked == true){count++;}
  if(prov6.checked == true){count++;}

  if (count == 1){
    firstButton.disabled = false;
    secondButton.disabled = true;
    firstButton.style.backgroundColor = "rgba(33, 150, 243, 1)";
    firstButton.style.color = "white";
    secondButton.style.backgroundColor = "rgba(215, 215, 215, 1)";
    secondButton.style.color = "#7F7F7F";
  }
  if (count == 2){
    firstButton.disabled = true;
    secondButton.disabled = false;
    secondButton.style.backgroundColor = "rgba(33, 150, 243, 1)";
    secondButton.style.color = "white";
    firstButton.style.backgroundColor = "rgba(215, 215, 215, 1)";
    firstButton.style.color = "#7F7F7F";
  }
  if(count > 2 || count == 0){
    firstButton.disabled = true;
    secondButton.disabled = true;
    firstButton.style.backgroundColor = "rgba(215, 215, 215, 1)";
    firstButton.style.color = "#7F7F7F";
    secondButton.style.backgroundColor = "rgba(215, 215, 215, 1)";
    secondButton.style.color = "#7F7F7F";
  }
  return count;
}

function uncheckAll() {
  $("input[type='checkbox']:checked").prop("checked", false)
}
$(':radio').on('click', uncheckAll)

$('.buttonFun').prop('disabled', !$('.buttonFun:checked').length); //initially disable/enable button based on checked length
$('input[type=checkbox]').click(function() {
  console.log($('.buttonFun:checkbox:checked').length);
  if ($('.buttonFun:checkbox:checked').length == 1) {
    $('.buttonFun').prop('disabled', false);
  } else {
    $('.buttonFun').prop('disabled', true);
  }
});


// document.getElementById("star1").onclick = function() {
//   Image.src("etoile.png") = this.src;
// }

// document.getElementById("star").onclick = function() {
//   Image.src("etoile.png") = this.src;
// }


function changeImage(element) {

  if (element.src == "star1.png") 
  {      
    console.log(element.src);
      element.src = "etoile.png";
  }
  else 
  {
      element.src = "star1.png";
  }
}

function saveInfo() {

  //var count = linkCheckBoxes();
  var fed0 = document.getElementById("fed0");
  var fed1 = document.getElementById("fed1");
  var fed2 = document.getElementById("fed2");
  var fed3 = document.getElementById("fed3");
  var fed4 = document.getElementById("fed4");
  var fed5 = document.getElementById("fed5");
  var prov0 = document.getElementById("prov0");
  var prov1 = document.getElementById("prov1");
  var prov2 = document.getElementById("prov2");
  var prov3 = document.getElementById("prov3");
  var prov4 = document.getElementById("prov4");
  var prov5 = document.getElementById("prov5");
  var prov6 = document.getElementById("prov6");
  //sessionStorage.setItem("count", "count");

  if(fed0.checked == true){sessionStorage.setItem("checkbox", "fed0");}
  if(fed1.checked == true){sessionStorage.setItem("checkbox", "fed1");}
  if(fed2.checked == true){sessionStorage.setItem("checkbox", "fed2");}
  if(fed3.checked == true){sessionStorage.setItem("checkbox", "fed3");}
  if(fed4.checked == true){sessionStorage.setItem("checkbox", "fed4");}
  if(fed5.checked == true){sessionStorage.setItem("checkbox", "fed5");}

  if(prov0.checked == true){sessionStorage.setItem("checkbox", "prov0");}
  if(prov1.checked == true){sessionStorage.setItem("checkbox", "prov1");}
  if(prov2.checked == true){sessionStorage.setItem("checkbox", "prov2");}
  if(prov3.checked == true){sessionStorage.setItem("checkbox", "prov3");}
  if(prov4.checked == true){sessionStorage.setItem("checkbox", "prov4");}
  if(prov5.checked == true){sessionStorage.setItem("checkbox", "prov5");}
  if(prov6.checked == true){sessionStorage.setItem("checkbox", "prov6");}

  document.location = 'propositions_connaitre.html';
  }