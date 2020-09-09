0
00:00:00,000 --> 00:00:01,000
highlightAll = ["player", "panel_area"];
doHighlight("player", highlightAll);
obniz.ble.initWait().then(async() => {
    console.log("ble start")
})

1
00:04:07,000 --> 00:04:10,000
obniz.display.clear();
obniz.ble.scan.onfind = async(peripheral) => {
    obniz.display.print(peripheral.address);
}
obniz.ble.scan.startWait();

2
00:06:19,000 --> 00:06:27,000
obniz.display.clear();
obniz.ble.scan.onfind = async(peripheral) => {
    obniz.display.print(peripheral.address);
}
obniz.ble.scan.onfinish = async() => {
    obniz.display.clear();
    obniz.display.print("scan was finished");
}
const setting = {
    duration: 5,
}
obniz.ble.scan.startWait({}, setting);

3
00:07:58,000 --> 00:08:05,000
obniz.display.clear();
let deviceCount = 0;
obniz.ble.scan.onfind = async(peripheral) => {
    deviceCount++;
    obniz.display.print(deviceCount);
    obniz.display.print(peripheral.address);
}
obniz.ble.scan.onfinish = async() => {
    obniz.display.clear();
    obniz.display.print("scan was finished");
    obniz.display.print(`found ${deviceCount} devices`);
}
const setting = {
    duration: 5,
}
obniz.ble.scan.startWait({}, setting);

4
00:08:39,000 --> 00:08:45,000
obniz.display.clear();
let deviceCount = 0;
obniz.ble.scan.onfind = async(peripheral) => {
    deviceCount++;
    obniz.display.clear();
    obniz.display.print(deviceCount);
}
obniz.ble.scan.onfinish = async() => {
    obniz.display.clear();
    obniz.display.print("scan was finished");
    obniz.display.print(`found ${deviceCount} devices`);
}
const setting = {
    duration: 5,
}
obniz.ble.scan.startWait({}, setting);