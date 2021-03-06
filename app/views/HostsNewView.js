/**
 * Created by guillaumez on 3/12/14.
 */

App.HostsNewView = Ember.View.extend({
    didInsertElement: function () {
        $('#file_upload').fileupload({
            dataType: 'json',
            formData: {
                hostId: this.get('controller.model.id')
            },
            done: function (e, data) {
                alertify.success("File uploaded!");
            },
            error: function (e, data) {
                alertify.error("Unable tu upload files on the server.");
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('.progress-bar').css('width', progress + '%');
                $('.progress-bar').html(progress + '%');
            },
            add: function (e, data) {
                var goUpload = true;
                $.each(data.files, function (index, file) {
                    if (!(/\.(gif|jpg|jpeg|tiff|png)$/i).test(file.name)) {
                        alertify.error(file.name + " is not a valid image.");
                        goUpload = false;
                    }
                    if (file.size > 5000000) { // 5mb
                        alertify.error(file.name + " is too large. Max size: 5 MB.");
                        goUpload = false;
                    }
                });
                if (goUpload == true) {
                    data.submit();
                }
            }
        });
    }
});