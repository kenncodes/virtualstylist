var currentMenuItem = "";
var tops = ["cardigan1.png", "top12.png", "top16.png", "top1.png", "top2.png",
    "top3.png", "top4.jpg", "top5.png", "top6.jpg",
    "top7.png", "top8.png", "top10.jpg", "top11.png", "top13.jpeg",
    "top14.png", "top16.jpg", "top15.png"];
var bottoms = ["bottoms10.jpg", "bottoms1.png", "bottoms2.png", "bottoms4.png", "bottoms9.png",
    "skirt.jpg", "skirt1.jpeg", "bottom12.jpg", "bottoms5.png", "bottoms7.webp", "bottoms8.png", "bottom14.png"];
var shoes = ["shoes1.jpg", "shoes2.png", "shoes8.jpg", "shoes9.png", "shoes3.jpg", "shoes4.png", "shoes10.jpg",
    "shoes5.jpeg", "shoes6.png", "shoes7.png", "shoe12.png", "sh13.png"];
var accessories = ["a1.webp", "a2.jpg", "a3.png", "a4.jpg", "a5.jpg", "a13.png", "a7.jpg",
    "hat.png", "a9.jpg", "a12.png", "a10.jpg", "a11.jpg"];

//Onclick listener for the menu
var temp = document.getElementById("menu").getElementsByTagName("A");
for (var i = 0; i < temp.length; i++) {
    temp[i].setAttribute("onClick", "updateCloset(id)");
}

//onclick listener for the items
var temp2 = document.getElementById("closet").querySelectorAll(".item");
for (var j = 0; j < temp2.length; j++) {
    temp2[j].setAttribute("onClick", "updateOutfit(id)");
}

/*Changes Category, Resets Background */
function updateCloset(id) {

    var x = document.getElementById("closet").querySelectorAll(".item");
    var menus = document.getElementById("menu").querySelectorAll(".menuItem");
    for (var z = 0; z < menus.length; z++) {
        menus[z].style.backgroundColor = "";
    }
    document.getElementById(id).style.backgroundColor = "white";
    if (id == "file") {
        //  alert("hello");
        var x = document.getElementById("hello");
        x.setAttribute("style", "");
        var x = document.getElementById("closet");
        x.setAttribute("style", "display:none");

    }
    for (var i = 0; i < x.length; i++) {
        var y = document.getElementById("hello");
        y.setAttribute("style", "display:none");

        var z = document.getElementById("closet");
        z.setAttribute("style", "");
        if (id == "tops") {
            currentMenuItem = "tops";
            x[i].innerHTML = '<div style="vertical-align:middle" ><img src="' + id + '\\' + tops[i] + '" width="100%" height="100%"></div>';

        } else if (id == "bottoms") {
            currentMenuItem = "bottoms";
            x[i].innerHTML = '<div style="vertical-align:middle" ><img src="' + id + '\\' + bottoms[i] + '" width="100%" height="100%"></div>';
        } else if (id == "shoes") {
            currentMenuItem = "shoes";
            x[i].innerHTML = '<div style="vertical-align:middle" ><img src="' + id + '\\' + shoes[i] + '" width="100%" height="100%"></div>';
        } else if (id == "accessories") {
            currentMenuItem = "accessories";
            x[i].innerHTML = '<div style="vertical-align:middle" ><img src="' + id + '\\' + accessories[i] + '" width="100%" height="100%"></div>';
        }

    }
}


var currentTop = 0;
var currentBottom = 0;
var currentShoes = 0;
var currentAcc1 = 0;
var currentAcc2 = 0;
var currentAcc3 = 0;
var numOutfits = 0;
var currentAcc = 0;

function updateOutfit(id) {

    if (currentMenuItem == "tops") {
        currentTop = id;
        document.getElementById("look1").innerHTML = "<img src=\"" + "tops" + "\\" + tops[id - 1] + "\" width=\"100%\" height=\"100%\">";
    } else if (currentMenuItem == "bottoms") {
        currentBottom = id;
        document.getElementById("look2").innerHTML = "<img src=\"" + "bottoms" + "\\" + bottoms[id - 1] + "\" width=\"100%\" height=\"100%\">";
    } else if (currentMenuItem == "shoes") {
        currentShoes = id;
        document.getElementById("look3").innerHTML = "<img src=\"" + "shoes" + "\\" + shoes[id - 1] + "\" width=\"100%\" height=\"100%\">";
    } else if (currentMenuItem == "accessories") {
        currentAccessories = id;
        if (currentAcc % 3 == 0) {
            document.getElementById("look4").innerHTML = "<img src=\"" + "accessories" + "\\" + accessories[id - 1] + "\" width=\"100%\" height=\"100%\">";
        } else if (currentAcc % 3 == 1) {
            document.getElementById("look5").innerHTML = "<img src=\"" + "accessories" + "\\" + accessories[id - 1] + "\" width=\"100%\" height=\"100%\">";
        } else if (currentAcc % 3 == 2) {
            document.getElementById("look6").innerHTML = "<img src=\"" + "accessories" + "\\" + accessories[id - 1] + "\" width=\"100%\" height=\"100%\">";
        }
        currentAcc++;
    }

}

var myCookies = {};
function saveOutfit() {
    var d = new Date();
    d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "top=" + currentTop;
    document.cookie = "bottom=" + currentBottom;
    document.cookie = "shoes=" + currentShoes;
    document.cookie = "accessories=" + currentAccessories;

}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";

}
function loadOutfit() {
    document.getElementById("test1").innerHTML = "top" + getCookie("top");
    document.getElementById("test2").innerHTML = "bottom" + getCookie("bottom");
    document.getElementById("test3").innerHTML = "shoes" + getCookie("shoes");

}