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
          <div id="thermometer">🌡️ 温度: {{ temperature }}°C</div>
          <button @click="touchTap">蛇口を触る</button>
        </div>
        <div id="bath-image">ここに浴槽の絵がくる</div>
      </div>
    `
  };
  