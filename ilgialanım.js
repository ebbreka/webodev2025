function searchMovie() {
    var movieName = document.getElementById("movieNameInput").value;

    // Film adı boşsa kullanıcıya uyarı göster ve fonksiyonu sonlandır
    if (!movieName) {
        alert("Lütfen bir film adı girin.");
        return;
    }

    var apiKey = "85d3c7957db387abf6cd6401c2bddd1d"; // TMDB'den alınan API anahtarı
    var apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + encodeURIComponent(movieName);

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('API isteği başarısız: ' + response.status);
        }
        return response.json();
    })
    .then(data => handleResponse(data))
    .catch(error => console.error('Hata:', error.message)); // Hata mesajını yazdır
}

// Bu fonksiyon API yanıtını işler
function handleResponse(data) {
    var movieInfoResult = document.getElementById("movieInfoResult");
    if (data.results && data.results.length > 0) {
        var movie = data.results[0];
        movieInfoResult.innerHTML = "<h2>" + movie.title + "</h2>" +
            "<p>Vizyon Tarihi: " + movie.release_date + "</p>" +
            "<p>Ortalama Puan: " + movie.vote_average + "</p>" +
            "<p>Açıklama: " + movie.overview + "</p>"  ;
            
            
    } else {
        movieInfoResult.innerHTML = "<p>Film bulunamadı.</p>";
    }
}