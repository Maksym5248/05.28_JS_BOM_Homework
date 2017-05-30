function urlArgs() {
    var args ={};
    var query = location.search.substring(1);
    var pairs = query.split("&");

    for(var i = 0; i < pairs.length; i++){
        var pos = pairs[i].indexOf("=");
        if (pos == -1) continue;
        var name = pairs[i].substring(0,pos);
        var value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[name] = value;
    }
    return args;
}
var n = document.getElementById("text");
var b = document.getElementById("te");

function write() {
    var m = urlArgs();
    var loc = location.href;
    var c = "";
    b.innerText = "<" + loc + ">";
    for ( var k in m ){
         c = "<"+k + ">" + " - " + "<" + m[k] + ">";
        n.innerText = c;
    }
}

write();





//n.innerText = m;

