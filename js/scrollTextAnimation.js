/*
const observer = new IntersectionObserver((entries) => {
    //takes a call back function in its constructor

    entries.forEach((entry) => {
        //will run whenever the visibilty of one the elements changes

        console.log(entry)
        if (entry.isIntersecting) {

            //check if entry is intersecting the view port 
            //if it is show target on screen
            entry.target.classList.add('show');

        } else {

            //if it's not then remove it
            //this is to show and hide the target multiple times
            entry.target.classList.remove('show');

        }

    });

});

//grabs all element that has the id textHidden
const hiddenTextElements = document.getElementById('.classTextHidden');//document.querySelectorAll("#textHidden");

//loops over all the hidden elements 
//and tells observer to observe each one of them
hiddenTextElements.forEach((el) => observer.observe(el));

*/

const hiddenText = document.querySelectorAll('.classTexthidden')
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {

    const triggerBottom = window.innerHeight / 5 * 4
    hiddenText.forEach(hiddenText => {
        const boxTop = hiddenText.getBoundingClientRect.top
        if (boxTop < triggerBottom) {

            hiddenText.classList.add('show')
        } else {

            hiddenText.classList.remove('show')
        }

    })



}




