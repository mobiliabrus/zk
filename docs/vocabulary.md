## Today's word

<v-dict-today></v-dict-today>

## Words

<div>
  <div v-for="word in vocabulary" style="margin-bottom: 1rem;">
    <v-dict :word="word" :show-origin="true" :show-meanings="true"></v-dict>
  </div>
</div>
