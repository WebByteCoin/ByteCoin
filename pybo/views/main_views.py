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
    return render_template('api_onworking.html')
    # return redirect(url_for('question._list'))


@bp.route('/itemsite')
def item():
    return render_template('introduce.html')
    # return redirect(url_for('question._list'))

@bp.route('/coinsite')
def coin():
    return render_template('introduce.html')
    # return redirect(url_for('question._list'))
