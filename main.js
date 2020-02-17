function swapImageCircle(id,primary,secondary) {
    src=document.getElementById(id).src;
    if (src.match(primary)) {
        document.getElementById(id).src=secondary;
    } else {
        document.getElementById(id).src=primary;
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

