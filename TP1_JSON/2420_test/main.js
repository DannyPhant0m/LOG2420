//version 1

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
  document.getElementById("box1_0_type").innerHTML = data.Elections[0].type;
  
  document.getElementById("box1_1_nom").innerHTML = data.Elections[1].name;
  document.getElementById("box1_1_date").innerHTML = data.Elections[1].date;
  document.getElementById("box1_1_type").innerHTML = data.Elections[1].type;

  document.getElementById("box1_2_nom").innerHTML = data.Elections[2].name;
  document.getElementById("box1_2_date").innerHTML = data.Elections[2].date;
  document.getElementById("box1_2_type").innerHTML = data.Elections[2].type;

  document.getElementById("box1_3_nom").innerHTML = data.Elections[3].name;
  document.getElementById("box1_3_date").innerHTML = data.Elections[3].date;
  document.getElementById("box1_3_type").innerHTML = data.Elections[3].type;
  
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































//version 2


// // create an element
// const createNode = (elem) => {
//     return document.createElement(elem);
// };

// // append an element to parent
// const appendNode = (parent, elem) => {
//     parent.appendChild(elem);
// }

// // List Element
// const ul = document.querySelector('#users');

// // GitHub API URL
// const url = 'https://api.github.com/users';

// fetch(url)
              
//     .then(res=> res.json()) 
//             //transforme le fichier json en javascript
    
//     .then(data => {    // on obtient lobjet js cree plus haut
//         // iterate over users
//         data.map((user) => {
//             // create the elements
//             let li = createNode('li'),
//                 img = createNode('img'),
//                 span = createNode('span');
//             img.src = user.avatar_url;
//             span.innerText = user.login;
//             // append all elements
//             appendNode(li, img);
//             appendNode(li, span);
//             appendNode(ul, li);
//         });             
//     })
//     .catch(err => {   //regarde si une erreur s'est incruste
//         console.log('error: ' + err);
            
//     });







//version 3


// let name = [], date = [], type = [], abreviation, fullname, mainObj = {};

// let showObj = function(){

//     for ( let prop in mainObj){
//         console.log(prop);
//         console.log(mainObj[prop]);
//     };
// }

// fetch('https://log2420-serve.herokuapp.com/JSON/output.json')
            

    
//     .then(function (response) {
//         return response.json();    //transforme le fichier json en javascript
//     })
//     .then(function (data) {    // on obtient lobjet js cree plus haut
              
//         appendData(data.Elections)
//         appendDataAgain(data.PartisFederaux)
//         appendDataAgain(data.PartisProvinciaux)

//         mainObj = data;
//         showObj();
//     })
//     .catch(function (err) {   //regarde si une erreur s'est incruste
//         console.log('error: ' + err);
            
//     });

// function appendData(data) {
    
//     var mainContainer = document.getElementById("myData")
//     for (var i = 0; i < data.length; i++) {
//         name = data[i].name;
//         date = data[i].date;
//         type = data[i].type;

//         var div = document = 'name: ' + name + ' ' + date + ' ' + type;
//         mainContainer.appendChild(div);
  
//     }
// }

// function appendDataAgain(data) {
    
//     for (var i = 0; i < data.length; i++) {
//         abreviation = data[i].abreviation;
//         fullname = data[i].fullname;
//     }
// }