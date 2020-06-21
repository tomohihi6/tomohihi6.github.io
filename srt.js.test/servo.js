0
00:00:00,000 --> 00:00:01,000
doOnce[index] = true;
obniz.display.clear();
obniz.display.print("servo test");
servo = obniz.wired("ServoMotor", {gnd:0, vcc:2, signal:4});
vars.leftfunc = {}; //obnizのスイッチを左に倒した時に起こる関数を登録しておくための変数
vars.rightfunc = {}; 
vars.pushfunc = {}; 
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
attention = document.getElementById('state').innerText
console.log(attention);

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
attention = "動画に注目してください"

2
00:00:23,000--> 00:00:27,000
attention.innerText = `手元のobnizを動画と同じように操作してください
準備ができたらobnizのボタンを押して，動画を再生してください.`

3
00:00:27,100--> 00:00:27,200
player.pauseVideo();
vars.pushfunc[index] = function () {
    player.playVideo();
}

4
00:00:32,100--> 00:00:32,200
player.pauseVideo();
vars.pushfunc[index] = function () {
    player.playVideo();
}

5
00:00:36,100--> 00:00:36,200
player.pauseVideo();
vars.pushfunc[index] = function () {
    player.playVideo();
}

6
00:00:37,000 --> 00:00:37,500
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
obniz.display.clear()
obniz.display.print('servo test')
const servo = obniz.wired("ServoMotor", {gnd:0, vcc:2, signal:4})`
);

7
00:00:44,800 --> 00:00:45,000
attention = `手元のobnizと動画が同じ動作をします．
サイト右側のコードにも注目しながら動作を確認してください`
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

8
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

9
00:01:00,000 --> 00:01:02,200
attention = `手元のobnizと動画が同じ動作をします．
サイト右側のコードにも注目しながら動作を確認してください
手元のobnizのスイッチを操作することによって，サーボを好きに動かすことができます．`
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

10
00:01:02,250 --> 00:01:05,000
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

11
00:01:05,003 --> 00:01:22,000
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
