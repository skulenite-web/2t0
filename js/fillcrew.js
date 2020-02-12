var ppl = require('js/people.json');
crew = ppl.crew;
for (i = 0; i < crew.length; i++) {
    var boxstr = '<div class="col-sm-6 col-xl-3 mb-4">\n';
    boxstr += '<div class="circ">\n';
    boxstr += '<img src="'
    boxstr += crew[i].photo
    boxstr += '" class="circ-img" alt="crew brains photo">\n';
    boxstr += '<div class="circ-body">\n';
    boxstr += '<h5 class="card-title">';
    boxstr += crew[i].name;
    boxstr += '</h5>\n';
    boxstr += '<p class="card-text">'
    boxstr += crew[i].role;
    boxstr += '</p>\n</div>\n</div>\n</div>\n';
    // alert(crew[i].name);
    document.getElementById("crew-people").innerHTML += boxstr;
}
