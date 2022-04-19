// function wasteTime() {
//     let start = Date.now();
//     let i;
//     while (Date.now() - start < 5000) {
//         i++
//     }
//     return i;
// }
const { ipcRenderer } = require("electron");

async function remoteWasteTime() {
    ipcRenderer.invoke('remoteWasteTime');
}

async function mainWasteTime() {
    let foo = await ipcRenderer.invoke('wasteTime');
    document.getElementById('mainProcess').innerHTML = foo;
}
function wasteTime() {
    let start = Date.now();
    let i;
    while (Date.now() - start < 5000) {
        i++
    }
    document.getElementById('thisProcess').innerHTML = makeid(5);
}

function clearAll() {
    document.getElementById('thisProcess').innerHTML = '';
    document.getElementById('mainProcess').innerHTML = '';
    document.getElementById('remoteProcess').innerHTML = '';
    document.getElementById('random').innerHTML = '';
}

function randomText() {
    document.getElementById('random').innerHTML = makeid(10);
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

ipcRenderer.on('remoteResponse', (event, message) => {
    document.getElementById('remoteProcess').innerHTML = message

})

