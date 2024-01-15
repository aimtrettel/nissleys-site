<template>
    <v-container style="background-color: var(--highlight)">
      <v-row class="text-center">
        <v-col cols="6" style="text-align: right;">
          <v-spacer style="height: 90px;"></v-spacer>
          <h1 class="display-2 font-weight-bold mb-3">
            Welcome to 
          </h1>
        </v-col>
        <v-col cols="6">
            <v-img
            :src="require('../../assets/HangmanLogo.png')"
            class="my-3"
            contain
            height="200"
            style="margin-left: -8rem;"
            />
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <div>
            <p>Would you like to play a 1 player or 2 player game?</p>
            <v-btn @click="toggle1">1 Player</v-btn>
            <v-btn @click="toggle2">2 Player</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-spacer style="height: 50px;"></v-spacer>
      <v-row class="text-center">
        <v-col>
          <div v-if="show1">
            <h5><b>One Player Game Instructions:</b></h5>
            <p>
              First, you will select which level of difficulty you want (Easy, Medium, or Hard).
              Next, the game will begin with a randomly chosen word from the difficulty level that you selected.
              Your goal is to solve the word by guessing letters, which you can either type or select from the Letter Bank.
              But be careful! If you guess a letter that does not appear in the mystery word, then the hangman gains a body part.
              Once the hangman has all <b>6</b> body parts, the game will be over, and you'll have the option to try again or choose a different difficulty level.
              However, if you guess the word before the hangman has all his body parts, then you win! GOOD LUCK!
            </p>
            <v-btn @click="enterLevel('e')">Easy</v-btn>
            <v-btn @click="enterLevel('m')">Medium</v-btn>
            <v-btn @click="enterLevel('h')">Hard</v-btn>
          </div>
          <div v-if="show2">
            <h5><b>Two Player Game Instructions:</b></h5>
            <p>
              First, Player 1 will input their own word below. This will be the word that Player 2 must solve.
              Next, the game will begin with the chosen word.
              Player 2's goal is to solve the word by guessing letters, which you can either type or select from the Letter Bank.
              But be careful! If you guess a letter that does not appear in the mystery word, then the hangman gains a body part.
              Once the hangman has all <b>6</b> body parts, the game will be over, and you'll have the option to try again or choose a different difficulty level.
              However, if you guess the word before the hangman has all his body parts, then you win! GOOD LUCK!
            </p>
            <v-text-field 
              clearable 
              :rules="[rules.counter, rules.nonNumbers]" 
              label="Word to Guess"
              solo-inverted 
              counter="20"
              v-model="word"
              required/>
            <v-btn @click="setWord(word)">Submit</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-spacer style="height: 500px;"></v-spacer>
    </v-container>
  </template>
  
  <script>
    import JSON_DATA from "../../assets/hangman/words.json"
    export default {
      name: 'HangmanMain',

      data() {
        return {
          show1: false,
          show2: false,
          rules: {
            counter: v => v.length <= 20 || 'Max 20 characters',
            nonNumbers: v => /^[a-zA-Z]+$/.test(v) || 'Invalid word.'
          },
          words: JSON_DATA,
          word: ''
        }
      },
      methods: {
        toggle1() {
          this.show1 = !this.show1;
          this.show2 = false;
        },
        toggle2() {
          this.show1 = false;
          this.show2 = !this.show2;
        },
        enterLevel(level) {
          let list
          if (level == "e")
            list = this.words.easy
          else if (level == "m")
            list = this.words.medium
          else
            list = this.words.hard
          let num = Math.floor(Math.random() * list.length)
          let randomWord = list[num].toUpperCase().trim()
          this.setWord(randomWord)
        },
        setWord(wordToGuess) {
          wordToGuess = wordToGuess.toUpperCase()
          this.$router.push({name: 'hangmanGame', params: { word: wordToGuess } })
        }
      }
    }
  </script>
  