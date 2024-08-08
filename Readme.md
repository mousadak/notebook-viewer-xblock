# Notebook View XBlock

This project is a notebook view XBlock for Open edX platform, designed to enable users to insert a link to a Google Drive notebook file. This XBlock also allows users to clear the input box, or cancel and save changes.

## Features

1. __Notebook URL or ID__: An input box where users can paste the Google Drive sharing link to a notebook file.

2. __Clear Button__: A button that allows users to easily clear the input box. When clicked, this button clears any text in the input box and then focuses the cursor back to the input box ready for user input.

3. __Cancel Button__: This button cancels any changes made and reloads the page to its original state.

4. __Save Button__: After inserting or changing the URL, users can save their changes by clicking this button. The page will reload to reflect the saved changes.

## Instructions

1. _Paste the file's Google Drive sharing link into the box_: Users should paste the Google Drive sharing link of the notebook file into the provided input box.

2. _Clear_: To clear any text present in the input box, click the 'Clear' button. After the text is cleared, the cursor will focus back on the input box ready for input.

3. _Cancel_: Clicking the 'Cancel' button will discard any unsaved changes and reload the page.

4. _Save_: After pasting or modifying the Google Drive sharing link, click 'Save' to apply the changes. The page will reload reflecting the updated URL.

This XBlock provides a simple and efficient way for course creators to embed links to notebook files in their Open edX courses.

Please note, changes will not be saved until the 'Save' button is clicked. If you wish to discard any unsaved changes, simply click the 'Cancel' button.

## Installation

Use the following commands to install the Notebook View XBlock:

```bash
cd /edx/app/edxapp/venvs/edxapp/local/lib/python2.7/site-packages
sudo rm -r notebook_view_xblock-0.1.dist-info
sudo rm -r notebook_view
```

Then, run the following commands to copy the project, install the XBlock and restart the LMS and CMS:

```bash
rsync -avz --delete --delete-during /Users/mousadak/projects/notebook-viewer-xblock ubuntu@88.198.158.181:~/
cd /notebook-viewer-xblock
sudo -H /edx/bin/pip.edxapp install --upgrade --no-deps --force-reinstall .
/edx/bin/supervisorctl restart lms cms
```

To check the logs, use the following commands:

```bash
sudo tail -n 30 /edx/var/log/cms/edx.log
sudo tail -n 30 /edx/var/log/lms/edx.log
```

#### Use in advanced settings "notebook_view" to enable the xblock