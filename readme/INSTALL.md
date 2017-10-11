# Installing Pattern Library and its Dependencies

Please install these in the order they are listed.

## Download Pattern Library using your GIT client

Download the Pattern Library to your coding workspace using your favorite GIT client:

    git clone https://github.com/ucsf-web-services/ucsf_pattern_library.git

## Install PHP and Composer
Composer requires PHP 5.3.2+ to run, you need to have a working version of PHP on your development environment, you can check which version of PHP you are running by doing this in a terminal window:
    
    which php

Sample responce: `/Applications/MAMP/bin/php/php7.0.15/bin/php`

If you don't have PHP running, you will need to install PHP for your platform.

* On MacOS you can use MAMP  - [MAMP Website](https://www.mamp.info/en/)
* On Windows you can use XAMPP - [XAMPP Website ](https://www.apachefriends.org)
* On MacOS if you have the BREW package manager you can use `brew install php70` for the latest version
* Into Docker Containers?   Find a container that is right for you  [hub.docker.com/_/php/](https://hub.docker.com/_/php/)

Please follow the directions for [Installing Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) on the Composer website. 
We recommend you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

## Install NODE.JS
To check if you have node installed run

    node -v

Otherwise [click here to install](https://nodejs.org/en/download/)

## Install NPM - Node Package Manager
NPM comes installed with Node.js, but is updated more often so you can check
about that [here](https://docs.npmjs.com/getting-started/installing-node)

If you are running into permission issues, avoid using sudo, [fix the actual 
permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

This is *PRETTY CRITICAL*, your installation will likely fail if you use sudo or root to install these packages. Especially when you run `npm install`


## Install NVM - Node Version Manager
To check if you have nvm installed run

    command -v nvm

You should expect to see 'nvm' returned as follows:


    $ command -v nvm
    nvm

Otherwise [click here to install](https://github.com/creationix/nvm)

## Install AVN - Automatic Version Switching
To check if you have avn installed run

    avn --version

If you do not have AVN installed, run:

    npm install -g avn avn-nvm
    avn setup


Then, when you enter this project, the version of Node will be set to the correct
version automatically, if the version defined in .node-version was previously
installed by NVM. AVN will not force NVM to install it automatically, just to 
switch to it if available.

To check what versions are installed you can run

    nvm ls

which you should see something like this example:

```
$ nvm ls
         v4.5.0
         v5.0.0
         v6.4.0
        v6.10.2
->       v8.0.0
         system
default -> 6.4.0 (-> v6.4.0)
node -> stable (-> v8.0.0) (default)
stable -> 8.0 (-> v8.0.0) (default)
iojs -> N/A (default)
lts/* -> lts/boron (-> N/A)
lts/argon -> v4.8.3 (-> N/A)
lts/boron -> v6.10.3 (-> N/A)

```

If the version is NOT installed you will see an error like

```
avn could not activate node 6.11.4
```
In that case, install the required version with NVM:

    nvm install 6.11.4

Once you have installed the correct version of node you has use `nvm use 6.11.4` to run it in your current session.

# Install UCSF Pattern Library

On the command line, from within this directory, run 

    npm install

This should download a load of packages and run without any errors. 

To run the server which will process and generate the PatternLab output, run

    gulp patternlab:serve

Note: This will run and launch your default web browser when you first run npm install, but if you already have everything installed then you can just run the `gulp patternlab:serve` task on its own and it will start the watching of CSS and other assets in the `source` folder.
