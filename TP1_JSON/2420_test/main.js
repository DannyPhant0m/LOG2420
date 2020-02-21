//version 1

fetch('https://log2420-serve.herokuapp.com/JSON/output.json')
            
    .then(function (response) {
        return response.json();    //transforme le fichier json en javascript
    })
    .then(function (data) {    // on obtient lobjet js cree plus haut
        addElementElections(data);
        addElementPartisFederaux(data);
        addElementPartisProvinciaux(data);
    })
    .catch(function (err) {   //regarde si une erreur s'est incruste
        console.log('error: ' + err);
            
    });

function addElementElections (data) { 
  var newDiv = document.createElement("div"); 

  for (var i = 0; i < data.length; i++){

    var newName = document.createTextNode(data.Elections[i].name); 
    newDiv.appendChild(newName);  

    var newDate = document.createTextNode(data.Elections[i].date); 
    newDiv.appendChild(newDate); 

    var newType = document.createTextNode(data.Elections[i].type); 
    newDiv.appendChild(newType); 

    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }
  
}


function addElementPartisFederaux (data) { 
    var newDiv = document.createElement("div"); 
  
    for (var i = 0; i < data.length; i++){
  
      var newAbrev = document.createTextNode(data.PartisFederaux[i].abreviation); 
      newDiv.appendChild(newAbrev);  
  
      var newFullName = document.createTextNode(data.PartisFederaux[i].fullname); 
      newDiv.appendChild(newFullName); 
  
      var currentDiv = document.getElementById("div1"); 
      document.body.insertBefore(newDiv, currentDiv); 
    }
    
  }

  

  function addElementPartisProvinciaux (data) { 
    var newDiv = document.createElement("div"); 
  
    for (var i = 0; i < data.length; i++){
  
        var newAbrev = document.createTextNode(data.PartisProvinciaux[i].abreviation); 
        newDiv.appendChild(newAbrev);  
    
        var newFullName = document.createTextNode(data.PartisProvinciaux[i].fullname); 
        newDiv.appendChild(newFullName); 
  
      var currentDiv = document.getElementById("div1"); 
      document.body.insertBefore(newDiv, currentDiv); 
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