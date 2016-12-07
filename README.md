[![Build Status](https://travis-ci.org/junior-comtec/jcd-ev.svg?branch=master)](https://travis-ci.org/junior-comtec/jcd-ev)

# Junior Comtec e.V. Website

## Development Links
* https://middlemanapp.com/basics/install/
* https://getbootstrap.com

## Install Middleman

Install the necessary dependencies via ``$ bundle install``

## Deployment

Just push to the master branch - travis-ci will deploy automatically.     
When the FTP-Credentials change you simply have to modify the Environment Variables on https://travis-ci.org/junior-comtec/jcd-ev/settings.


### Without Travis
You have to configure the env-Variables "USER" and "PW" to access the FTP-Server

* build the new website version ``$ middleman build [--clean]``
* deploy to server ``middleman deploy``

## Misc

You can change the countdown configuration in `jcd-ev/data/configuration.json`.      
If you want to make changes to the website, you have to become a collaborator for the repository. Once you have access you can modify the content with github. 
