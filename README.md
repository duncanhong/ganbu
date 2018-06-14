1. Install Django
sudo pip install Django

2. Dependencies

sudo pip install mysqlclient

3. DB creation

CREATE DATABASE ganbu DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

4. Create schema

Create data model in modules.py

5. Deploy steps

python manage.py makemigrations polls
python manage.py sqlmigrate polls xxxx
python manage.py migrate

6. Run server

python manage.py runserver 0:8000

7. Test Steps

python manage.py test polls