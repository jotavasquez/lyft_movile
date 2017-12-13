
$(document).ready(function () {
    
    $(".signUp").show();
    $(".first-view").hide();
    $(".second-view").hide();


    

/*
    var firstView = function () {
        $(".first-view").fadeOut();
    }
    var firstViewAgain = function () {
        $(".first-view").fadeIn();
    }
    var secondView = function () {
        $(".second-view").fadeIn();
    }
    setTimeout(firstView, 800);
    setTimeout(secondView, 800);
*/
});


/*
// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered  
$('.modal').modal();
//cont Id contacts
var num = 0;

//event click modal
$('#add').click(function () {
    var name = $('#name').val();
    var phone = $('#phone').val();
    var contactId = 'contact_' + num;
    var deleteId = 'delete_' + num;

    //add contact
    $('.container-fluid').append(
        '<div id ="' + contactId + '">' +
        '<div class="row">' +
        '<div class="col s12 m8 offset-m2">' +
        '<div class="card-panel white">' +
        '<div class="black-text">' +
        '<p class="nameStyle">' + name + '</p>' +
        '<div class="row">' +
        '<div class="col s10">' +
        '<p class="phoneStyle">' + phone + '</p>' +
        '</div>' +
        '<div class="col s1">' +
        '<a id="' + deleteId + '" class="waves-effect waves-light btn delete-btn">' +
        '<i class="material-icons">delete</i>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );

    //sum cont Id
    num++;

    //input clean
    $('#name').val("");
    $('#phone').val("");

    $('#' + deleteId).click(function () {
        $('#' + contactId).remove();
    });
});

*/