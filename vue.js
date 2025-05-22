new Vue({
    el: '#app',
    data: {
        name: '',
        email: '',
        gender: '',
        accepted: false,
        selected: ''
    },
    methods: {
        sendEnquiry2() {
            try {
                const redirectUrl = "bilgilervue.html" + "?name=" + encodeURIComponent(this.name) +
                                     "&email=" + encodeURIComponent(this.email) +
                                     "&gender=" + encodeURIComponent(this.gender) +
                                     "&accepted=" + this.accepted +
                                     "&selected=" + encodeURIComponent(this.selected);
                window.location.href = redirectUrl;
            } catch (error) {
                console.error("Hata: ", error);
            }
        }
    }
});