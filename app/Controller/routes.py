from flask import Blueprint
from flask import render_template
from config import Config

# Create a blueprint for routes
routes_blueprint = Blueprint("routes", __name__)
routes_blueprint.template_folder = Config.TEMPLATE_FOLDER

# Define the index route
@routes_blueprint.route("/", methods=["GET"])
@routes_blueprint.route("/index", methods=["GET"])
def index():
    return render_template("index.html", title="Home")

# Define the about_me route
@routes_blueprint.route("/aboutme")
def about_me():
    return render_template("about_me.html", title="About Me")

# Define the coding_journey route
@routes_blueprint.route("/coding_journey", methods=["GET"])
def coding_journey():
    return render_template("coding_journey.html", title="My Coding Journey")