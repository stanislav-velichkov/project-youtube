var isValidVideo = false;
var isValidPoster = true;

$("#uploadVideo").change(function () {
    $("#videoFailure").html('');

    $("#success").html('');

    var videoFileExtension = ['mp4', 'ogg', 'webm'];
    if ($.inArray($('#uploadVideo').val().split('.').pop().toLowerCase(), videoFileExtension) == -1) {
        $("#videoFailure").html('File Extension not Allowed! <br/>(' + videoFileExtension + ' only.)');
        isValidVideo = false;
    } else if ($('#uploadVideo').prop('files')[0].size > 100 * 1024 * 1024) {
        isValidVideo = false;
        $("#videoFailure").html('File too big! (Max Size: 100MB)');
    } else {
        isValidVideo = true;

    }
});

$("#poster").change(function () {
    $("#posterFailure").html('');

    $("#success").html('');

    var posterFileExtension = ['jpg', 'jpeg', 'png'];
    if ($.inArray($('#poster').val().split('.').pop().toLowerCase(), posterFileExtension) == -1) {
        $("#posterFailure").html('File Extension not Allowed! <br/>(' + posterFileExtension + ' only.)');
        isValidPoster = false;
    }  else {
        isValidPoster = true;

    }
});


$('#uploadForm').submit(
    function (e) {
        //validate

        if (isValidVideo && isValidPoster) {
            $('#uploading').css('display', 'inline-block');
            $.ajax({
                url: '/upload',
                type: 'POST',
                data: new FormData(this),
                processData: false,
                contentType: false,
                async: true,
                success: function (result) {
                    console.log(result);
                    $('#uploading').css('display', 'none');
                    $("#success").html('File Uploaded');
                }
            });
        }
        e.preventDefault();
    }
);