 document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("kirim-ke");
    const passwordInput = document.querySelector(".box-login input[type='password']");
    const loginButton = document.querySelector(".btn-masuk a");

    loginButton.addEventListener("click", function(event) {
      event.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value;

      if (email === "" || password === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Harap isi email dan kata sandi.",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Selamat!",
          text: "Anda berhasil masuk!",
        }).then(() => {
          window.location.href = "dashboard.html";
        });
      }
    });
  });
