const datetimePicker = document.querySelector('#datetime-picker');

datetimePicker.addEventListener('input', () =>
  console.log(datetimePicker.value)
);
