<template>
  <v-container>
    <v-spacer style="height: 75px;"></v-spacer>
    <v-row class="text-center">
      <v-col>
        <h1>Hey! So glad you're here and I hope you enjoy everything on my site!</h1>
        <p>
          What do you even put on a home page? I really don't know, so please enjoy 
          my little "about me" section that I asked ChatGPT to write for me. Also, 
          please take a look at my blog & games sections to keep up to date with the 
          things I'm working on. Feel free to throw any new ideas my way! Thanks!
        </p>
      </v-col>
    </v-row>
    <v-spacer style="height: 75px;"></v-spacer>
    <v-row class="text-center">
      <v-col cols="6">
        <v-img
          :src="require('../assets/Aimee.jpg')"
          class="my-3"
          contain
          height="500"
        />
      </v-col>
      <v-col cols="6" class="mb-4">
        <h1>About Me</h1>
          <p>Welcome to my world of technology, creativity, and faith! I'm Aimee Nissley, a Full Stack Developer hailing from Northern Virginia. Let me take you on a journey through my life and interests.</p>
          <h3>Education and Passion for Programming</h3>
          <p>With a master's degree under my belt, I embarked on a career in software development. Growing up with both of my parents as software engineers, it's safe to say that coding runs in my blood. My love for programming ignited during a high school computer science class, where I found myself creating video games and falling head over heels for the world of coding.</p>
          <h3>Life Beyond the Screen</h3>
          <p>When I'm not immersed in lines of code, you'll find me enjoying life's simple pleasures. I'm an avid volleyball and pickleball player, always up for a friendly match with friends. Recently, I've taken up knitting, finding peace in creating beautiful things with my own hands.</p>
          <h3>Adventures and Travel</h3>
          <p>One of the highlights of my life was exploring the enchanting streets of Venice, Italy, during a memorable European trip with my family. It's a place that holds a special spot in my heart.</p>
          <h3>Faith and Giving Back</h3>
          <p>My faith is a cornerstone of my life, and I'm passionate about making it my own. I devote my time volunteering at my church, working with kids and youth ministry.</p>
          <h3>Goals and Aspirations</h3>
          <p>I have big dreams and this website is a step towards achieving them. Join me on this journey of growth, learning, and spreading positivity.</p>
          <h3>Favorites and Fun Facts</h3>
          <p>I have a soft spot for Christian fiction books, rom-coms, and adventure movies. My music taste leans towards country. While I don't have any pets of my own, I adore tigers and have a particular fondness for them. And here's a quirky tidbit - I have a whopping 10, almost 11, sister-in-laws!</p>
          <h3>A Message from Me</h3>
          <p>Remember, life is about taking things one step at a time, and I believe that love and faith can move mountains. As you explore my website, I hope you find inspiration, joy, and a sense of community.</p>
          <p>Thank you for visiting, and always remember: "Love your neighbor."</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>
