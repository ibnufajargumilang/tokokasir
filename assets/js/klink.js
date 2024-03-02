document.addEventListener('click', function (event) {
  if (event.target && event.target.id == 'halamanMenu') {
    window.location.href = './menu.html';
  }
  if (event.target && event.target.id == 'informasiProgram') {
    window.location.href = 'informasi.html';
  }
  if (event.target && event.target.id == 'keluarProgram') {
    window.location.href = './';
  }
});
