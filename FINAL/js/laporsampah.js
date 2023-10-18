 document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Mencegah pengiriman form secara default

      // Ambil nilai dari input
      const namaLengkap = document.getElementById("fname").value;
      const alamat = document.getElementById("alamat").value;
      const noTelp = document.getElementById("telp").value;
      const catatan = document.getElementById("catatan").value;

      // Validasi
      if (!namaLengkap || !alamat || !noTelp || !catatan) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Semua kolom harus diisi.",
        });
      } 
      else {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Form berhasil disubmit!",
        }).then(() => {
          form.reset(); 
        });
      }
    });
  });

