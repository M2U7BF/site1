const TitleScreen = {
  methods: {
    start() {
      Utils.playSound('sound/bath_door.mp3');
      this.$emit('start');
    }
  },
  template: `
    <div>
      <h1>風呂</h1>
      <button @click="start">スタート</button>
    </div>  `
};
