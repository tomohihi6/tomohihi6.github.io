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
obniz.switch.onchange = function(state) {
    if(state === "push") {
        player.seekTo(27,true);
        player.playVideo();
    }
}
