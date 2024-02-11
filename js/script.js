let menu=document.querySelector("#menu")
let check="menuhide"
function showMenu(){
    if(check==="menuhide"){
        menu.classList.add("show")
        check="menushow"
    }else{
        menu.classList.remove("show")
        check="menuhide"
    }
} 
//   drop-down code start 
let drop=document.querySelector("#drop")
function dropShow(){
drop.classList.add("dropshow")
}
function dropHide(){
    drop.classList.remove("dropshow")
}
//  drop-down code end  