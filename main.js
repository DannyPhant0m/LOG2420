function swapImageCircle(id,primary,secondary) {
    src=document.getElementById(id).src;
    if (src.match(primary)) {
        document.getElementById(id).src=secondary;

        return true;
    } else {
      
        document.getElementById(id).src=primary;
        return false;
    }
}


function swapImageBox(id, primary, secondary) {
    src = document.getElementById(id).src;
    if (src.match(primary)) {
        document.getElementById(id).src = secondary;
    } else {
        document.getElementById(id).src = primary;
    }
}

function swapText(id,primary,secondary){

    value = document.getElementById(id).value;
    if (src.match(primary)) {
        document.getElementById(id).value = secondary;
    } else {
        document.getElementById(id).value = primary;
    }
}
