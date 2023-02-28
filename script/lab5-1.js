window.addEventListener('load', () => {
  document.getElementById("mainForm").addEventListener('submit', submitForm);

  document.getElementsByName('title')[0].addEventListener('keydown', () => {
    document.getElementsByName("title")[0].classList.remove('blank');
  });

  document.getElementsByName('description')[0].addEventListener('keydown', () => {
    document.getElementsByName("description")[0].classList.remove('blank');
  });

  document.getElementsByName('accept')[0].addEventListener('click', () => {
    document.getElementsByName("accept")[0].classList.remove('blank');
  });
});

function submitForm() {
  if ((document.getElementsByName("accept")[0].checked) &&
    (document.getElementsByName("title")[0].value && document.getElementsByName("description")[0].value)) {
    document.getElementsByName("accept")[0].classList.remove('blank');
    document.getElementsByName("title")[0].classList.remove('blank');
    document.getElementsByName("description")[0].classList.remove('blank');
  } else {
    event.preventDefault();
    document.getElementsByName("accept")[0].classList.add('blank');
    document.getElementsByName("title")[0].classList.add('blank');
    document.getElementsByName("description")[0].classList.add('blank');
  }
}
