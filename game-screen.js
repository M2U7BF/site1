const GameScreen = {
  data() {
    return {
      temperature: 37,
    };
  },
  methods: {
    touchTap() {
      this.temperature++;
      if (this.temperature > 45) {
        this.temperature = 30;
      }
      Utils.playSound('sound/tap.mp3');
    }
  },
  template: `
      <div id="game-screen">
        <div id="hud">
          <div style="
            width:400px;
            height:200px;
          "
          class="block speech-bubble_container">
            <img src="your-image.jpg" alt="画像" class="image">
            <div class="text">ここに文字を配置</div>
          吹き出し</div>
          <div id="thermometer">🌡️ 温度: {{ temperature }}°C</div>
          <button @click="touchTap">蛇口を触る</button>
        </div>
        <div id="bath-image">ここに浴槽の絵がくる</div>
      </div>
    `
};
