document.getElementById('username').addEventListener('input', function () {
  let username = document.getElementById('username').value;
  if (username.includes(' ')) {
    document.getElementById('check-un').innerHTML = 'Terdapat Spasi pada Username';
  } else {
    document.getElementById('check-un').innerHTML = '';
  }
});

document.getElementById('password').addEventListener('input', function () {
  let password = document.getElementById('password').value;
  if (password.includes(' ')) {
    document.getElementById('check-pw').innerHTML = 'Terdapat Spasi pada Password';
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

  // Memulai permintaan AJAX untuk login
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'assets/php/login.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.success) {
        document.getElementById('statusLogin').innerHTML = 'Berhasil Login';
        statusLogin.style.display = 'block';
        statusLogin.style.backgroundColor = 'green';
        setTimeout(function () {
          statusLogin.style.display = 'none';
        }, 3000);

        // Menunda pengalihan ke halaman menu.php setelah 3 detik
        setTimeout(function () {
          window.location.href = 'menu.php';
        }, 3000);
      } else {
        document.getElementById('statusLogin').innerHTML = 'Username atau Password yang dimasukkan Salah!';
        statusLogin.style.display = 'block';
        setTimeout(function () {
          statusLogin.style.display = 'none';
        }, 3000);
      }
    }
  };
  xhr.send('username=' + username + '&password=' + password);
});
