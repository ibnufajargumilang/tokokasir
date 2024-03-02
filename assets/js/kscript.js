document.getElementById('username').addEventListener('input', function () {
  let username = document.getElementById('username').value;
  if (username.includes(' ')) {
    document.getElementById('check-un').innerHTML = 'Terdapat Sepasi pada Username';
  } else {
    document.getElementById('check-un').innerHTML = '';
  }
});
document.getElementById('password').addEventListener('input', function () {
  let password = document.getElementById('password').value;
  if (password.includes(' ')) {
    document.getElementById('check-pw').innerHTML = 'Terdapat Sepasai pada Password';
  } else {
    document.getElementById('check-pw').innerHTML = '';
  }
});
document.getElementById('gotoPanel').addEventListener('submit', function (event) {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (username.trim() == '') {
    document.getElementById('check-un').innerHTML = 'Username tidak Boleh Kosong';
    return;
  } else {
    document.getElementById('check-un').innerHTML = '';
  }

  if (password.trim() == '') {
    document.getElementById('check-pw').innerHTML = 'Password tidak Boleh Kosong';
    return;
  } else {
    document.getElementById('check-pw').innerHTML = '';
  }

  if (username === 'admin' && password === 'admin123') {
    document.getElementById('statusLogin').innerHTML = 'Berhasil Login';
    statusLogin.style.display = 'block';
    statusLogin.style.backgroundColor = 'green';
    setTimeout(function () {
      statusLogin.style.display = 'none';
    }, 3000);
  } else {
    document.getElementById('statusLogin').innerHTML = 'Username atau Password yang dimasukkan Salah!';
    statusLogin.style.display = 'block';
    setTimeout(function () {
      statusLogin.style.display = 'none';
    }, 3000);
  }
});
