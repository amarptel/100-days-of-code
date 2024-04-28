// Setting two const values

// Retreiving the myname element from the h1 tag with id myname. 
const monNom = document.getElementById('myname')
// Setting a constant to "Amar Patel!"
const nameText = 'Amar' + '\xa0' + 'Patel!';

// For loop to make each letter appear, one at a time. 
for (let i = 0; i < nameText.length; i++) {
    setTimeout(() => {
    // Incrementing each letter to the inner text.
    monNom.innerText += nameText[i];
    // Setting time delay interval.
    }, i * 175);
};




// // Making navbar translucent on scroll.
// $(document).scroll(function() {
//     var value=$(document).scrollTop();

//         if (value > 50) {
//             document.getElementById("navbar").style.opacity = 0.5;
//             document.getElementById("letters").style.opacity = 1;
//         } else {
//             document.getElementById("navbar").style.opacity = 1;
//         }
// });


// gsap.timeline()
//     .set('.techstackimages', { rotationY:10, cursor:'grab'})
//     .set('.img', {
//         rotateY: (i)=> i*36,
//         transformOrigin: '50% 50% 500px',
//         z: -500,
//         backgroundImage:(i)=>
//     })

