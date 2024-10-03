const btn_1 = document.getElementById("btn_click_dialog_1");
const btn_2 = document.getElementById("btn_click_dialog_2");
const btn_3 = document.getElementById("btn_click_dialog_3");
const btn_4 = document.getElementById("btn_click_dialog_4");
const btn_5 = document.getElementById("btn_click_dialog_5");
const closeBtn_1 = document.getElementById("close_button_1");
const closeBtn_2 = document.getElementById("close_button_2");
const closeBtn_3 = document.getElementById("close_button_3");
const closeBtn_4 = document.getElementById("close_button_4");
const closeBtn_5 = document.getElementById("close_button_5");
const closeBtn_6 = document.getElementById("close_button_app");

const appBtn = document.getElementById("button_form_class");

btn_1.addEventListener("click", btn_click_dialog_1);
btn_2.addEventListener("click", btn_click_dialog_2);
btn_3.addEventListener("click", btn_click_dialog_3);
btn_4.addEventListener("click", btn_click_dialog_4);
btn_5.addEventListener("click", btn_click_dialog_5);

closeBtn_1.addEventListener("click", closeModal_1);
closeBtn_2.addEventListener("click", closeModal_2);
closeBtn_3.addEventListener("click", closeModal_3);
closeBtn_4.addEventListener("click", closeModal_4);
closeBtn_5.addEventListener("click", closeModal_5);
closeBtn_6.addEventListener("click", close_button_app);

appBtn.addEventListener("click", button_form_class);

function btn_click_dialog_1(){
    document.getElementById("tab_1_1").checked = true;
    var dialog_1 = document.getElementById('dialog_1');
    dialog_1.showModal(); 
}
function btn_click_dialog_2(){
    document.getElementById("tab_1_2").checked = true;
    var dialog_2 = document.getElementById('dialog_2');
    dialog_2.showModal(); 
}
function btn_click_dialog_3(){
    document.getElementById("tab_1_3").checked = true;
    var dialog_2 = document.getElementById('dialog_3');
    dialog_3.showModal(); 
}
function btn_click_dialog_4(){
    document.getElementById("tab_1_4").checked = true;
    var dialog_4 = document.getElementById('dialog_4');
    dialog_4.showModal(); 
}
function btn_click_dialog_5(){
    document.getElementById("tab_1_5").checked = true;
    var dialog_5 = document.getElementById('dialog_5');
    dialog_5.showModal(); 
}

function closeModal_1(){
    var dialog_close_1 = document.getElementById('dialog_1');
    dialog_close_1.close(); 
}

function closeModal_2(){
    var dialog_close_2 = document.getElementById('dialog_2');
    dialog_close_2.close(); 
}

function closeModal_3(){
    var dialog_close_3 = document.getElementById('dialog_3');
    dialog_close_3.close(); 
}

function closeModal_4(){
    var dialog_close_4 = document.getElementById('dialog_4');
    dialog_close_4.close(); 
}

function closeModal_5(){
    var dialog_close_5 = document.getElementById('dialog_5');
    dialog_close_5.close(); 
}

function close_button_app(){
    var close_button_app = document.getElementById('dialog_app');
    close_button_app.close(); 
}

function button_form_class(){
    var dialog_app = document.getElementById('dialog_app');
    dialog_app.showModal();  
}











