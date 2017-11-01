document.getElementById('contact_form').onclick = contacForm
function contacForm () {
		var Name = document.getElementsByTagName('input')[0].value/*this checks back to the form above */
		var Email = document.getElementsByTagName('input')[1].value
		var Message = document.getElementsByTagName('input')[2].value

		var regexJan = form(Email) /*this runs hasNumber function*/
		if (Email === regex){
			alert ("Thank you for contacting me"//put an alert sign on 
		} else {
			alert("Please write a message")
		}
	}
	function form (x) { /*check if 'Input username' has a number, if no number, false*/
		 var regex = new "@" // "" checks if value within ""is available
        return regex.test(Email);
	}

