const ipcRenderer=require('electron').ipcRenderer;

window.onload(()=>{
console.log("hi")
})

function start()
{ 
    ipcRenderer.send("start",{})
    document.getElementById('button1').innerText="sharing...";
 
}

function stop()
{ 
    ipcRenderer.send("stop",{})
    document.getElementById('button1').innerText="start share";
  
}