// 数直線の線間隔
let lineWidth;
// canvasのleftの値
const adjCanvasX = 8;
// srt.js記述用要素の幅の初期値 ちょうど4秒分になっている．
const scriptItemInitWidth = 45;
// srt.js記述用要素を編集しているかどうかの真偽値を格納
let isEdit = false;
// 現在編集中のsrt.js記述用要素のDOM情報を格納
let nowEditing;

// youtube plyaerの準備ができたら実行する関数
function draw(){
    const videoDuration = player.getDuration(); //動画の再生時間を取得
    const canvas = setCanvas(videoDuration); //canvasを描画
    if (canvas.getContext) {
        drawNumberLine(canvas, videoDuration);
    }
}

// 数直線をひく
function drawNumberLine(canvas, videoDuration) {
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = 50;
    let x = 10; //数直線のx座標
    let y = height; //数直線のy座標
    // 数直線の時間に関するオブジェクト
    let time = {　
        minutes: 0,
        seconds: -1,
        x: 0,
        y: 10,
    }

    //数直線の背景用の長方形の描画
    ctx.beginPath();
    ctx.rect(x, 0, width, height);
    ctx.fillStyle = "#958A8A";
    ctx.fill();

    //数直線を引き延ばすかどうかの判定 canvasの長さが動画時間より長い時に
    if(canvas.clientWidth > videoDuration * 15) {
        lineWidth = (canvas.clientWidth) / videoDuration;
        time.x = lineWidth * 10 - 3;
    } else {
        lineWidth = 15;
        time.x = lineWidth * 10 - 3;
    }
    const time_x_width = lineWidth * 10; //数直線の時間の間隔

    for(let i = 0; i < videoDuration; i++) {
        let lineHeight = 10;
        time.seconds ++;
        if(time.seconds > 59) {
            time.minutes ++;
            time.seconds = 0;
        }
        if(i % 10 == 0 && i != 0) {
            const displayTime = getDisplayTime(time);
            lineHeight = 15;
            ctx.fillStyle = "White";
            ctx.fillText(displayTime, time.x, time.y);
            time.x += time_x_width;
        }
        const moveX = x + (i * lineWidth);
        ctx.beginPath();
        ctx.moveTo(moveX, y);          // 始点に移動
        ctx.lineTo(moveX, y - lineHeight);        // 終点
        ctx.strokeStyle = "White";  // 線の色
        ctx.lineWidth = 1;           // 線の太さ
        ctx.stroke();
    }

    //数直線の下線
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(width, y);
    ctx.strokeStyle = "White";  // 線の色
    ctx.lineWidth = 1;           // 線の太さ
    ctx.stroke();
}

function getDisplayTime(time) {
    const displayTime = ("00" + time.minutes).slice(-2) + ":" + ("00" + time.seconds).slice(-2);

    return displayTime;
}

// canvas描画関係
function setCanvas(vD) {
    const canvas = document.getElementById("canvas");
    const ruler = document.getElementById('timeline-header-ruler');
    // 数直線の幅が動画時間の関係によってrulerの幅より短くなりそうなら，引き延ばしていい感じの幅にするように
    const w = (ruler.clientWidth > (vD * 15)) ? ruler.clientWidth : vD * 15 + 30;
    const h = ruler.clientHeight - ruler.clientHeight * 0.1;
    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);
    return canvas;
}

// こっちは数直線に描画するようの時間変換用関数
function timeConvert(seconds) {
    const min = (('00') + Math.floor((seconds / 60) % 60)).slice(-2);
    const sec = (('00') + Math.floor(seconds % 60)).slice(-2);
    return min + ":" + sec;
}

function seekVideo(e) {
    let mouse = getMouseOnCanvas(e);
    mouse.x -= adjCanvasX;
    //x=8が0秒 +-2seek判定 次の棒15座標
    const seekTime = (mouse.x) / lineWidth;
    player.seekTo(seekTime);
    moveHandle(mouse.x);
}

function moveHandle(mouseX) {
    const handle = document.getElementById("time-line-handle");
    const time = document.getElementById("handle-time");
    const width = handle.clientWidth;
    const height = handle.clientHeight;
    handle.style.left = mouseX - width / 2 + 7 + "px"
    const displayTime = timeConvert(mouseX / lineWidth);
    time.innerHTML = String(displayTime);
}

// srt.js記述用の要素を生成
function addScriptItem(e) {
    const mouse = getMouseOnCanvas(e);
    // キャンバス上でずれるx座標の調整
    const canvasMouseX = mouse.x - adjCanvasX;
    // srt.js記述する開始時間
    const startTime = timeConvert(canvasMouseX / lineWidth);
    // srt.js記述する終了時間
    const endTime = timeConvert((canvasMouseX + scriptItemInitWidth) / lineWidth);
    // 親要素
    const ruler = document.getElementById('timeline-header-ruler');

    const scriptItem = document.createElement('div');
    scriptItem.setAttribute('class', 'scriptItem ui-selectee');
    scriptItem.textContent =  "00:" +  startTime + ",000 -> 00:" + endTime + ",000";
    scriptItem.style.position = 'absolute';
    scriptItem.style.left = mouse.x + 'px';
    scriptItem.style.top = '50px';
    scriptItem.style.width = scriptItemInitWidth + 'px';
    scriptItem.ondblclick = function() {
        editSrt(scriptItem);
        $(this).resizable('destroy');
        setResize();
    }
    ruler.appendChild(scriptItem);
    // ドラッグとリサイズできるように
    setDrag();
    setResize();
}

