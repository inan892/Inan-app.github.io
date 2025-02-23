window.addEventListener('load', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        // Eğer kullanıcı giriş yaptıysa, hoş geldiniz mesajı göster
        document.getElementById('welcomeMessage').textContent = `Hoş geldiniz, ${loggedInUser}!`;

        // Operatör kontrolü
        if (loggedInUser === "uras" || loggedInUser === "inan") {
            document.getElementById('assignment1').contentEditable = true;
            document.getElementById('assignment2').contentEditable = true;
            document.getElementById('assignment3').contentEditable = true;
        }
    } else {
        // Eğer giriş yapılmadıysa, giriş sayfasına yönlendir
        window.location.href = 'index.html';
    }
});
// Gece modu butonunu seç
const nightModeButton = document.getElementById('nightModeButton');

// Gece modunu başlatmak ve durdurmak için gerekli işlev
nightModeButton.addEventListener('click', function() {
    document.body.classList.toggle('night-mode'); // Gece modunu aç veya kapat
});
