var md=document.getElementById("menu-dropdown")
var dm1=document.getElementById("dm1")
if(md)
{
    md.addEventListener("click", ()=>{
        if(dm1.classList.contains("temp-invisible"))
        {
            dm1.classList.remove("scale-out-ver-top");
            dm1.classList.remove("temp-invisible");
            dm1.classList.add("scale-in-ver-top")
        }
        else
        {
            dm1.classList.remove("scale-in-ver-top");
            dm1.classList.add("scale-out-ver-top")
            setTimeout(function(){
                dm1.classList.add("temp-invisible");
            }, 600);
        }     
})
}
var md2=document.getElementById("submenu-dropdown")
var dm2=document.getElementById("dm2")
if(md2)
{
    md2.addEventListener("click", ()=>{
        if(dm2.classList.contains("temp-invisible"))
        {
            dm2.classList.remove("scale-out-ver-top");
            dm2.classList.remove("temp-invisible");
            dm2.classList.add("scale-in-ver-top")
        }
        else
        {
            dm2.classList.remove("scale-in-ver-top");
            dm2.classList.add("scale-out-ver-top")
            setTimeout(function(){
                dm2.classList.add("temp-invisible");
            }, 600);
        }     
})
}
var csm=document.getElementById("close-sm")
csm.addEventListener("click",()=>{
    document.getElementById("sli-men").classList.remove("slide-left")
    document.getElementById("sli-men").classList.add("slide-right")
})
document.getElementById("open-sm").addEventListener("click",()=>{
    document.getElementById("sli-men").classList.remove("slide-right")
    document.getElementById("sli-men").classList.add("slide-left")
})