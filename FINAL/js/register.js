 document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Mencegah pengiriman form secara default

      // Ambil nilai dari input
      const email = document.getElementById("kirim-ke").value;
      const username = document.querySelector(".box-register input[type='text']").value;
      const password = document.querySelector(".Konfirmasi-pw input[type='password']").value;
      const konfirmasiPassword = document.querySelector(".Konfirmasi-pw input[type='password']:last-child").value;

      // Validasi
      if (!email || !username || !password || !konfirmasiPassword) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Semua kolom harus diisi.",
        });
      } else if (password !== konfirmasiPassword) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Kata sandi dan konfirmasi harus sama.",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Selamat!",
          text: "Akun berhasil dibuat.",
        }).then(() => {
          window.location.href = "login.html";
        });
      }
    });
  });
