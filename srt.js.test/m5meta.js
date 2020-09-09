0
00:00:00,000 --> 00:00:01,000
highlightAll = ["player", "panel_area"];
doHighlight("player", highlightAll);
vars.btnBfunc = {};
vars.btnAfunc = {};
obniz.buttonA.onchange = (flg) => {
    if(flg) {
        let fn = indexedFunction(vars.btnAfunc);
        if (fn != null) {
            fn.call(null);
        }
    }
}
obniz.buttonB.onchange = (flg) => {
    if(flg) {
        let fn = indexedFunction(vars.btnBfunc);
        if (fn != null) {
            fn.call(null);
        }
    }
}
displayBtnPressed = (btnName) => {
    obniz.display.clear();
    obniz.display.print(`ボタン${btnName}が押されました`)
}
obniz.setupIMUWait().then(async() => {
    let preAccel = await obniz.imu.getAccelWait();
    obniz.repeat(async () => {
        let currentAccel = await obniz.imu.getAccelWait();
        // console.log(`current accelerometer value is %o`, currentAccel);   
        //直前の加速度と今の加速度を比較
        if(!(Math.abs(Math.abs(preAccel.x) - Math.abs(currentAccel.x)) > 0.1)) { //xの比較
            if(!(Math.abs(Math.abs(preAccel.y) - Math.abs(currentAccel.y)) > 0.1)) { //yの比較
                if(!(Math.abs(Math.abs(preAccel.z) - Math.abs(currentAccel.z)) > 0.1)) { //zの比較
                    //加速度センサがほとんど反応しなかった時
                }
            }
        } else {
            player.pauseVideo();
            obniz.wait(1000)
        }
        console.log(`最近の加速度：x${currentAccel.x}`)
        console.log(`最近の加速度：y${currentAccel.y}`)
        console.log(`最近の加速度：z${currentAccel.z}`)
        preAccel = currentAccel;
        obniz.wait(500)
    })
});

1
00:01:21,000 --> 00:01:22,000
doHighlight(highlightAll, highlightAll);
displayBtnPressed("A");
const doc = editor0.getDoc();
doc.setValue(
`//ボタンAが押されたら
obniz.buttonA.onchange = (flg) => {
    //flgはtrueで押された，falseで離された
    if(flg) {
        obniz.display.clear();
        obniz.display.print("ボタンAが押されました")
    }
}`
);

2
00:01:27,000 --> 00:01:28,000
displayBtnPressed("B");
const doc = editor0.getDoc();
doc.setValue(
`//ボタンBが押されたら
obniz.buttonB.onchange = (flg) => {
    //flgはtrueで押された，falseで離された
    if(flg) {
        obniz.display.clear();
        obniz.display.print("ボタンBが押されました")
    }
}`
);

5
00:01:36,100 --> 00:01:46,500
doHighlight("player", highlightAll);

6
00:01:54,100 --> 00:01:54,500
doHighlight(highlightAll, highlightAll);
const doc = editor0.getDoc();
doc.setValue(
`obniz.display.clear();
obniz.display.font('Avenir',70)
obniz.display.print("🧡😁");`
);
obniz.display.clear();
obniz.display.font('Avenir',70)
obniz.display.print("🧡😁");

7
00:02:00,100 --> 00:02:00,500
const doc = editor0.getDoc();
doc.setValue(
`obniz.display.line(30, 30, 100, 30);
obniz.display.rect(20, 20, 20, 20);
obniz.display.circle(100, 30, 20);
obniz.display.line(60, 50, 100, 30);
obniz.display.rect(50, 40, 20, 20, true);
obniz.display.line(50, 10, 100, 30);
obniz.display.circle(50, 10, 10, true);
obniz.display.setColor('#FF0000');
obniz.display.rect(50, 40, 20, 20, true);
obniz.display.setColor('blue');
obniz.display.circle(100, 30, 20, true);`
);
obniz.display.clear();
obniz.display.line(30, 30, 100, 30);
obniz.display.rect(20, 20, 20, 20);
obniz.display.circle(100, 30, 20);
obniz.display.line(60, 50, 100, 30);
obniz.display.rect(50, 40, 20, 20, true);
obniz.display.line(50, 10, 100, 30);
obniz.display.circle(50, 10, 10, true);
obniz.display.setColor('#FF0000');
obniz.display.rect(50, 40, 20, 20, true);
obniz.display.setColor('blue');
obniz.display.circle(100, 30, 20, true);

8
00:02:04,100 --> 00:02:04,500
doHighlight("player", highlightAll);

9
00:02:11,100 --> 00:02:11,500
doHighlight(highlightAll, highlightAll);
const doc = editor0.getDoc();
doc.setValue(
`obniz.led.on();`
);
obniz.led.on();

10
00:02:12,100 --> 00:02:12,500
const doc = editor0.getDoc();
doc.setValue(
`obniz.led.off();`
);
obniz.led.off();

