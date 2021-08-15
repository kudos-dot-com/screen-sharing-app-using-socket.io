window.onload=function(){
    var getprompt;
    getprompt=prompt("Enter Screen Code");
    if(getprompt.trim().length==0 || getprompt===undefined)
    {
        setTimeout(()=>{
            getprompt=prompt("Screen Id Required")
        },1000)
    }
    clearTimeout()
}