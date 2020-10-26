from flask import Blueprint, render_template, url_for , request, session ,flash
from datetime import datetime
from ..models import Question , User
from werkzeug.utils import redirect
from werkzeug.security import generate_password_hash, check_password_hash
import mariadb
import sys
import math
from ..form import UpdateForm
bp = Blueprint('information', __name__,url_prefix='/information')

def connect_data():
    conn = mariadb.connect(
        user="root",
        password="1234",
        host="localhost",
        port=3306,
        database="d_test"
    )
    return conn


#회원 정보 수정
@bp.route('/', methods=('GET','POST'))
def information():
    form = UpdateForm()


    p_user_id = session.get('user_id')
    user_id = request.args.get('nick',type=str)


    if p_user_id == user_id:

        if request.method == 'POST' and form.validate_on_submit():
            error = None

            conn = connect_data()
            cur = conn.cursor()
            cur.execute('SELECT pw FROM reporter WHERE nick_name="{}"'.format(user_id))
            password = cur.fetchone()

            if not check_password_hash(password[0],form.password1.data):
                error = "비밀번호가 틀렸습니다."
            else:
                cur.execute('UPDATE reporter SET pw = "{}" WHERE nick_name ="{}"'.format(generate_password_hash(form.password2.data),user_id))
                conn.commit()
                msg = "비밀번호가 변경되었습니다. 변경된 비밀번호로 다시 로그인 해주세요."
                flash(msg)
                session.clear()
                return redirect(url_for('main.loot'))

            flash(error)
            return redirect(url_for('main.loot'))


        conn = connect_data()
        cur = conn.cursor()
        cur.execute('SELECT nick_name, email , phone FROM reporter WHERE nick_name="{}"'.format(user_id))
        information_list = cur.fetchone()

        return render_template('/sign/information.html', user=information_list , form = form)
    else:
        return redirect(url_for('main.loot'))



