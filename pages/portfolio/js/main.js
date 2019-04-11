function Sec1(){
    document.getElementById("first_tab").style.display = "flex";
    document.getElementById("second_tab").style.display = "none";
    document.getElementById("third_tab").style.display = "none";
    document.getElementById("fourth_tab").style.display = "none";
   
    document.getElementById("tab1").classList.add("active");
    document.getElementById("tab2").classList.remove("active");
    document.getElementById("tab3").classList.remove("active");
    document.getElementById("tab4").classList.remove("active");
}
function Sec2(){
    document.getElementById("first_tab").style.display = "none";
    document.getElementById("second_tab").style.display = "flex";
    document.getElementById("third_tab").style.display = "none";
    document.getElementById("fourth_tab").style.display = "none";
    document.getElementById("tab2").classList.add("active");
    document.getElementById("tab1").classList.remove("active");
    document.getElementById("tab3").classList.remove("active");
    document.getElementById("tab4").classList.remove("active");
}
function Sec3(){
    document.getElementById("first_tab").style.display = "none";
    document.getElementById("second_tab").style.display = "none";
    document.getElementById("third_tab").style.display = "flex";
    document.getElementById("fourth_tab").style.display = "none";
    document.getElementById("tab2").classList.remove("active");
    document.getElementById("tab1").classList.remove("active");
    document.getElementById("tab3").classList.add("active");
    document.getElementById("tab4").classList.remove("active");
}
function Sec4(){
    document.getElementById("first_tab").style.display = "none";
    document.getElementById("second_tab").style.display = "none";
    document.getElementById("third_tab").style.display = "none";
    document.getElementById("fourth_tab").style.display = "flex";
    document.getElementById("tab2").classList.remove("active");
    document.getElementById("tab1").classList.remove("active");
    document.getElementById("tab3").classList.remove("active");
    document.getElementById("tab4").classList.add("active");
}
