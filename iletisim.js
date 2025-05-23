function sendEnquiry() {
    try {
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var gender = document.querySelector('input[name="gender"]:checked');
        var genderValue = gender ? gender.value : "";
        var accepted = document.getElementById("accept").checked;
        var selected = document.getElementById("select").value;

        // Boş alan kontrolü
        if (name === "" || email === "" || genderValue === "" || selected === "" || !accepted) {
            alert("Lütfen tüm alanları doldurup kabul kutucuğunu işaretleyin.");
            return;
        }

        var redirectUrl = "bilgiler.html" + "?name=" + encodeURIComponent(name)
            + "&email=" + encodeURIComponent(email)
            + "&gender=" + encodeURIComponent(genderValue)
            + "&accepted=" + accepted
            + "&selected=" + encodeURIComponent(selected);

        window.location.href = redirectUrl;
    } catch (error) {
        console.error("Hata: ", error);
    }
}
