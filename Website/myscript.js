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



// Make side borders around about me content disappear upon scrolling a certain 
// number of pixels, so they do not interfere with the navbar.  
window.onscroll = function() {
    var verLeft = document.getElementById('verticalLeft');
    var verRight = document.getElementById('verticalRight');
    if ( window.scrollY > 1000) {
        verLeft.style.borderStyle = "none"; 
        verRight.style.borderStyle = "none"; 
    }
    else {
        verLeft.style.borderLeft = "6px solid #76ABAE";
        verRight.style.borderRight = "6px solid #76ABAE";
    }
};