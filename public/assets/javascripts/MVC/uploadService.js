var isValid = false;

$("#uploadForm").change(function () {
    $("#failure").html('');
    $("#success").html('');

    var fileExtension = ['mp4', 'mov', 'wmv', 'flv', 'avi', 'webm'];
    if ($.inArray($('#uploadVideo').val().split('.').pop().toLowerCase(), fileExtension) == -1) {
        $("#failure").html('File Extension not Allowed! <br/>(' + fileExtension + ' only.)');
        isValid = false;
    } else if ($('#uploadVideo').prop('files')[0].size > 100 * 1024 * 1024) {
        isValid = false;
        $("#failure").html('File too big! (Max Size: 100MB)');
    } else {
        isValid = true;
    }
});


$('#uploadForm').submit(
    function (e) {
        //validate

        if (isValid) {
            $('#uploading').css('display', 'inline-block');
            $.ajax({
                url: '/upload',
                type: 'POST',
                data: new FormData(this),
                processData: false,
                contentType: false,
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