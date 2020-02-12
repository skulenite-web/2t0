var ppl = require('js/people.json');
brains = ppl.creative;
for (i = 0; i < brains.length; i++) {
    var boxstr = '<div class="col-sm-6 col-xl-3 mb-4">\n';
    boxstr += '<div class="circ">\n';
    boxstr += '<img src="'
    boxstr += brains[i].photo
    boxstr += '" class="circ-img" alt="creative brains photo">\n';
    boxstr += '<div class="circ-body">\n';
    boxstr += '<h5 class="card-title">';
    boxstr += brains[i].name;
    boxstr += '</h5>\n';
    boxstr += '<p class="card-text">'
    boxstr += brains[i].role;
    boxstr += '</p>\n</div>\n</div>\n</div>\n';
    // alert(brains[i].name);
    document.getElementById("creative-people").innerHTML += boxstr;
}
