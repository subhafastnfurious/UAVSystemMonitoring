# UAVSystemMonitoring
Need to have Mongodb installed
https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-ubuntu/

Monitor UAV system using Google Maps
Application need to have preconfigured data in database
Following are the command can be used to load the dump

After cloning the repo 
cd onto UAVSystemMonitoring folder
Then run mongoimport following command to load the mongodb database

$ mongoimport --db UAVSystemMonitoring --collection location_data --type json --file xyz.json --jsonArray

Then run the requirements file(best to create a virtualenv using virtualenv wrapper then run the requirement while environment is active) to install all the django and python related package.

To install virtualenvwrapper and activate (http://virtualenvwrapper.readthedocs.io/en/latest/install.html)

$ pip install -r requirements.txt

NOTE: JS Library are already available from static/lib folder so 'bower install' to install js library not require.
so you can skip following step for js installation.

Installing Node.js and Bower

Download and install Node.js in order to use npm.

Bower is a package manager for third party front-end tools. These packages are stored in the static/lib directory. Install bower with:

$ npm install -g bower

Then execute the following command to install all the javascript library

$ bower install

We are still under UAVSystemMonitoring  folder.
Once all the above steps completed run 


$ python manage.py runserver

Try to access localhost:8000


