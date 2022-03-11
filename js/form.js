

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');



const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // lettres, numeros, _ et  _
	name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras et spaces, accents.
	password: /^.{4,12}$/, // 4 a 12 digits.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telephone: /^\d{10,14}$/ // 7 - 14 numeros.
}

const champs = {
	user: false,
	name: false,
	password: false,
    email: false,
	telephone: false
}
const validerFormulaire = (e) =>{
    switch (e.target.name) {
		case "user":
        	validerChamp(expressions.user, e.target, 'user');
		break;

		case "name":
			validerChamp(expressions.name, e.target, 'name');
		break;

        case "email":
			validerChamp(expressions.email, e.target, 'email');
		break;

		case "telephone":
			validerChamp(expressions.telephone, e.target, 'telephone');
		break;

		case "password":
			validerChamp(expressions.password, e.target, 'password');
			validerPassword2();
		break;
		case "password2":
			validerPassword2();
		break;
		
	}
    };
 
    const validerChamp =(expression, input, champ) => {

        if(expression.test(input.value)){
            document.getElementById(`group_${champ}`).classList.remove('form_group_incorrect');
            document.getElementById(`group_${champ}`).classList.add('form_group_success');
            document.querySelector(`#group_${champ} .form_group_input i`).classList.remove('bi-x-circle');
            document.querySelector(`#group_${champ} .form_group_input i`).classList.add('bi-check-circle-fill');
            document.querySelector(`#group_${champ} .form_input_error`).classList.remove('form_input_error_active')
            champs[champ]=true;
        }
        else{
            document.getElementById(`group_${champ}`).classList.add('form_group_incorrect');
            document.getElementById(`group_${champ}`).classList.remove('form_group_success')
            document.querySelector(`#group_${champ} .form_group_input i`).classList.remove('bi-check-circle-fill');
            document.querySelector(`#group_${champ} .form_group_input i`).classList.add('bi-x-circle');
            document.querySelector(`#group_${champ} .form_input_error`).classList.add('form_input_error_active')
            champs[champ]=false;
        }

    }

    const validerPassword2 = () => {
        const inputPassword1 = document.getElementById('password');
        const inputPassword2 = document.getElementById('password2');
    
        if(inputPassword1.value !== inputPassword2.value){
            document.getElementById(`group_password2`).classList.add('form_group_incorrect');
            document.getElementById(`group_password2`).classList.remove('form_group_success');
            document.querySelector(`#group_password2 i`).classList.add('bi-x-circle');
            document.querySelector(`#group_password2 i`).classList.remove('bi-check-circle-fill');
            document.querySelector(`#group_password2 .form_input_error`).classList.add('form_input_error_active');
            champs['password'] = false;

        } else {
            document.getElementById(`group_password2`).classList.remove('form_group_incorrect');
            document.getElementById(`group_password2`).classList.add('form_group_success');
            document.querySelector(`#group_password2 i`).classList.remove('bi-x-circle');
            document.querySelector(`#group_password2 i`).classList.add('bi-check-circle-fill');
            document.querySelector(`#group_password2 .form_input_error`).classList.remove('form_input_error_active');
            champs['password'] = true;
        }
    }


inputs.forEach((input)=>{
    input.addEventListener('keyup', validerFormulaire )
    input.addEventListener('blur', validerFormulaire )

});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const terms = document.getElementById('terms');
        if(champs.user && champs.name && champs.password && champs.email && champs.telephone && terms.checked ){
        
        form.reset();
        

        document.getElementById('form_message_correct').classList.add('form_message_correct_active');
     
     setTimeout(() => {
         document.getElementById('form_message_correct').classList.remove('form_message_correct_active');
        }, 5000);

        document.querySelectorAll('.form_group_success').forEach((icono) => {
        icono.classList.remove('form_group_success');
        document.getElementById('form_message').classList.remove('form_message_active');

        });
    } 
 
 else {
     document.getElementById('form_message').classList.add('form_message_active');
 }
});

