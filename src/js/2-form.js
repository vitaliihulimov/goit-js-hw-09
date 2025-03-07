const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', inputChange);
form.addEventListener('submit', handleSubmit);

function inputChange(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.email.value = parsedData.email || '';
    form.message.value = parsedData.message || '';

    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
}
populateForm();

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Будь ласка, заповніть усі поля.');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}
