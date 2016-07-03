# UAVSystemMonitoring
Monitor UAV system using Google Maps
Application need to have preconfigured data in database
Following are the command can be used to load the dump

xyz.json file should be present under same folder from which we are executing the command.

mongoimport --db asterialAerospace --collection locationData --type json --file xyz.json --jsonArray

Then reun the requirements file
pip install -r requirements.txt


Need bower package manager to install javascript package
bower install
