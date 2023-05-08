const hr=document.getElementById("hour");
const mn=document.getElementById("min");
const sec= document.getElementById("second");
const am=document.getElementById("ampm");
 function updatetime()
 {
    let h = new Date().getHours();
    let m  = new Date().getMinutes();
    let s = new Date().getSeconds();
    let a="AM";
  

    if(h>12)
    {
        h = h-12;
        a = "PM";
    }
    if(m<10)
    {
        m = "0"+m;
    }
    if(s<10)
    {
        s = "0"+s;
    }
    if(h<10)
    {
        h = "0"+h;
    }

    hr.innerText = h;
    mn.innerText =  m;
    sec.innerText  = s;
    am.innerText = a;
    setTimeout(() => {updatetime()}, 1000);
}
updatetime();