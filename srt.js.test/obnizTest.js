0
00:00:00,000 --> 00:00:01,000
doOnce[index] = true;
obniz.display.clear();
obniz.display.print("Obniz test");

1
00:00:02,000 --> 00:00:07,000
obniz.display.clear();
obniz.display.print("ゆまち");

2
00:00:08,000 --> 00:00:20,000
obniz.switch.onchange = function (state) {
    obniz.display.clear();
    obniz.display.print(state);
};
