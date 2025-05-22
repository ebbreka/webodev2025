new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            email: '',
            gender: '',
            accepted: false,
            selected: ''
        }
    },

    methods: {
        sendEnquiry() {
            try {
                const data = {
                    name: this.formData.name,
                    email: this.formData.email,
                    gender: this.formData.gender,
                    accepted: this.formData.accepted,
                    selected: this.formData.selected
                };

                // Axios kullanarak form verilerini bir API'ye gönderme
                axios.post('API_URL', data)
                    .then(response => {
                        console.log(response.data);
                        // İşlem başarılıysa başka bir sayfaya yönlendirme
                        window.location.href = 'bilgiler.html';
                    })
                    .catch(error => {
                        console.error("Hata: ", error);
                        // Hata durumunda kullanıcıya bilgi verme
                        alert("Form gönderimi sırasında bir hata oluştu.");
                    });
            } catch (error) {
                console.error("Hata: ", error);
                alert("Form gönderimi sırasında bir hata oluştu.");
            }
        },
        resetForm() {
            this.formData.name = '';
            this.formData.email = '';
            this.formData.gender = '';
            this.formData.accepted = false;
            this.formData.selected = '';
        }
    }
});