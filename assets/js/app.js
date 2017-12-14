
$(document).ready(function () {
    //$(".phoneForm").show();
    //$(".first-view").hide();
    //$(".signUp").hide();

    //splash intro
    $(".splash").fadeIn(800).fadeOut(800);
    $(".signUpForm").fadeIn(800);

    //remove 
    $('#btnSignUp').click(function () {
       $(".signUpForm").hide();
        //$(".phoneForm").show();
    });

    //back button
    $('#btnBack').click(function () {
        var prev = $(this).parent().prev();
        $(prev).show();
        //$(".phoneForm").show();
    });


    //display code validation
    $('#next').click(function () {
        $("#codeAlert").show();
        $(".phoneForm").hide();


        //function ramdon number
        function codeRandom(min, max) {
            var code = Math.round(Math.random() * (max - min) + min);
            $('#phoneCode').text("LAB - " + code);
        }
        
        codeRandom(100, 999);

    });

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