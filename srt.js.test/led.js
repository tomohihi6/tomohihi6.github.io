0
00:00:00,000 --> 00:00:01,000
doOnce[index] = true;
obniz.display.clear();
obniz.display.print("LED TEST");
led = obniz.wired("LED", { anode:0, cathode:5 } );
vars.leftfunc = {};
vars.rightfunc = {};
vars.pushfunc = {};
obniz.switch.onchange = function(state) {
    if(state === "left") {
        let fn = indexedFunction(vars.leftfunc);
        if (fn != null) {
            fn.call(null);
            console.log(index);
            console.log(fn);
            console.log(vars.leftfunc)
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
const doc = editor.getDoc();
const preValue = doc.getValue()
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
obniz.display.clear()
obniz.display.print('LED TEST')`
);

1
00:00:24,000 --> 00:00:26,000
doOnce[index] = true;
player.pauseVideo(); // 動画の一時停止
const currentTime = player.getCurrentTime()
const seekTime = 29 - currentTime;
vars.rightfunc[index] = function() {
    player.seekTo(seekTime,true);
}
vars.pushfunc[index] = function() {
    player.playVideo();
}

2
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
const currentTime = player.getCurrentTime()
const seekTime = 34 - currentTime;
vars.rightfunc[index] = function() {
    player.seekTo(seekTime,true);
}

3
00:00:34,000 --> 00:00:34,500
doOnce[index] = true;
led.off();
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
let led = obniz.wired("LED", {anode:0, cathode:1} )
obniz.onconnect = async function () {
    led.off()
}`
);

4
00:00:36,800 --> 00:00:40,200
doOnce[index] = true;
led.on();
const doc = editor.getDoc();
doc.setValue(
`const obniz = new Obniz('OBNIZ_ID_HERE')
let led = obniz.wired("LED", {anode:0, cathode:1} )
obniz.onconnect = async function () {
    led.on()
}`
);

5
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