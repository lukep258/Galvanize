console.log(document.getElementById('dracula').children[1]);
var dracula = document.getElementById('dracula');
for(var i=0;i<dracula.children.length;i++){
    var count = dracula.children[i];
    if(count ==="three"){
        dracula.removeChild(count);
    }
}
document.createElement