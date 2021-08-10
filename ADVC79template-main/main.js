menu_list_array = ["Veg Margherita Pizza",//add more items
                    ];

function getmenu(){
var htmldata;
menu_list_array = [
    "Veg Margherita Pizza",
    "Chiken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "veg Extravaganza Pizza"];
    htmldata="<ol class ='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
}
 htmldata = htmldata+"</ol>"
 document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata='(<section class="card">)'
for(var i=0;menu_list_array;i++){
    htmldata=htmldata+'<div class="card">'
    +'<Img src="images/pizzaImg.png"/>'
    +menu_list_array[i] + '</div>'
}
 htmldata=htmldata+'<div class="card">'
document.getElementById("display_addmenu").innerHTML = htmldata;
}

function add_top(){
var item= document.getElementById("add_item").value;
menu_list_array.push(item);
add_top();
}