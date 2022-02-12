<v-dict-today></v-dict-today>

<div>
  <div v-for="word in vocabulary">
    <v-dict :word="word"></v-dict>
  </div>
</div>
