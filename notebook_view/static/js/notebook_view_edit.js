function NotebookViewXBlock(runtime, element) {
    // Save button handler
    $(element).on('click', '.save-button', function() {
        var handlerUrl = runtime.handlerUrl(element, 'save_notebook_url');
        var data = {
            notebook_url: $(element).find('input[name=notebook_url]').val()
        };
        $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
            if (response.result === 'success') {
                location.reload();
            }
            else {
                console.log(response.message);
            }
        });
    });

    // Cancel button handler
    $(element).on('click', '.cancel-button', function() {
        location.reload();
    });

}