function setDrag() {
    let textContents;
    $('.scriptItem').draggable({
        axis: 'x',
        containment: '#canvas',
        start: function(e) {
            textContents = e.target.textContent.split('\n');
        },
        drag: function(e) {
            // innnertextをいじってdivを更新してしまっているため，リサイズができなくなる
            e.target.textContent = getScriptTime(e);
        },
        stop: function(e) {
            const currentVideoTime = getScriptTime(e);
            console.log(currentVideoTime)
            let returnText = '';
            textContents.forEach((text, i) => {
                if(i == 0) {
                    returnText += currentVideoTime + '\n';
                } else if(i == textContents.length - 1) {
                    returnText += text;
                } else {
                    returnText += text + '\n';
                }
            })
            e.target.textContent = returnText;
            //一度リサイズを削除して，再度セットし直す.
            $(this).resizable('destroy');
            setResize();
        }
    })
}

function setResize() {
    let textContents;
    $('.scriptItem').resizable({
        // Handles left right and bottom right corner
        handles: 'e, w, se',
        containment: '#canvas',
        // Remove height style
        start: function(e) {
            textContents = e.target.textContent.split('\n');
        },
        resize: function(e) {
            $(this).css("height", '');
            e.target.textContent = getScriptTime(e);
        },
        stop: function(e) {
            const currentVideoTime = getScriptTime(e);
            console.log(currentVideoTime)
            let returnText = '';
            textContents.forEach((text, i) => {
                if(i == 0) {
                    returnText += currentVideoTime + '\n';
                } else if(i == textContents.length - 1) {
                    returnText += text;
                } else {
                    returnText += text + '\n';
                }
            })
            e.target.textContent = returnText;
            // setDrag（）と同様の理由
            $(this).resizable('destroy');
            setResize();
        },
    });
}

// srt.jsファイル用の時間変換関数
function getScriptTime(e) {
    const canvasRect = document.getElementById('canvas').getBoundingClientRect();
    const rect = e.target.getBoundingClientRect();
    const startTime = timeConvert((rect.left - canvasRect.left - adjCanvasX)/ lineWidth);
    const endTime = timeConvert((rect.right - canvasRect.left - adjCanvasX) / lineWidth);
    player.seekTo((rect.left - canvasRect.left - adjCanvasX)/ lineWidth);
    moveHandle(rect.left - canvasRect.left - adjCanvasX)
    return "00:" +  startTime + ",000 -> 00:" + endTime + ",000";
}


function getMouseOnCanvas(e) {
    const rect = document.getElementById('canvas').getBoundingClientRect();
    console.log(`e.clientX = ${e.clientX}`);
    const mouse = {
        x : e.clientX - Math.floor(rect.left),
        y : e.clientY - Math.floor(rect.top),
    }
    return mouse;
}

function editSrt(e) {
    isEdit = true;
    nowEditing = e;
    const doc = editor2.getDoc();
    doc.setValue(e.textContent);
    editor2.focus();
    return ;
}

function saveTextToScriptItem() {
    const value = editor2.getDoc().getValue();
    nowEditing.textContent = value;
}

function saveScriptToLocalFile(fileName) {
    const a = document.createElement('a');
    const saveText = gatherTextsFromScriptItems();
    a.href = 'data:text/plain,' + encodeURIComponent(saveText);
    a.download = fileName;

    a.style.display = 'none';
    document.body.appendChild(a); // ※ DOM が構築されてからでないとエラーになる
    a.click();
    document.body.removeChild(a);
}

function confirmSaveScript() {
    const fileName = window.prompt("ファイルを保存します．\nファイル名を入力してください", ".js");
    if(!fileName || fileName == ".js") {
        alert('ファイル名を入力してください．')
        return ;
    } else {
        saveScriptToLocalFile(fileName);
    }
}

function gatherTextsFromScriptItems() {
    // srt.js記述用要素全てを取得
    let scriptItems = document.getElementsByClassName('scriptItem');
    // スクリプト記録用変数
    let texts = ''
    // このままだとHTMLCollectionとなって配列として扱うことができないので，配列に変換
    scriptItems = Array.from( scriptItems ) ;
    // 中身の再生時間が短い順にソート
    scriptItems.sort(function(a, b) {
        //要素のleftを取ってきてソート用に比較 pxの文字が邪魔なので取り除いてから数値に変換
        const rectA = Number(a.style.left.replace('px', ''));
        const rectB = Number(b.style.left.replace('px', ''));
        if(rectA < rectB) return -1;
        else if(rectA > rectB) return 1;
        return 0;
    })
    scriptItems.forEach((e, i) => {
        texts += i + '\n';
        texts += e.textContent + '\n\n';
    })
    return texts;
}

//ファイル読み込み用関数
function handleFileSelect(evt) {
    console.log(evt)
    const file = evt.target.files[0]; // FileList object

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        const result = reader.result;
        console.log(result);
        const editorDoc = editor.getDoc();
        editorDoc.setValue(result);
    }
    
}
