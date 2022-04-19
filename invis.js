const { ipcRenderer } = require("electron");
console.log('loaded');
ipcRenderer.on('wasteTime', () => {
    console.log('start');
    let start = Date.now();
    let i;
    while (Date.now() - start < 5000) {
        i++
    }
    console.log('finish');
    ipcRenderer.invoke('remoteResponse', makeid(7))
})

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