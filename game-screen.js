const GameScreen = {
  data() {
    return {
      temperature: 37,
      babbleText: "さあ、お湯を入れてくれ。"
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
          <img
           src="image/game-backgroud.png"
           witdth="800" height="650">
          <div class="text"
           style="
           position:absolute;
           top:200px;
           left:250px;
           width:200px;
           text-align: start;
           ">{{ babbleText }}</div>
          <div id="thermometer">🌡️ 温度: {{ temperature }}°C</div>
          <button @click="touchTap">蛇口を触る</button>
        </div>
        <div id="bath-image">ここに浴槽の絵がくる</div>
      </div>
    `
};
