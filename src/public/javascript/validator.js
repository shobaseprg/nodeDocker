const checkForm = (e) => {
  const nameValue = document.getElementById("NameForm").value;
  const mailValue = document.getElementById("EmailForm").value;
  const passwordValue = document.getElementById("PasswordForm").value;
  const confirmPasswordValue = document.getElementById("confirmPasswordForm").value;
  const btn = document.getElementById("btn");
  let cancel = "off";
    if (!(nameValue)) {
      document.getElementById('error-name-null').classList.remove("d-none");
      cancel = "on";

    }
    if (!(mailValue)) {
      console.log('error-mail-null');
    }
    if (!(passwordValue)) {
      console.log('error-password-null');
    }
    if (!(passwordValue === confirmPasswordValue)) {
      console.log('error-password-diff');
    }
    if (cancel === "on"){
      return false;
    } else {
      return true;
    }
}
