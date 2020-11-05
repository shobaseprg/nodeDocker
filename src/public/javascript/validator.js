const checkForm = (e) => {
  const nameValue = document.getElementById("NameForm").value;
  const passwordValue = document.getElementById("PasswordForm").value;
  const confirmPasswordValue = document.getElementById("confirmPasswordForm").value;
    if (!(nameValue) || !(passwordValue) || !(confirmPasswordValue)) {
    console.log('error');
    }
}
