"use strict"
$(function () {
    // var elem_list = [];
    var bool_traverse = false,
        bool_battue = false,
        error_text = '';

    $('#button').click(function (evt) {
        var error = checkEmptyness(function (str) {
            str != '' ? alert(str) : alert(displayInput());
            error_text = '';
        });
    });
    $('select').change(function (evt) {
        if (!bool_battue || !bool_traverse) {
            if (evt.target.id == "battue") {
                $('#battue option[value="0"]').remove();
                bool_battue = true;
            }
            if (evt.target.id == "Nombre_traverse") {
                $('#Nombre_traverse option[value="0"]').remove();
                bool_traverse = true;
            }
        }
    });

    function checkEmptyness(callback) {
        //radio button check
        if ($("input[name='vent']:checked").length == 0)
            error_text += 'Vous n\'avez pas sélectionner le nombre de ventaux\n';
        if (!bool_battue)
            error_text += 'Vous n\'avez pas séléctionner de battue\n';
        if (!bool_traverse)
            error_text += 'Vous n\'avez pas séléctionner le nombre de traverse\n';
        $('.input_val').each(function (index, elem) {
            if((elem.type == "text" || elem.type == "number") && (elem.value == 0 || elem.value == undefined || elem.value == ''))
                error_text += elem.id+' mal définie\n';
        });
        callback(error_text);
    }   
    function displayInput() {
        var str = '';
        $('.input_val').each(function (index, elem) {
            str += index+' : '+elem.id+' = '+elem.value+'\n';
        });
        return str;
    }
});