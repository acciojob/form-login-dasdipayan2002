function getFormvalue() {
    //Write your code here
	document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    alert(firstName + ' ' + lastName);
});

}
