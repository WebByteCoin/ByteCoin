# ---------------------------------------- [edit] ---------------------------------------- #
from flask import Blueprint, render_template  , url_for, request,g
from werkzeug.utils import redirect
from datetime import datetime
from .. import db
from ..models import Question
from ..form import QuestionForm, AnswerForm
from pybo.views.sign_views import login_required
import mariadb
import sys


bp = Blueprint('question', __name__, url_prefix='/question')

def connect_data():
    conn = mariadb.connect(
        user="root",
        password="1234",
        host="localhost",
        port=3306,
        database="d_test"
    )
    return conn


@bp.route('/list/')
def _list():
    p_page = request.args.get('page',type=int,default=1)
    per_page = 10
    limit = (p_page - 1) * 10

    conn = connect_data()
    cur = conn.cursor()
    cur.execute("SELECT count(*) FROM post")
    total_cnt = cur.fetchone()
    total_page = round(total_cnt[0]/per_page) + 2
    cur.execute("SELECT p.p_id,p.title,p.content,r.nick_name,p.reg_date FROM post as p LEFT JOIN reporter as r ON p.reporter = r.r_id ORDER BY p_id DESC limit {},10".format(limit))
    question_list = cur.fetchall()


    return render_template('question/question_list.html', question_list=question_list, lp = total_page,p_page=p_page)


@bp.route('/detail/')
def detail():
    q = request.args.get('q',type=int)
    form = AnswerForm()
    conn = connect_data()
    cur = conn.cursor()
    cur.execute("SELECT title , content , reporter , reg_date , p_id FROM post where p_id = {} ".format(q))
    question = cur.fetchone()
    cur.execute("SELECT nick_name FROM reporter WHERE r_id = {}".format(question[2]))
    reporter = cur.fetchone()
    cur.execute("SELECT a.content, a.reg_date, r.nick_name FROM answer a LEFT JOIN reporter as r ON r.r_id = a.reporter WHERE p_id = {}".format(q))
    answer = cur.fetchall()


    return render_template('question/question_detail.html', question=question, form=form, reporter = reporter , answer = answer)

@bp.route('/create/', methods=('GET','POST'))
@login_required
def create():
    form = QuestionForm()
    if request.method == 'POST' and form.validate_on_submit():
        conn = connect_data()
        cur = conn.cursor()
        cur.execute("SELECT r_id FROM reporter WHERE nick_name = '{}'".format(g.user))
        reporter = cur.fetchone()
        cur.execute("""INSERT INTO d_test.post
(title, content, reporter, reg_date, pub_date)
VALUES('{}','{}', {}, current_timestamp(), NULL);""".format(form.subject.data,form.content.data,reporter[0]))
        conn.commit()
        # question = Question(subject=form.subject.data, content=form.content.data,
        #                     create_date=datetime.now(), user=g.user)
        # db.session.add(question)
        # db.session.commit()
        return redirect(url_for('question._list'))
    return render_template('question/question_form.html', form=form)
