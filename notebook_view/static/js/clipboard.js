function pasteFromClipboard() {
    if (!navigator.clipboard) {
        console.error('Clipboard API not available');
        return;
    }
    navigator.clipboard.readText()
        .then(text => {
            $('.notebook_url').val(text);  // jQuery equivalent of document.getElementById('notebook_url').value = text;
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
}
