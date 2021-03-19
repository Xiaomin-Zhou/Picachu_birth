let string = `/*Ｏ(≧▽≦)Ｏ 皮卡皮卡~,我是皮卡丘，
 *下面是我诞生的过程~
 *你可以在右边调整我诞生的速度哦~
 *我的小主人是个萌妹子~
 *她给我选了一个肤色
 */
.skin{
    background-color: #ffcb00;
    // min-height: 60vw;
    min-width: 60vw;
    min-height:100%;
    position: relative;
}
/*准备一个 div 
 *用来画我的小鼻子
 */
.nose{
    width: 20px;
    height: 20px;
    z-index: 10;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
}
/*小鼻子下面的部分 
 *是一个小三角形
 */
.nose .triangle{
    border: 10px solid black;
    width: 0;
    height: 0;
    border-color: black transparent transparent transparent;
    position: absolute;
    left: 50%;
    top: 6px;
    transform: translateX(-50%);
}
/*绘制小鼻子上面的部分 
 */
.sector{
    position: absolute;
    width: 20px;
    height: 6px;
    border: 1px solid black;
    left: 50%;
    top: 0px;
    transform: translateX(-50%);
    border-radius: 15px 15px 0 0;
    background-color: black;
}
/*小鼻子画好了~
 *你看它像不像一颗小宝石
 *接下来小鼻子要动起来 
 */
.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 150ms infinite linear;
    cursor: pointer;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(10deg);
    }
    66%{
        transform: rotate(-10deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
/*现在摸摸我的小鼻子吧~
 * 要开始画我的眼睛啦~
 */
.eye{
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;  
    border-radius: 50%;
}
/*我的眼睛是由圆构成的~
 * 里面的也是~
 */
.eye::before{
    content: '';
    display: block;
    border: 3px solid #000;
    width: 23px;
    height: 23px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    animation: eyesMove 500ms infinite linear; 
}
/*眼睛里还要有光芒~
 */
.eye::after{
    content: '';
    display: block;
    border: 3px solid #000;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
    animation: eyesMove 500ms infinite linear; 
}
.eye.left{
    transform: translateX(-100px);  
}
.eye.right{
    transform: translateX(100px); 
}
/*作为一个萌物 眼睛要灵动~
 *快让我的眼睛动起来吧~
 */
@keyframes eyesMove{
    0%{
        transform: translateX(0px);
    }
    50%{
        transform: translateX(5px) translateY(5px);
    }
    100%{
        transform: translateX(0px);
    }
}
/*接下来是我的嘴巴~
 *我的嘴巴有点不容易
 *分为上下两个部分
 */
.mouth{
    width:200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
/*这是上面部分~
 *它要分成左和右~
 */
.upperLip{
    width: 80px;
    height: 38px;
    background: #ffcb00;
    border-bottom: 4px solid #000;
    position: absolute;
    z-index: 3;
}
.upperLip.left{   
    border-left: 2px solid #000;
    border-bottom-left-radius: 340px 180px;
    right: 50%;
    margin-right: 2px;
    transform: rotate(-30deg);
}
.upperLip.right{   
    border-right: 2px solid #000;
    border-bottom-right-radius: 340px 180px;
    left: 50%;
    margin-left: 2px;
    transform: rotate(30deg);
}
/*这是下面部分~
 */
.lowerLip{
    border: 3px solid #000;
    width: 130px;
    height: 140px;
    position: absolute;
    left: 50%;
    margin-left: -65px;
    top: 15px;
    background: #9b000a;
    border-bottom-left-radius: 280px 590px;
    border-bottom-right-radius: 280px 590px;
    overflow: hidden;
    animation: mouthMove 3s infinite;
    cursor: pointer;
}
/*这是我得小舌头~
 */
.tongue{
    width: 140px;
    height: 140px;
    background: #fc4a62;
    margin-top: 20px;
    position: absolute;
    left: 50%;
    margin-left: -70px;
    border-radius: 70px;
    overflow: hidden;
}
/*我要张开嘴吧，表达自己了~
 */
@keyframes mouthMove {
    0%,46%,54%,100%{
      height: 140px;
    }
    50%{
      height: 10px;
    }
  }
/*因为我比较害羞~
 *所以小主人给我加上了红红的小脸蛋~
 */
.face{
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid #000;
    background: #FC0D1C;
    top: 202px;
    left: 50%;
    margin-left: -32px;
}
.face.left {
    transform: translateX(-144px);
}
.face.right {
    transform: translateX(144px);
}
/*我想拥抱这个美丽世界~
 *所以我的小手快要出现啦~
 */
.hand{
    position: absolute;
    left: 50%;
    top: 410px;
    margin-left: -53px;
}
.hand.left{
     opacity: 1 !important;
    transform: translateX(-106px);
}
.hand.right{
    opacity: 1 !important;
    transform: translateX(106px) rotateY(180deg);
}
/*我还会放闪电哦~
 */
.flash{
    position: absolute;
    top: 50%;
    left: 50%;
}
.flash.right >img{
    transform: rotateY(180deg);
    transform-origin: 0 0;
}
/*你是小哥哥还是小姐姐呀？(☆_☆)
 *我好想认识你~
 *戴上耳机
 *摸摸我的嘴巴
 *和我打个招呼吧~
 */
audio {
    display: block;
    width: 300px;
    height: 54px;
}
audio:not([controls]) {
    display: none !important;
}
`;

const player = {
    id: undefined,
    time: 100,
    ui: {
      html: document.querySelector('#html'),
      style: document.querySelector('#style')
    },
    events: {
      '#btnPause': 'pause',
      '#btnPlay': 'play',
      '#btnSlow': 'slow',
      '#btnNormal': 'normal',
      '#btnFast': 'fast'
    },
    n: 1,
    init: () => {
      player.ui.html.innerText = string.substr(0, player.n)
      player.ui.style.innerHTML = string.substr(0, player.n)
      player.bindEvents()
      player.play()
    },
    bindEvents: () => {
      for (let key in player.events) {
          //防御性，防止key可能是继承属性
        if (player.events.hasOwnProperty(key)) {
          const value = player.events[key] // pause / play / slow
          document.querySelector(key).onclick = player[value]
        }
      }  
    },
    run: () => {
      player.n += 1
      if (player.n > string.length) {
        window.clearInterval(player.id)
        return
      }
      player.ui.html.innerText = string.substr(0, player.n)
      player.ui.style.innerHTML = string.substr(0, player.n)
      player.ui.html.scrollTop = player.ui.html.scrollHeight
    },
    play: () => {
      window.clearInterval(player.id)
      player.id = setInterval(player.run, player.time)
    },
    pause: () => {
      window.clearInterval(player.id)
    },
    slow: () => {
      player.pause()
      player.time = 200
      player.play()
    },
    normal: () => {
      player.pause()
      player.time = 50
      player.play()
    },
    fast: () => {
      player.pause()
      player.time = 0
      player.play()
    }
  }
  
  player.init()
 