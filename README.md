# UAVSystemMonitoring
Monitor UAV system using Google Maps
Application need to have preconfigured data in database
Following are the command can be used to load the dump

xyz.json file should be present under same folder from which we are executing the command.

mongoimport --db UAVSystemMonitoring --collection locationData --type json --file xyz.json --jsonArray

Then reun the requirements file
pip install -r requirements.txt


Installing Node.js and Bower

Download and install Node.js in order to use npm.

Bower is a package manager for third party front-end tools. These packages are stored in the static/lib directory. Install bower with:

$ npm install -g bower

Then execute the following command to install all the javascript library
bower install

