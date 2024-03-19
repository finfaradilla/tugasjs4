function hitungGaji() {
    // Mengambil nilai input dari form
    const nama = document.getElementById('nama').value;
    const jabatan = document.getElementById('jabatan').value;
    const status = document.getElementById('status').value;

    // Menghitung gaji pokok berdasarkan jabatan
    let gajiPokok;
    if (jabatan === 'Manager') {
        gajiPokok = 15000000; // 15 juta
    } else if (jabatan === 'Asisten Manager') {
        gajiPokok = 10000000; // 10 juta
    } else {
        gajiPokok = 5000000; // 5 juta (Staff)
    }

    // Menghitung tunjangan jabatan (15% dari gaji pokok)
    const tunjanganJabatan = 0.15 * gajiPokok;

    // Menghitung tunjangan BPJS (10% dari gaji pokok)
    const bpjs = 0.1 * gajiPokok;

    // Menghitung tunjangan keluarga (20% dari gaji pokok jika menikah)
    const tunjanganKeluarga = (status === 'Menikah') ? 0.2 * gajiPokok : 0;

    // Menghitung total gaji
    const totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    // Menampilkan hasil menggunakan SweetAlert dalam bentuk tabel
    Swal.fire({
        title: `Data Pegawai`,
        icon: 'success',
        width: '800px',
        html: `
        <table class="table">
          <thead>
            <tr>
              <th>Nama Pegawai</th>
              <th>Jabatan</th>
              <th>Status</th>
              <th>Total Gaji</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${nama}</td>
              <td>${jabatan}</td>
              <td>${status}</td>
              <td>${totalGaji.toLocaleString('id-ID')}</td>
            </tr>
          </tbody>
        </table>
      `,
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
    });
}