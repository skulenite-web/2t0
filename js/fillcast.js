var ppl = require('js/people.json');
cast = ppl.cast;
for (i = 0; i < cast.length; i++) {
    var boxstr = '<div class="col-sm-6 col-xl-3 mb-4">\n';
    boxstr += '<div class="circ">\n';
    boxstr += '<img src="'
    boxstr += cast[i].photo
    boxstr += '" class="circ-img" alt="cast member photo">\n';
    boxstr += '<div class="circ-body">\n';
    boxstr += '<h5 class="card-title">';
    boxstr += cast[i].name;
    boxstr += '</h5>\n';
    boxstr += '<p class="card-text">'
    boxstr += cast[i].bio;
    boxstr += '</p>\n</div>\n</div>\n</div>\n';
    // alert(cast[i].name);
    document.getElementById("cast-people").innerHTML += boxstr;
}
