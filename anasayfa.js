window.addEventListener('load', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        // Eğer kullanıcı giriş yaptıysa, hoş geldiniz mesajı göster
        document.getElementById('welcomeMessage').textContent = `Hoş geldiniz, ${loggedInUser}!`;
    } else {
        // Eğer giriş yapılmadıysa, giriş sayfasına yönlendir
        window.location.href = 'login.html';
    }
});