11
00:02:14,100 --> 00:02:14,500
const doc = editor0.getDoc();
doc.setValue(
`obniz.led.blink();`
);
obniz.led.blink();

12
00:02:17,100 --> 00:02:17,500
const doc = editor0.getDoc();
doc.setValue(
`obniz.led.endBlink();
obniz.led.off();`
);
obniz.led.endBlink();
obniz.led.off();

13
00:02:18,100 --> 00:02:18,500
doHighlight("player", highlightAll);

14
00:02:33,100 --> 00:02:37,500
doHighlight(highlightAll, highlightAll);
const statements = [
    "obniz.display.line(30, 30, 100, 30)",
    "obniz.display.rect(20, 20, 20, 20)",
    "obniz.display.circle(100, 30, 20)",
    "obniz.display.line(60, 50, 100, 30)",
    "obniz.display.rect(50, 40, 20, 20, true)",
    "obniz.display.line(50, 10, 100, 30)",
    "obniz.display.circle(50, 10, 10, true)",
    `obniz.display.setColor('#FF0000')
    obniz.display.rect(50, 40, 20, 20, true)`,
    `obniz.display.setColor('blue')
    obniz.display.circle(100, 30, 20, true)`,
    "obniz.display.clear()",
    `obniz.display.font(null, 20)
    obniz.display.pos(90, 50)
    obniz.display.print("おわり")`,
];
async function delayPrint(array) {
    array.forEach((statement) => {
        eval(statement);
    })
}
delayPrint(statements);

15
00:02:38,100 --> 00:02:38,500
const doc = editor0.getDoc();
doc.setValue(
`// ボタンAを押した時に１つずつ順番にディスプレイに表示するための配列
const statements = [
    obniz.display.clear(),
    obniz.display.line(30, 30, 100, 30),
    obniz.display.rect(20, 20, 20, 20),
    obniz.display.circle(100, 30, 20),
    obniz.display.line(60, 50, 100, 30),
    obniz.display.rect(50, 40, 20, 20, true),
    obniz.display.line(50, 10, 100, 30),
    obniz.display.circle(50, 10, 10, true),
    obniz.display.setColor('#FF0000'),
    obniz.display.rect(50, 40, 20, 20, true),
    obniz.display.setColor('blue'),
    obniz.display.circle(100, 30, 20, true),
    obniz.display.clear(),
    obniz.display.font(null, 20),
    obniz.display.pos(90, 50),
    obniz.display.print("おわり"),
    obniz.display.clear(),
    obniz.display.setColor("black"),
]\n
obniz.onconnect = async() => {
    obniz.display.clear();
    let index = 0;
    obniz.buttonA.onchange = (flg) => {
        //　最後まで表示したなら最初に戻す
        if(index == statements.length) {
            index = 0;
        }
        if(flg) {
            eval(statements[index]); // 配列内の文字を実行文として評価する
            index++;
        }
    }
    let ledFlg = false;
    obniz.buttonB.onchange = (flg) => {
        if(flg) {
            //ボタンが押されたら,LEDの点灯,消灯を切り替える
            ledFlg = !ledFlg
            console.log(ledFlg);
        } 
        if(ledFlg) {
            obniz.led.on()
        } else {
            obniz.led.off();
        }
    }
}`
);

16
00:02:43,100 --> 00:02:43,500
obniz.led.on();

17
00:02:47,100 --> 00:02:47,500
obniz.led.off();

18
00:02:50,100
const statements = [
    "obniz.display.line(30, 30, 100, 30)",
    "obniz.display.rect(20, 20, 20, 20)",
    "obniz.display.circle(100, 30, 20)",
    "obniz.display.line(60, 50, 100, 30)",
    "obniz.display.rect(50, 40, 20, 20, true)",
    "obniz.display.line(50, 10, 100, 30)",
    "obniz.display.circle(50, 10, 10, true)",
    `obniz.display.setColor('#FF0000')
    obniz.display.rect(50, 40, 20, 20, true)`,
    `obniz.display.setColor('blue')
    obniz.display.circle(100, 30, 20, true)`,
    "obniz.display.clear()",
    `obniz.display.font(null, 20)
    obniz.display.pos(90, 50)
    obniz.display.print("おわり")`,
    `obniz.display.clear()
    obniz.display.setColor("black")`,
];
obniz.display.clear();
    let index = 0;
    obniz.buttonA.onchange = (flg) => {
        if(index == statements.length) {
            index = 0;
        }
        if(flg) {
            eval(statements[index]);
            index++;
        }
    }
    let ledFlg = false;
    obniz.buttonB.onchange = (flg) => {
        if(flg) {
            ledFlg = !ledFlg
            console.log(ledFlg);
        } 
        if(ledFlg) {
            obniz.led.on()
        } else {
            obniz.led.off();
        }
    }