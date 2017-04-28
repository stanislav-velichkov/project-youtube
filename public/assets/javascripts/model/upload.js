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

        //Generating a snapshot

        // step 1
        var canvas_elem = $( '<canvas class=snapshot_generator></canvas>' ).appendTo(document.body)[0];
        var $video = $( '<video muted class=snapshot_generator></video>' ).appendTo(document.body);
        //-----1------

        //step 2
        var url = URL.createObjectURL($('#uploadVideo').prop('files')[0]);
        console.log($('#uploadVideo').prop('files')[0]);

        var step_2_events_fired = 0;
        $video.one('loadedmetadata loadeddata suspend', function() {
            if (++step_2_events_fired == 3) {

                // step 3
                $video.one('seeked', function() {

                    // step 4
                    canvas_elem.height = this.videoHeight;
                    canvas_elem.width = this.videoWidth;
                    canvas_elem.getContext('2d').drawImage(this, 0, 0);
                    var snapshot = canvas_elem.toDataURL();

                    //snapshot - the image (base64)
                    console.log(snapshot);

                    // // append snapshot to body
                    // var thumb = document.createElement('img');
                    // thumb.setAttribute('src', snapshot);
                    // document.body.appendChild(thumb);


                    // Remove elements as they are no longer needed
                    $video.remove();
                    $(canvas_elem).remove();
                    //-----4------

                }).prop('currentTime', 3);
                //-----3------

            }
        }).prop('src', url);

        //-----2------



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