var childWindow;
var documentWriteProperties = document.getElementById("button1");
var openWindowInClick = document.getElementById("button2");
var documentWritePropertiesNewWindow = document.getElementById("button3");
var resizeT = document.getElementById("button4");
var resizeB = document.getElementById("button5");
var scrollNewWindow = document.getElementById("button6");
var scrollNewWindowTo = document.getElementById("button7");
var focus = document.getElementById("button8");
var clos = document.getElementById("button9");

documentWriteProperties.onclick = function () {
        var m;
        for (k in window){
            m = "Key " + k + ": " + window[k] + "<br>" + m;
        }
        document.write(m);
    };
openWindowInClick.onclick = function () {
    childWindow = open("", "", "width=300px, height=400px");
    };
documentWritePropertiesNewWindow.onclick = function () {
    var m;
    for ( var k in childWindow){
        m = "Key " + k + ": " + childWindow[k] + m;
    }
    childWindow.document.write(m);
};
resizeT.onclick = function () {
    childWindow.resizeTo(500, 500);
};
resizeB.onclick = function () {
    childWindow.resizeBy(-50, -50);
};
scrollNewWindow.onclick = function () {
    childWindow.scrollBy(100, 0);
};
scrollNewWindowTo.onclick = function () {
    childWindow.scrollTo(200, 250);
};
focus.onclick = function () {
    childWindow.focus();
    setTimeout(childWindow.blur(),3000);
};
clos.onclick = function () {
    childWindow.close();
    print();
};