0
00:00:00,000 --> 00:00:01,000
doOnce[index] = true;
obniz.display.clear();
obniz.display.print("LED test");
led = obniz.wired("LED", { anode:0, cathode:5 } );

1
00:00:24,000 --> 00:00:26,000
doOnce[index] = true;
player.pauseVideo(); // 動画の一時停止
fn = async function() {
    const state = await obniz.switch.getWait();
    if(state == "push") {
        player.playVideo();
    }
}
fn();

2
00:00:27,000 --> 00:00:28,000
obniz.switch.onchange = function(state) {
    console.log("上書き完了");
}


