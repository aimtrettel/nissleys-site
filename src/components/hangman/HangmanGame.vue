<template>
    <v-container style="background-color: var(--highlight)">
      <v-spacer style="height: 20px;"></v-spacer>
      <v-row class="text-center">
        <v-col>
            <h2>Select letters from the letter bank to solve the word.</h2>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="6">
            <v-img :src="require('../../assets/hangman/hangman-' + currentImage + '.png')" />
            <p><b>Wrong guesses left: <u style="color: crimson">{{ this.fails }}</u></b></p>
        </v-col>
        <v-col cols="6">
            <v-spacer style="height: 70px;"></v-spacer>
            <div class="pa-5" style="border: 2px solid var(--main-green);">
                <h3>Letter Bank:</h3>
                <v-spacer style="height: 50px;"></v-spacer>
                <div v-if="!gameOver">
                    <v-btn
                      :disabled="guessedLetters.includes(letter)"
                      v-for="(letter, index) in letters"
                      @click="handleClick(letter)"
                      class="letter"
                      :key="index">
                      {{ letter }}
                    </v-btn>
                </div>
                <div v-else>
                    <p>{{ this.message }} The word was {{ this.word }}</p>
                    <router-link to="/hangman/main" tag="button" >
                      <v-btn>Play Again</v-btn>
                    </router-link>
                </div>
            </div>
        </v-col>
      </v-row>
      <v-spacer style="height: 50px;"></v-spacer>
      <v-row class="text-center">
        <v-col>
            <span style="font-size: 60px;">{{ displayedS }}</span>
        </v-col>
      </v-row>
      <v-spacer style="height: 50px;"></v-spacer>
      <v-dialog
        v-model="dialog"
        width="auto"
      >
        <v-card>
          <v-card-text>
            Are you ready to play?
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="setup()">Yes!</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'HangmanGame',

      data() {
        return {
            dialog: true,
            word: this.$route.params.word,
            currentImage: 0,
            letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            guessedLetters: [],
            w: [],
            s: [],
            displayedS: "",
            fails: 6,
            gameOver: false,
            message: ""
        }
      },
      methods: {
        setup() {
          this.dialog = false
          for (let i = 0; i < this.word.length; i++) {
            this.w.push(this.word.charAt(i))
            this.s.push("_")
          }
          this.displayedS = this.s.join(" ")
        },
        handleClick(letter) {
          this.guessedLetters.push(letter);
          if (this.word.includes(letter)) {
            for (let i = 0; i < this.word.length; i++) {
              if (this.w[i] == letter) {
                this.s[i] = letter
              }
            }
            this.displayedS = this.s.join(" ")
            if (!this.s.includes("_")) {
              this.gameOver = true;
              this.message = "Congrats! You guessed it!"
            }
          } else {
            this.fails--
            this.currentImage++
            if (this.fails <= 0) {
              this.gameOver = true;
              this.message = "Game over..."
            }
          }
        }
     }
    }
</script>

<style>
  .letter {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 5px;
  border: none;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: 24px;
  cursor: pointer;
}

.letter:hover {
  background-color: #aaa;
}

</style>
  