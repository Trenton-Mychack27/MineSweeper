const myButtons = document.querySelectorAll('.board .myButton');

myButtons.forEach(myButton => {
    myButton.addEventListener('click', function() {
        alert('Button clicked');
    });
});
