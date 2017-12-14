
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
    $('.btn-back').click(function () {
        var prev = $(this).parent().prev();
        $(prev).show();
        //$(".phoneForm").show();
    });

    //funtion number length
    $('#phone').keyup(function () {
        var phoneNumber = $('#phone').val();
        if (phoneNumber.length === 10) {
            $('#next').removeClass("btn btn-default btn-disabled mUpDown");
            $('#next').addClass("btn btn-default btn-next mUpDown");
        }
        if (phoneNumber.length > 10) {
            $('#next').addClass("btn btn-default btn-disabled disabled mUpDown");
        }
    });

    // function code validator
    $('.code-number').keyup(function () {
        var phoneNumber = $('#code-number').val();
        var digits = "";
        if (phoneNumber.length === 1) {
            $('#code-number').next("").keyup();
            $('#next2').addClass("btn btn-default btn-next mUpDown next2");
        }
        if (phoneNumber.length > 0) {
            $('#next2').addClass("btn btn-default btn-disabled mUpDown");
        }


    });

    //display code validation
    $('#next,#reSend').click(function () {
        $("#codeAlert").show();
        $(".phoneForm").hide();
        //function ramdon number
        function codeRandom(min, max) {
            var code = Math.round(Math.random() * (max - min) + min);
            $('#phoneCode').html("LAB - " + code);
        }
        codeRandom(100, 999);
    });

    //function verify phone
    $('#okCode').click(function () {
        $(".verifyPhone").show();
        $("#codeAlert").hide();
    });

    //function next2
    $(".next2").click(function () {
        $(".profileForm").show();
        $(".verifyPhone").hide();
    });
   

    $('#okUser').click(function () {
        var button = $(this);

        if (button.attr("data-dismiss") != "modal") {
            var inputs = $('form input');
            var success = $('.success');
            var progress = $('.progress');
            var progressBar = $('.progress-bar');

            inputs.attr("disabled", "disabled");

            button.hide();

            progress.show();

            progressBar.animate({ width: "100%" }, 100);

            progress.delay(1000)
                .fadeOut(600);
                
            button.text("Close")
                .removeClass("btn-primary")
                .addClass("btn-success")
                .blur()
                .delay(1600)
                .fadeIn(function () {
                    success.text("¡Log in is successful!");
                    button.attr("data-dismiss", "modal");
                });

        }

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