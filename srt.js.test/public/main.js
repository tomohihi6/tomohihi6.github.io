async function fetchScriptData(scriptName) {
    if(typeof firebase !== 'undefined') {
        if(typeof firebase.storage !== 'undefined') {
            console.log("中身動いてる")
            const storageRef = firebase.storage().ref();
            const child = storageRef.child(`srt.js/${scriptName}.js`);
            const script = await child.getDownloadURL()
            .catch(error => {
                switch (error.code) {
                    case 'storage/object-not-found':
                      console.log("File doesn't exist")
                      break;
                
                    case 'storage/unauthorized':
                      console.log("User doesn't have permission to access the object");
                      break;
                
                    case 'storage/canceled':
                      console.log("User canceled the upload")
                      break;
                }
                throw error.response.status;
            });
            return script;
        } else {
            console.log("firebase storage is not defined")
        }
    } else {
        console.log("firebase is not defined");
    }
}

function log(txt){
    const newLine = document.createElement("li");
    newLine.innerHTML = (typeof txt === 'string') ? txt : JSON.stringify(txt, null, 4);
    document.querySelector('#console').appendChild(newLine);
    $('#console-container').animate({scrollTop: $('#console-container')[0].scrollHeight}, 'fast');
}

function clearLog() {
    const console = document.querySelector('#console');
    while(console.firstChild) {
        console.removeChild(console.firstChild);
    }
}

function singleLog(txt) {
    document.querySelector('#console').innerText = txt;
}
