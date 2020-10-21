from flask import Blueprint, render_template, url_for , request, session
from datetime import datetime
from ..models import Question , User
from werkzeug.utils import redirect
import mariadb
import sys
import math
bp = Blueprint('main', __name__,url_prefix='/')

def connect_data():
    conn = mariadb.connect(
        user="root",
        password="1234",
        host="localhost",
        port=3306,
        database="dd_test"
    )
    return conn




@bp.route('/api')
def api_loading():
    return render_template('sub_api.html')

@bp.route('/graph')
def graph_loading():
    return render_template('charts.html')

#메인 화면
@bp.route('/')
def loot():
    return render_template('api_onworking.html')



#사이트 소개
@bp.route('/introduce')
def introduce():
    return render_template('introduce.html')


#코인 소개
@bp.route('/introduce_coin')
def introduce_coin():
    return render_template('introduce_coin.html')

# 정보 수정
@bp.route('/information')
def information():
    user_nick = request.args.get("nick",type=str)
    if session == user_nick:
        pass
