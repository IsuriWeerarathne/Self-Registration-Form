const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
const dateOfBirth = document.getElementById('dateOfBirth');
const email = document.getElementById('email');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const conformPassword = document.getElementById('conformPassword');
const submit = document.getElementById('submit');
const check = document.getElementById('check');


/*form.addEventListener('check', e => {
    e.preventDefault();
	
	enable();
});*/

form.addEventListener('submit', e => {
    e.preventDefault();

    validFname();
	validSname();
	validEmail();
	validDate();
	validUsername();
	validPassword();
	validconformPassword();
	
});



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validFname = () => {
	const firstNameValue = firstName.value.trim();
	if(firstNameValue === '') {
        setError(firstName, 'First name is required');
    }else if(firstNameValue.length > 31){
		setError(firstName, 'Maximum length is only 30 characters');
	}else {
        setSuccess(firstName);
    }
}

const validSname = () => {
	const secondNameValue = secondName.value.trim();
	if(secondNameValue === '') {
        setError(secondName, 'Last name is required');
    }else if(secondNameValue.length > 31){
		setError(secondName, 'Maximum length is only 30 characters');
	}else {
        setSuccess(secondName);
    }
}

const validDate = () => {
	const dateOfBirthValue = dateOfBirth.value.trim();
	if(dateOfBirthValue === '') {
        setError(dateOfBirth, 'Date Of Birth is required');
    } else {
        ageCalculator();
		setSuccess(dateOfBirth);
		
    }
}

function ageCalculator(){
	 var userinputDOB = dateOfBirth.value;
	 var dob = new Date(userinputDOB); 	 
	 var month_diff = Date.now() - dob.getTime(); 
	 var age_dt = new Date(month_diff);   
	 var year = age_dt.getUTCFullYear();
	 var age = Math.abs(year - 1970); 
	 return document.getElementById("result").innerHTML = "Age is: " + age + " years. ";  
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validEmail = () => {
	const emailValue = email.value.trim();
	if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
}

const validUsername = () => {
	const userNameValue = userName.value.trim();
	var usernameValidation = userNameValue.toLowerCase();
	if(userNameValue === '') {
        setError(userName, 'Username is required');
    }else if(!(userNameValue==usernameValidation)){
        setError(userName, 'Use only lowercase letters');
	}else if(userNameValue.length >= 10){
		setError(userName, 'Maximum length is only 10 characters');
	}else if(!(userName.value.replace(/\s/g))){
        setError(userName, 'Please do not use spaces');
	}else {
        setSuccess(userName);
    }
}


const validPassword = () => {
	const passwordValue = password.value.trim();
	var passw = /(?=.*[a-z])||(?=.*[A-Z]).{6,15}/;
	if(passwordValue === '') {
        setError(password, 'Password is required');
    }else if(!(password.value.match(passw))){ 
		setError(password, 'should contain letters and at least one number and length should be between 6 to 15');
	} else {
        setSuccess(password);
    }
}

const validconformPassword = () => {
	const conformPasswordValue = conformPassword.value.trim();
	if(conformPasswordValue === '') {
        setError(conformPassword, 'Password re-entry is required');
    }else if(!(password.value == conformPassword.value)){ 
		setError(conformPassword, 'Password does not match with the previous one');
	}else {
        setSuccess(conformPassword);
    }
}

const enable = () => {
	if(check.checked){
		submit.removeAttribute("disabled");
		
	}else{
		submit.disabled="true";
	}
}





