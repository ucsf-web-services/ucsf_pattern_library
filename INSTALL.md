# Install NODE and functionality based on it.

Please install these in the order they are listed

## Composer
Please follow the directions for [installing Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) on the Composer website. We recommend you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

## NODE:
To check if you have node installed run
```
node -v
```
Otherwise [click here to install](https://nodejs.org/en/download/)

## NPM:
NPM comes installed with Node.js, but is updated more often so you can check
about that [here](https://docs.npmjs.com/getting-started/installing-node)

If you are running into permission issues, avoid using sudo, [fix the actual 
permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)


## NVM
To check if you have nvm installed run
```
command -v nvm
```
You should expect to see 'nvm' returned as follows:

```
$ command -v nvm
nvm
```
Otherwise [click here to install](https://github.com/creationix/nvm)

## AVN
To check if you have avn installed run
```
avn --version
```
If you do not have AVN installed, run:
```
npm install -g avn avn-nvm
avn setup
```

Then, when you enter this project, the version of Node will be set to the correct
version automatically, if the version defined in .node-version was previously
installed by NVM. AVN will not force NVM to install it automatically, just to 
switch to it if available.

To check what versions are installed you can run
```
nvm ls
```
eg.

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
avn could not activate node 6.10.1
```
In that case, install the required version with NVM:
```
nvm install 6.10.1
```

# Install [@todo: PROJECT NAME]

On the command line, from within this directory, run 

npm install

This should download a load of packages and run without any errors. If errors present please contact [@todo: EMAIL]

To run the server which will process and generate the PatternLab output, run

npm run server
