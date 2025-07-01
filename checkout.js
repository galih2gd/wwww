(() => {
  const form = document.getElementById('orderForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
    form.classList.add('was-validated');

    const itemName = document.getElementById('itemName').value.trim();
    const quantity = parseInt(document.getElementById('quantity').value);
    const customerName = document.getElementById('customerName').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Simple confirmation message
    const confirmationMessage = `
        Terima kasih, ${customerName}!<br />
        Pesanan Anda untuk ${quantity} buah "${itemName}" telah diterima.<br />
        Barang akan dikirim ke alamat berikut:<br />
        ${address}<br />
        Kami akan menghubungi Anda di nomor telepon: ${phone}
    `;

    document.getElementById('confirmation').innerHTML = confirmationMessage;
    document.getElementById('confirmation').style.display = 'block';

    // Optionally, reset the form
    form.reset();
  });
})();

document.getElementById('promoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const kode = document.getElementById('promoCode').value.trim().toUpperCase();
  const promoRow = document.getElementById('promoRow');
  const totalHarga = document.getElementById('totalHarga');

  if (kode === 'KUPONKOPI') {
    promoRow.classList.remove('d-none');
    totalHarga.textContent = 'Rp 300.000';
  } else {
    promoRow.classList.add('d-none');
    totalHarga.textContent = 'Rp 375.000';
  }
});
