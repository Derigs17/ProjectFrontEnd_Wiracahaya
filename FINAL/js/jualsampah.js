 document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Mencegah pengiriman form secara default

      // Ambil nilai dari input
      const namaLengkap = document.getElementById("fname").value;
      const alamat = document.getElementById("alamat").value;
      const noTelp = document.getElementById("telp").value;
      const lokasi = document.getElementById("lokasi").value;
      const sampah = document.getElementById("sampah").value;
      const jadwal = document.getElementById("jadwal").value;
      const catatan = document.getElementById("catatan").value;

      // Validasi
      if (!namaLengkap || !alamat || !noTelp || lokasi === "lokasi0" || sampah === "sampah0" || jadwal === "jadwal0") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Harap isi semua kolom dengan benar.",
        });
      } else {
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

