function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if(value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if(value <= 0) {
                this.winner = 'player';
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
        },
        attackMonster() {
            this.currentRound++;
            const value = generateRandomValue(5, 12);
            this.monsterHealth = Math.max(0, this.monsterHealth - value);
            this.addLogMessage('player', 'attack', value);
            this.attackPlayer();
        },
        attackPlayer() {
            const value = generateRandomValue(8, 15);
            this.playerHealth = Math.max(0, this.playerHealth - value);
            this.addLogMessage('monster', 'attack', value);
        },
        specialAttackMonster() {
            this.currentRound++;
            const value = generateRandomValue(10, 25);
            this.monsterHealth = Math.max(0, this.monsterHealth - value);
            this.addLogMessage('player', 'specialAttack', value);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const value = generateRandomValue(8, 20);
            this.playerHealth = Math.min(100, this.playerHealth + value);
            this.addLogMessage('player', 'heal', value);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({who, what, value})
        }
    }
}).mount('#game');