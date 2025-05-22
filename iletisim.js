function sendEnquiry() {
    try {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        var gender = document.querySelector('input[name="gender"]:checked');
        var genderValue = gender ? gender.value : "";

        var accepted = document.getElementById("accept").checked;
        var selected = document.getElementById("select").value;

        var redirectUrl = "bilgiler.html" + "?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&gender=" + encodeURIComponent(genderValue) + "&accepted=" + accepted + "&selected=" + encodeURIComponent(selected);

        window.location.href = redirectUrl;
    } catch (error) {
        console.error("Hata: ", error);
    }
}

function bilgiSil() {
    try {
        // Form elementini alın
        var form = document.getElementById("myForm");

        // Formu sıfırla
        form.reset();
    } catch (error) {
        console.error("Hata: ", error);
    }
}