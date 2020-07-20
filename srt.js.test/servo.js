0
00:00:00,000 --> 00:00:01,000
doOnce[index] = true;
loadScript("https://tomohihi6.github.io/srt.js.test/highlight.js", () => {
    console.log("highlight.js was loaded")
})
highlightAll = ["player", "panel1"];
doHighlight("player", highlightAll);
vars.leftfunc = {}; //obnizのスイッチを左に倒した時に起こる関数を登録しておくための変数
vars.rightfunc = {}; 
vars.pushfunc = {}; 
obniz.display.clear();
obniz.display.print("servo test");
servo = obniz.wired("ServoMotor", {gnd:0, vcc:2, signal:4});
obniz.switch.onchange = function(state) {
    if(state === "left") {
        //各シーンで違う動作をさせる
        let fn = indexedFunction(vars.leftfunc);
        if (fn != null) {
            fn.call(null);
        }
    } else if(state === "right") {
        let fn = indexedFunction(vars.rightfunc);
        if (fn != null) {
            fn.call(null);
        }
    } else if(state === "push") {
        let fn = indexedFunction(vars.pushfunc);
        if(fn != null) {
            fn.call(null);
        }
    }
}

1
00:00:01,800 --> 00:00:23,000
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
obniz.display.clear()
obniz.display.print('servo test')`
);
vars.rightfunc[index] = function() {
    player.seekTo(44, true)
}

3
00:00:27,300 --> 00:00:27,500
player.pauseVideo();
deleteMe();
vars.pushfunc[index] = function () {
    player.playVideo();
}

4
00:00:27,700 --> 00:00:27,900
doHighlight("player", highlightAll);;

5
00:00:32,100--> 00:00:32,200
player.pauseVideo();
deleteMe();
vars.pushfunc[index] = function () {
    player.playVideo();
}

6
00:00:32,400--> 00:00:32,600
doHighlight("player", highlightAll);;

7
00:00:36,100--> 00:00:36,200
player.pauseVideo();
deleteMe();
vars.pushfunc[index] = function () {
    player.playVideo();
}

8
00:00:37,000 --> 00:00:37,500
doHighlight("player", highlightAll);;
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
obniz.display.clear()
obniz.display.print('servo test')
const servo = obniz.wired("ServoMotor", {gnd:0, vcc:2, signal:4})`
);

9
00:00:44,800 --> 00:00:45,000
doHighlight("panel1", highlightAll);
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
obniz.display.clear()
obniz.display.print('servo test')
const servo = obniz.wired("ServoMotor", {gnd:0, vcc:2, signal:4})
obniz.onconnect = async function () {
    servo.angle(90.0)
}`
);
servo.angle(90.0);

10
00:00:59,900
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
obniz.display.clear()
obniz.display.print('servo test')
const servo = obniz.wired("ServoMotor", {gnd:0, vcc:2, signal:4})
obniz.onconnect = async function () {
    servo.angle(90.0)
    obniz.switch.onchange = function (state) {
        if(state === 'left') {
            servo.angle(20.0)
        }
    }
}`
);

11
00:01:00,000 --> 00:01:02,200
servo.angle(20.0)
vars.leftfunc[index] = function() {
    servo.angle(20.0)
}
vars.pushfunc[index] = function() {
    servo.angle(90.0)
}
vars.rightfunc[index] = function() {
    servo.angle(180.0)
}

12
00:01:02,250 --> 00:01:05,000
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
obniz.display.clear()
obniz.display.print('servo test')
const servo = obniz.wired("ServoMotor", {gnd:0, vcc:2, signal:4})
obniz.onconnect = async function () {
    servo.angle(90.0)
    obniz.switch.onchange = function (state) {
        if(state === 'left') {
            servo.angle(20.0)
        } else if(state === 'push') {
            servo.angle(90.0)
        } 
    }
}`
);
servo.angle(90.0)
vars.leftfunc[index] = function() {
    servo.angle(20.0)
}
vars.pushfunc[index] = function() {
    servo.angle(90.0)
}
vars.rightfunc[index] = function() {
    servo.angle(180.0)
}

13
00:01:05,003 --> 00:01:20,000
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
obniz.display.clear()
obniz.display.print('servo test')
const servo = obniz.wired("ServoMotor", {gnd:0, vcc:2, signal:4})
obniz.onconnect = async function () {
    servo.angle(90.0)
    obniz.switch.onchange = function (state) {
        if(state === 'left') {
            servo.angle(20.0)
        } else if(state === 'push') {
            servo.angle(90.0)
        } else if(state === 'right') {
            servo.angle(180.0)
        }
    }
}`
);
servo.angle(180.0)
vars.leftfunc[index] = function() {
    servo.angle(20.0)
}
vars.pushfunc[index] = function() {
    servo.angle(90.0)
}
vars.rightfunc[index] = function() {
    servo.angle(180.0)
}

14
00:01:21,003 --> 00:01:21,200
player.pauseVideo();