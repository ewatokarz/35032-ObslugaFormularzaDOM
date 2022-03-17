console.log("hey");

const submitForm = (event) => {
    event.preventDefault();

    let firstName = document.querySelector('[name="fname"]');
    let lasttName = document.querySelector('[name="lname"]');

    console.log(`Imie: ${firstName.value}, Nazwisko: ${lasttName.value}`);
}


let form = document.getElementById('form');

form.addEventListener('submit', submitForm);

console.log(form);