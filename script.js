"use strict"
$(function () {
    // var elem_list = [];
    var bool_traverse = false,
        bool_battue = false,
        bool_vantaux = false,
        error_text = '',
        tab = [];
    ($('input').filter(function () {
        if (this.id.match(/^h[1-5]/))
            tab.push(this);
    }));
    $('#button').click(function (evt) {
        var error = checkEmptyness(function (str) {
            str != '' ? alert(str) : alert(displayInput());
            error_text = '';
        });
        console.log('ee', error);

    });
    $('input[name="vent"]').change(function (evt) {
        bool_vantaux = true;
        switch (evt.target.value) {
            case "Gauche": 
            $('#Longueur').removeAttr('disabled');
            $('#battue').attr('disabled', '');
            $('#Largeur').attr('disabled', '');
            break;
            case "GaucheDroit": 
            $('#Longueur').removeAttr('disabled', '');
            $('#battue').removeAttr('disabled', '');
            $('#Largeur').removeAttr('disabled', '');
            break;
            case "Droit": 
            $('#Longueur').attr('disabled', '');
            $('#battue').attr('disabled', '');
            $('#Largeur').removeAttr('disabled');
            break;
        }
    })
    $('select').change(function (evt) {
        if (!bool_battue || !bool_traverse) {
            if (evt.target.id == "battue") {
                $('#battue option[value="0"]').remove();
                bool_battue = true;
            }
            if (evt.target.id == "Nombre_traverse") {
                $('#Nombre_traverse option[value="0"]').remove();
                bool_traverse = true;

                tab.forEach(elm => {
                    parseInt(elm.id.substr(1, 2)) > evt.target.value ? elm.setAttribute('disabled', '') : elm.removeAttribute('disabled');
                });
            }
        }
    });
    $('.image_changer').change(function (evt) {
        if (bool_traverse && bool_vantaux)
            $('#to_dipslay')["0"].src = './images/' + $("input[name='vent']:checked")["0"].value + $('#Nombre_traverse')["0"].value + '.png'
    })
    $('#button_test').click(function (evt) {
        console.log(evt.target.dataset.test);
    })

    function checkEmptyness(callback) {
        //radio button check
        if ($("input[name='vent']:checked").length == 0)
            error_text += 'Vous n\'avez pas sélectionner le nombre de ventaux\n';
        if (!bool_battue)
            error_text += 'Vous n\'avez pas séléctionner de battue\n';
        if (!bool_traverse)
            error_text += 'Vous n\'avez pas séléctionner le nombre de traverse\n';
        $('.input_val').each(function (index, elem) {
            if (elem.hasAttribute('disabled') == false) {
                if ((elem.type == "text" || elem.type == "number") && (elem.value == 0 || elem.value == undefined || elem.value == ''));
                error_text += elem.id + ' mal définie\n';
            }
        });
        callback(error_text);
    }

    function displayInput() {
        var str = '';
        $('.input_val').each(function (index, elem) {
            str += index + ' : ' + elem.id + ' = ' + elem.value + '\n';
        });
        return str;
    }
});
