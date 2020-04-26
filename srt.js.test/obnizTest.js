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
(async function() {
    await obniz.ble.initWait();
    //start ble scan
    await obniz.ble.scan.startWait({ duration: 30 });
    obniz.ble.scan.onfind = function(peripheral){
        console.log(peripheral.localName)
        obniz.display.clear();
        obniz.display.print(peripheral.localName);
    };
    //finish ble scan
    obniz.ble.scan.onfinish = async function(peripherals, error){
        console.log("scan timeout!")
    };
})

