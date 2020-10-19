Vue.component('round-detail', {
    data() {
        return {
            
        }
    },
    props: {
        'number': {
            type: Number,
            default: 0
        },
        'winner': {
            type: String,
            default: ''
        }
    },
    template: '#round-detail',
});

const app = new Vue({
    el: '#app',
    data() {
        return {
            choice: null,
            randomNumber: null,
            round: 0,
            playerScore: 0,
            compScore: 0,
            feedback: false,
            playerWon: null,
            rounds: []
        }   
    },
    methods: {
        guess() {
            ++this.round;
            if (this.randomNumber == this.choice) {
                this.playerScore++;
                this.playerWon = true;
                winner = 'Player';
            } else {
                this.compScore++;
                this.playerWon = false;
                winner = 'Dealer'
            }
            this.feedback = true;

            // Add Round Detail to History
            this.rounds.push({
                number: this.round,
                winner: winner,
                choice: this.choice,
                actual: this.randomNumber
            });
        },
        getRandomNumber() {
            return Math.floor(Math.random() * 10) + 1;
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