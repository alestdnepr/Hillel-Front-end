
const myButton = document.getElementById('myButton');
const myContainer = document.getElementById('myContainer');

myButton.addEventListener('click', function () {
  if (myContainer.style.display === 'none') {
    myContainer.style.display = 'block';
  } else {
    myContainer.style.display = 'none';
  }
});
