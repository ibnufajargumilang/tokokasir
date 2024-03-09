<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kasir Toko | FlamboyanStore</title>
    <link rel="icon" href="icon.png" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <section style="position: relative; height: 100vh;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <div class="card card-form">
                <div id="statusLogin"></div>
                <div style="text-align: center; margin-bottom: 1rem;">
                    <img src="icon.png" alt="Icon Toko" />
                    <h1 style="font-size: 1.5rem; font-weight: normal;">KasirToko</h1>
                </div>
                <form id="gotoPanel">
                    <div class="form-group">
                        <label for="username">Masukkan Username</label>
                        <input type="username" id="username" name="username" autocomplete="no">
                        <div class="label-failed" id="check-un"></div>
                    </div>
                    <div class="form-group">
                        <label for="password">Masukkan Password</label>
                        <input type="password" id="password" name="password">
                        <div class="label-failed" id="check-pw"></div>
                    </div>
                    <div class="form-group d-grid">
                        <button type="submit" id="login" name="login">Masuk</button>
                        <button type="reset" id="reset" name="reset">Reset</button>
                    </div>

                </form>
            </div>
        </div>
        <div style="position: absolute; bottom: 0; left: 50%; transform: translate(-50%, -50%);">
            <footer>
                @KasirToko V.1
            </footer>
        </div>
    </section>
    <script src="assets/js/login.js"></script>
</body>

</html>