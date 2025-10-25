let Hcounti=0
let HcountEl=document.getElementById("Hcount")
let Gcounti=0
let GcountEl=document.getElementById("Gcount")




function Hadd1(){
    Hcounti+=1
    HcountEl.textContent=Hcounti
    compare()
}

function Hadd2(){
    Hcounti+=2
    HcountEl.textContent=Hcounti
    compare()
}

function Hadd3(){
    Hcounti+=3
    HcountEl.textContent=Hcounti
    compare()
}

////////////////////////////

function Gadd1(){
    Gcounti+=1
    GcountEl.textContent=Gcounti
    compare()
}

function Gadd2(){
    Gcounti+=2
    GcountEl.textContent=Gcounti
    compare()
}

function Gadd3(){
    Gcounti+=3
    GcountEl.textContent=Gcounti
    compare()
}

function setz(){
    Hcounti=0
    HcountEl.textContent=0
    Gcounti=0
    GcountEl.textContent=0
}
function compare(){
    let h=Hcounti
let g=Gcounti

if(h>g){
    document.getElementById("Hcount").style.border = "7px solid #fa506f";
    document.getElementById("Gcount").style.border = "7px solid #18244d";

}else{
    document.getElementById("Gcount").style.border = "7px solid #fa506f";
    document.getElementById("Hcount").style.border = "7px solid #18244d";
}

}