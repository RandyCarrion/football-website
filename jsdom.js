document.getElementById('submitButton').onclick = contactForm
function contactForm () {
		var Name = document.getElementsByTagName('input')[0].value/*this checks back to the form above */
		var Email = document.getElementsByTagName('input')[1].value
		var Message = document.getElementsByTagName('input')[2].value

		var y = msg (message)
		var x = form(Email) /*this runs hasNumber function*/
		if (x && y) {
			alert ("Thank you for contacting me")//put an alert sign on 
		 } else if (!x && y){
		 	alert("Invalid Email Address")
		 } else if (x && !y) {
		 	alert("Message field cannot be empty")
		 } else (alert("You are a robot"))
		
	
	function form (Email) { /*check if 'Input username' has a number, if no number, false*/
		 var regex = /\@/ // "" checks if value within ""is available
        return regex.test(Email);}
	function msg (message) { //new function to call alert if no msg written
		var piet = /[a-zA-Z]+\s+[a-zA-Z]+/g; //msg has to have a text within it 
		return piet.test(message);
	
	}
}