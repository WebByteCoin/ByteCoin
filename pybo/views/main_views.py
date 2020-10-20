from flask import Blueprint, render_template, url_for , request
from datetime import datetime
from ..models import Question , User
from werkzeug.utils import redirect
import mariadb
import sys
bp = Blueprint('main', __name__,url_prefix='/')

def connect_data():
    conn = mariadb.connect(
        user="root",
        password="1234",
        host="localhost",
        port=3306,
        database="d_test"
    )
    return conn




@bp.route('/hello')
def hello_pybo():
    return 'Hello,Pybo'

@bp.route('/api')
def api_loading():
    return render_template('sub_api.html')

@bp.route('/')
def loot():
    return render_template('api_onworking.html')
#     # return redirect(url_for('question._list'))

# @bp.route('/')
# def loot():
#     conn = connect_data()
#     cur = conn.cursor()
#     cur.execute("SELECT nick_name,email,phone FROM reporter")
#     # for (nick_name,email,phone) in cur:
#     #     data = (nick_name,email,phone)
#     #     print(data)
#     # print(data)
#
#     return render_template('/sign/manage.html', data= 1)
#     # return redirect(url_for('question._list'))


@bp.route('/manage')
def manage():
    page = request.args.get('page', type=int, default = 1)
    user_list = User.query.order_by(User.id.desc())
    user_list = user_list.paginate(page, per_page=10)
    return render_template('/sign/manage.html', user_list = user_list)

