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

1
00:00:01,800 --> 00:00:43,000
vars.rightfunc[index] = function() {
    player.seekTo(44, true)
}

2
00:00:44,800 --> 00:00:45,000
servo.angle(90.0);

3
00:00:59,250 --> 00:01:22,000
servo.angle(20.0)
vars.leftfunc[index] = function() {
    servo.angle(20.0)
}
vars.pushfunc[index] = function() {
    servo.angle(90.0)
}
vars.rightfunc[index] = function(){
    servo.angle(180.0)
}

// 4
// 00:01:02,250
// servo.angle(90.0);

// 5
// 00:01:05,003
// servo.angle(180.0)
