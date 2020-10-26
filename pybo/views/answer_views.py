from datetime import datetime
from flask import Blueprint, url_for, request, render_template,g
from werkzeug.utils import redirect
from .. import db
from ..models import Question, Answer
from ..form import AnswerForm
from pybo.views.sign_views import login_required
import mariadb
import sys

bp = Blueprint('answer', __name__,url_prefix='/answer')

def connect_data():
    conn = mariadb.connect(
        user="root",
        password="1234",
        host="localhost",
        port=3306,
        database="d_test"
    )
    return conn


#답변 생성
@bp.route('/create/<int:question_id>', methods=('POST',))
@login_required
def create(question_id):
    form = AnswerForm()

    if form.validate_on_submit():
        conn = connect_data()
        cur = conn.cursor()
        content = request.form['content']
        print(question_id,content,g.user,datetime.now())
        cur.execute("SELECT r_id FROM reporter WHERE nick_name = '{}' ".format(g.user))
        reporter = cur.fetchone()
        cur.execute("""INSERT INTO answer
(p_id, content, reporter, reg_date, pub_date)
VALUES({}, '{}', {}, current_timestamp(), NULL);""".format(question_id,content,reporter[0]))
        conn.commit()

        return redirect(url_for('question.detail', q=question_id))
    return render_template('question/question_detail.html', question=question_id, form=form)

