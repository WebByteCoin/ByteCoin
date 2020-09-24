from flask import Blueprint, render_template, url_for
from datetime import datetime
from ..models import Question
from werkzeug.utils import redirect

bp = Blueprint('main', __name__,url_prefix='/')



@bp.route('/hello')
def hello_pybo():
    return 'Hello,Pybo'

@bp.route('/coin')
def index():
    from .parsing import coinone
    new_coinone = coinone()
    BTC_data = new_coinone.BTC
    ETH_data = new_coinone.ETH

    cat = datetime.now()
    return render_template('p_example.html', Setprice=BTC_data, secondprice=ETH_data, datenow=cat)

@bp.route('/')
def loot():
    return redirect(url_for('question._list'))

@bp.route('/test')
def test():
    return render_template('question/test_parse.html')