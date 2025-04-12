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
           witdth="800" height="650"
           style="
           position:absolute;
           top:0px;
           left:0px;
           ">

          <div class="text"
           style="
           position:absolute;
           top:100px;
           left:100px;
           width:200px;
           text-align: start;
           ">{{ babbleText }}</div>

          <div id="thermometer"
          style="
           position:absolute;
           top:600px;
           left:900px;
           text-align: start;
           ">
          温度: {{ temperature }}°C
          </div>

          <button @click="touchTap"
          style="
           position:absolute;
           top:300px;
           left:1100px;
           text-align: start;
           ">蛇口をひねる</button>
        </div>
        <div id="bath-image">ここに浴槽の絵がくる</div>
      </div>
    `
};
