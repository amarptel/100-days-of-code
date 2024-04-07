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


// Making navbar translucent on scroll.
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.navbar').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = 1
            return opacity;
        }
    });
});