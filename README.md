Dependencies:

sudo pip install mysqlclient


Deploy steps:

python manage.py makemigrations 
python manage.py migrate


Test Steps:

python manage.py test polls