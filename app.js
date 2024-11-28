const faq= document.querySelectorAll('.q-box');

// for (i=0; i<faq.length; i++) {
//     faq[i].addEventListener('click', function(){
//         this.classList.toggle('active');
//     })
// };

faq.forEach((qBox) => 
    qBox.addEventListener('click', function(){
        this.classList.toggle('active');
}))