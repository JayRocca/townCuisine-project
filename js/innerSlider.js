

let slideToggles = document.querySelectorAll('.innerSlider');
let slideContents = document.querySelectorAll('.innerContent');

let slideUp = document.querySelectorAll('.slideUp');
let slideDown = document.querySelectorAll('.slideDown');

slideToggles.forEach((slideToggle, index) => {

    slideToggle.addEventListener('click', () => {


        slideContents.forEach((slideContent) => {


            slideContent.classList.remove('isActive');



            //  slideContent.classList.add('slideDown');  slideDown.classList.add('slideDown')
        });


        slideToggles.forEach((slideToggle) => {


            slideToggle.classList.remove('isActive');



        });



        slideContents[index].classList.add('isActive', 'slideUp');
        slideToggles[index].classList.add('isActive')





    });



});



let slideToggles1 = document.querySelectorAll('.innerSlider1');
let slideContents1 = document.querySelectorAll('.innerContent1');



slideToggles1.forEach((slideToggle1, index) => {

    slideToggle1.addEventListener('click', () => {


        slideContents1.forEach((slideContent1) => {


            slideContent1.classList.remove('isActive');



            //  slideContent.classList.add('slideDown');  slideDown.classList.add('slideDown')
        });


        slideToggles1.forEach((slideToggle1) => {


            slideToggle1.classList.remove('isActive');



        });



        slideContents1[index].classList.add('isActive', 'slideUp');
        slideToggles1[index].classList.add('isActive')





    });



});


let slideToggles2 = document.querySelectorAll('.innerSlider2');
let slideContents2 = document.querySelectorAll('.innerContent2');



slideToggles2.forEach((slideToggle2, index) => {

    slideToggle2.addEventListener('click', () => {


        slideContents2.forEach((slideContent2) => {


            slideContent2.classList.remove('isActive');



            //  slideContent.classList.add('slideDown');  slideDown.classList.add('slideDown')
        });


        slideToggles2.forEach((slideToggle2) => {


            slideToggle2.classList.remove('isActive');



        });



        slideContents2[index].classList.add('isActive', 'slideUp');
        slideToggles2[index].classList.add('isActive')





    });



});
