from flask import Blueprint, render_template, url_for
from datetime import datetime
from ..models import Question
from werkzeug.utils import redirect

bp = Blueprint('main', __name__,url_prefix='/')



@bp.route('/hello')
def hello_pybo():
    return 'Hello,Pybo'


@bp.route('/')
def loot():
    return render_template('API_loading__example(JS).html')
    # return redirect(url_for('question._list'))

