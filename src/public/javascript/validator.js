const checkForm = (e) => {
  const nameValue = document.getElementById("NameForm").value;
  const mailValue = document.getElementById("EmailForm").value;
  const passwordValue = document.getElementById("PasswordForm").value;
  const confirmPasswordValue = document.getElementById("confirmPasswordForm").value;
  const btn = document.getElementById("btn");
  let cancel = "off";

  document.getElementById('error-name-null').classList.add("d-none");
  document.getElementById('error-mail-null').classList.add("d-none");
  document.getElementById('error-password-null').classList.add("d-none");
  document.getElementById('differencePassword').classList.add("d-none");
  document.getElementById('error-password-under7').classList.add("d-none");


    // 名前空欄
    if (!(nameValue)) {
      document.getElementById('error-name-null').classList.remove("d-none");
      cancel = "on";
    }
    // メール空欄
    if (!(mailValue)) {
      document.getElementById('error-mail-null').classList.remove("d-none");
      cancel = "on";
    }
    // パスワード空欄
    if (!(passwordValue)) {
      document.getElementById('error-password-null').classList.remove("d-none");
      cancel = "on";
    } else {
      // パスワード７文字以下
      if ((passwordValue.length < 7)) {
        document.getElementById('error-password-under7').classList.remove("d-none");
        cancel = "on";
      }
    }
    // パスワード不一致
    if (!(passwordValue === confirmPasswordValue)) {
      document.getElementById('differencePassword').classList.remove("d-none");
      cancel = "on";    }
    if (cancel === "on"){
      return false;
    } else {
      return true;
    }
}
