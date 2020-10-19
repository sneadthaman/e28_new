const app = new Vue({
    el: '#app',
    data: {
        choice: null,
        randomNumber: null,
        round: 0,
        playerScore: 0,
        compScore: 0,
        feedback: false,
        playerWon: null
    },
    methods: {
        guess() {
            ++this.round;
            if (this.randomNumber == this.choice) {
                this.playerScore++;
                this.playerWon = true;
            } else {
                this.compScore++;
                this.playerWon = false;
            }
            this.feedback = true;
        },
        getRandomNumber() {
            return Math.floor(Math.random() * 10);
        },
        reset() {
            this.choice = '';
            this.randomNumber = this.getRandomNumber();
            this.feedback = false;
        }
    },
    mounted() {
        this.randomNumber = this.getRandomNumber();
    }
});