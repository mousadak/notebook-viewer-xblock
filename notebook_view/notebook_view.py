from xblock.core import XBlock
from xblock.fields import Scope, String
from xblockutils.studio_editable import StudioEditableXBlockMixin
from web_fragments.fragment import Fragment
import pkg_resources

class NotebookViewXBlock(StudioEditableXBlockMixin, XBlock):
    display_name = String(
        display_name="Display Name",
        default="Notebook view",
        scope=Scope.settings,
    )

    notebook_url = String(
        display_name="Notebook URL",
        default="https://notebooks.bigblue.academy/convert?url=https://drive.google.com/file/d/10DrnFOySyGosAlRu_JAut-7BK3tG2tKo/view?usp=sharing",
        scope=Scope.content,
    )

    editable_fields = ('display_name', 'notebook_url', )

    def student_view(self, context=None):
        """
        The primary view of the notebook_view, shown to students
        when viewing courses.
        """
        html = self.resource_string("static/html/notebook_view.html")
        frag = Fragment(html.format(self=self))
        return frag

    @staticmethod
    def resource_string(path):
        """Handy helper for getting resources from our kit."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    def studio_view(self, context=None):
        """
        The view shown in Studio when editing notebook_view.
        """
        html = self.resource_string("static/html/notebook_view_edit.html")
        frag = Fragment(html.format(self=self))

        frag.add_javascript(self.resource_string("static/js/notebook_view.js"))
        frag.initialize_js('NotebookViewXBlock')
        return frag


    @XBlock.json_handler
    def save_notebook_url(self, data, suffix=''):
        """
        The JSON handler for saving the notebook url.
        """
        self.notebook_url = data['notebook_url']
        return {'result': 'success'}
