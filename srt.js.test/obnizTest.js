0
00:00:00,000 --> 00:00:01,000
doOnce[index] = true;
obniz.display.clear();
obniz.display.print("Obniz test");

1
00:00:02,000 --> 00:00:07,000
obniz.display.clear();
obniz.display.print("ゆまち");
console.log("ゆまち")

2
00:00:08,000 --> 00:00:20,000
obniz.switch.onchange = function (state) {
    obniz.display.clear();
    obniz.display.print(state);
};

3
00:00:21,000 --> 00:00:30,000
obniz.display.clear();
obniz.display.print("番台さんかっこいい");

4
00:00:40,000 --> 00:01:20,000
console.log("awaitできてないかも");
await obniz.ble.initWait();
console.log("ここは問題なし");
//start ble scan
await obniz.ble.scan.start();
obniz.ble.scan.onfind = function(peripheral){
    const beacon = peripheral.iBeacon;
    const rssi = beacon.rssi;
    if(rssi > -70) {
        obniz.display.clear();
        obniz.display.print("beacon is immediate");
    }else if(rssi <= -71 && rssi > -80) {
        obniz.display.clear();
        obniz.display.print("beacon is near");
    }else {
        obniz.display.clear();
        obniz.display.print("beacon is far");
    }
};
//finish ble scan
obniz.ble.scan.onfinish = function(peripherals, error){
    console.log("scan timeout!")
};


