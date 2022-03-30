import throttle from 'lodash.throttle';

const formData = {
    email: "",
    message: "",
};

const STOREGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');


form.addEventListener('submit', onFormSnbmit);
form.addEventListener('input', throttle(onFormInput, 500));

saveText();

function onFormInput(el){
    formData[el.target.name] = el.target.value;
    
    localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));
}

function onFormSnbmit(el) {
    el.preventDefault();

    console.log(localStorage.getItem(STOREGE_KEY));

    el.currentTarget.reset();
    localStorage.removeItem(STOREGE_KEY);
    formData.message = "";
    formData.email = "";
    
    
    }

function saveText() {
    const messageText = JSON.parse(localStorage.getItem(STOREGE_KEY));
    
    if (messageText) {
        formData.message = form.message.value = messageText.message;
        formData.email = form.email.value = messageText.email;
    }
}

