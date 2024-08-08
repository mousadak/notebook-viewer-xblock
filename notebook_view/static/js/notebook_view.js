function NotebookViewXBlock(runtime, element) {

    var notebookUrl = $(element).find('.notebook_url');

    $(element).find('.save-button').bind('click', function() {
        var handlerUrl = runtime.handlerUrl(element, 'save_notebook_url');
        var data = {
            'notebook_url': notebookUrl.val()
        };

        $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
            if (response.result === 'success') {
                runtime.notify('save', {state: 'end'});
            }
            else {
                runtime.notify('error', {msg: response.message});
            }
        });
    });

    $(element).find('.cancel-button').bind('click', function() {
        runtime.notify('cancel', {});
    });
}

$(function ($) {
    var checkExist = setInterval(function() {
        if (typeof(runtime) !== "undefined" && typeof(element) !== "undefined") {
            console.log("runtime and element are available now!");
            NotebookViewXBlock(runtime, element);
            clearInterval(checkExist);
        }
    }, 100); // check every 100ms
});
