from flask import Blueprint
from flask import render_template
from config import Config

routes_blueprint = Blueprint("routes", __name__)
routes_blueprint.template_folder = Config.TEMPLATE_FOLDER


@routes_blueprint.route("/", methods=["GET"])
@routes_blueprint.route("/index", methods=["GET"])
def index():
    return render_template("index.html",title="Home",)

@routes_blueprint.route("/aboutme")
def about_me():
    return render_template("about_me.html", title="About Me")

@routes_blueprint.route("/coding_journey", methods=["GET"])
def coding_journey():
    return render_template("coding_journey.html", title="My Coding Journey")