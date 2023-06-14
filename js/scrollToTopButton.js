
let calcScrollValue = () =>{

    let topArrow = document.getElementById("topArrow");
    let scrollValue = document.getElementById("topArrow-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    let calcScrollValue = Math.round((pos * 100) / calcHeight);

    if(pos > 100){
 
     topArrow.style.display = "grid";

    } else{ 

        topArrow.style.display = "none";
    }

    //on click scroll to top
    topArrow.addEventListener("click", () => {

        document.documentElement.scrollTop = 0;


    });

    topArrow.style.background = `conic-gradient(#be1e2d ${calcScrollValue}%, #EEEEEE ${calcScrollValue}%)`;

    //style.background = 'conic-gradient(#be1e2d ${calcScrollValue}%, #EEEEEE ${calcScrollValue}%)';

//style.background = `conic-gradient(#03cc65 ${calcScrollValue}%, #d7d7d7 ${calcScrollValue}%)`;


};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;