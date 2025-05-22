function sendEnquiry() {
  try {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var selection = document.getElementById("selection").value;
    var accepted = document.getElementById("accept").checked;

    // Bilgileri başka bir HTML sayfasına göndermek için URL parametrelerini kullanarak yönlendirme yapalım
    var redirectUrl = "bilgiler.html" + "?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message) + "&gender=" + encodeURIComponent(gender ? gender.value : "") + "&selection=" + encodeURIComponent(selection) + "&accepted=" + accepted;
    
    window.location.href = redirectUrl;
  } catch (error) {
    console.error("Hata: ", error);
  }
}