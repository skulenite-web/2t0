var ppl = require('js/people.json');
band = ppl.band;

for (i = 0; i < band.length; i++) {
    var boxstr = '<div class="col-sm-6 col-xl-3 mb-4">\n';
    boxstr += '<div class="circ">\n';
    boxstr += '<img src="'
    boxstr += band[i].photo
    boxstr += '" class="circ-img" alt="band member photo">\n';
    boxstr += '<div class="circ-body">\n';
    boxstr += '<h5 class="card-title">';
    boxstr += band[i].name;
    boxstr += '</h5>\n';
    boxstr += '<p class="card-text">'
    boxstr += band[i].role;
    boxstr += '</p>\n</div>\n</div>\n</div>\n';
    // alert(band[i].name);
    document.getElementById("band-people").innerHTML += boxstr;
}
