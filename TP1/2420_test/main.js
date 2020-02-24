//version 1

//taches a faire max:
// swap le; simages pour les etoiles
// finir la fonction de link check pour les 2 bouttons 


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


function swapImages(id,primary,secondary) {
  src=document.getElementById(id).src;
  if (src.match(primary)) {
      document.getElementById(id).src=secondary;

      return true;
  } else {
    
      document.getElementById(id).src=primary;
      return false;
  }
}

function linkCheckBoxes(){   //plus facile , trouve une fonction ou quand cest checked une fois, le 1er button active, 2 checked 2ieme bouton active

  var firstButton = document.getElementById("firstButton");
  var secondButton = document.getElementById("secondButton");

  var check0 = document.getElementById("check0");
  var check1 = document.getElementById("check1");
  var check2 = document.getElementById("check2");
  var check3 = document.getElementById("check3");
  var check4 = document.getElementById("check4");
  var check5 = document.getElementById("check5");
  var check6 = document.getElementById("check6");


  if(check0.checked == true && check1.checked == false && check2.checked == false && check3.checked == false && check4.checked == false && check5.checked == false && check6.checked == false){
      firstButton.disabled = false;
      secondButton.disabled = true;
      firstButton.style.backgroundColor = "rgba(33, 150, 243, 1)";
      firstButton.style.color = "white";
  }
  if(check0.checked == false && check1.checked == true && check2.checked == false && check3.checked == false && check4.checked == false && check5.checked == false && check6.checked == false  ){
      firstButton.disabled = false;
      secondButton.disabled = true;
      firstButton.style.backgroundColor = "rgba(33, 150, 243, 1)";
      firstButton.style.color = "white";
  }
  if(check0.checked == false && check1.checked == false && check2.checked == true && check3.checked == false && check4.checked == false && check5.checked == false && check6.checked == false  ){
      firstButton.disabled = false;
      secondButton.disabled = true;
      firstButton.style.backgroundColor = "rgba(33, 150, 243, 1)";
      firstButton.style.color = "white";
     
  }
  if(check0.checked == false && check1.checked == false && check2.checked == false && check3.checked == true && check4.checked == false && check5.checked == false && check6.checked == false  ){
      firstButton.disabled = false;
      secondButton.disabled = true;
      firstButton.style.backgroundColor = "rgba(33, 150, 243, 1)";
      firstButton.style.color = "white";
  }
  if(check0.checked == false && check1.checked == false && check2.checked == false && check3.checked == false && check4.checked == true && check5.checked == false && check6.checked == false  ){
      firstButton.disabled = false;
      secondButton.disabled = true;
      firstButton.style.backgroundColor = "rgba(33, 150, 243, 1)";
      firstButton.style.color = "white";
  }
  if(check0.checked == false && check1.checked == false && check2.checked == false && check3.checked == false && check4.checked == false && check5.checked == true && check6.checked == false  ){
      firstButton.disabled = false;
      secondButton.disabled = true;
      firstButton.style.backgroundColor = "rgba(33, 150, 243, 1)";
      firstButton.style.color = "white";
  }
  if(check0.checked == false && check1.checked == false && check2.checked == false && check3.checked == false && check4.checked == false && check5.checked == false && check6.checked == true  ){
      firstButton.disabled = false;
      secondButton.disabled = true;
      firstButton.style.backgroundColor = "rgba(33, 150, 243, 1)";
      firstButton.style.color = "white";
  }
  else{
    firstButton.style.display = "firstButton";
  }
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

