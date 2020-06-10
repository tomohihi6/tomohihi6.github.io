0
00:00:00,000 --> 00:00:01,000
doOnce[index] = true;
obniz.onconnect = async function() {
    obniz.display.clear();
    obniz.display.print("LED TEST");
    led = obniz.wired("LED", { anode:0, cathode:1 } );
}
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

1
00:00:01,100 --> 00:00:20,000
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
obniz.display.clear()
obniz.display.print('LED TEST')`
);
vars.rightfunc[index] = function() {
    player.seekTo(22, true)
}

2
00:00:24,000 --> 00:00:26,000
player.pauseVideo(); // 動画の一時停止
vars.leftfunc[index] = function() {
    player.seekTo(1, true);
}
vars.rightfunc[index] = function() {
    player.seekTo(29,true);
}
vars.pushfunc[index] = function() {
    player.playVideo();
}

3
00:00:29,500 --> 00:00:31,000
led.on();
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
let led = obniz.wired("LED", {anode:0, cathode:1} )
obniz.onconnect = async function () {
    led.on()
}`
);
vars.leftfunc[index] = function() {
    player.seekTo(22, true);
}
vars.rightfunc[index] = function() {
    player.seekTo(33,true);
}

4
00:00:34,000 --> 00:00:34,500
led.off();
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
let led = obniz.wired("LED", {anode:0, cathode:1} )
obniz.onconnect = async function () {
    led.off()
}`
);
vars.leftfunc[index] = function() {
    player.seekTo(29, true);
}
vars.rightfunc[index] = function() {
    player.seekTo(36,true);
}

5
00:00:36,800 --> 00:00:40,200
led.on();
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
let led = obniz.wired("LED", {anode:0, cathode:1} )
obniz.onconnect = async function () {
    led.on()
}`
);
vars.leftfunc[index] = function() {
    player.seekTo(34, true);
}
vars.rightfunc[index] = function() {
    player.seekTo(40,true);
}

6
00:00:40,300
led.off();
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
let led = obniz.wired("LED", {anode:0, cathode:1} )
obniz.onconnect = async function () {
    led.off()
}`
);
vars.leftfunc[index] = function() {
    player.seekTo(36, true);
}
vars.rightfunc[index] = function() {
    player.stopVideo();
}