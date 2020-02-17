                        
function toggleImage(){

    var img1 = "images/u10.svg";
    var img2 = "images/u10_selected.svg";

    var imgElement = document.getElementbyId('toggleImage');
                                    
    imgElement.src = (imgElement.src === img1) ? img2 : img1;

}

