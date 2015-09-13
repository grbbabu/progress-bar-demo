# Introduction

This is a demo app which uses RactiveJS to show progress bars and its controls. 

A demo of the application can be found here:

http://scott.maclure.com.au/test/progress-bars-demo.ogv

## Running the application

Clone the Git repo using the following command:

```
git clone https://github.com/grbbabu/progress-bar-demo.git
```

To run the application go to dist/app folder in progress-bar-demo folder and open the index.html file in your browser.

## Developing the application

### Prerequisites

This application assumes that the following are installed locally in your computer.

 1. [Git](https://git-scm.com/downloads%20title=%22Git%22)
 2. [Node.js](https://nodejs.org/en/download/%20title=%22Node.js%22)
 3. Bower (npm install -g bower)
 4. Gulp (npm install -g gulp)
 5. Install [Ruby](https://www.ruby-lang.org/en/downloads/%20title=%22Ruby%22), add it to your path.
 6. Install Sass gem (gem install sass)
 7. Install Compass gem (gem install compass) 

####Running the application

Clone the Git repo using the following command:

```
git clone https://github.com/grbbabu/progress-bar-demo.git
```

Go to progress-bar-demo folder and install the development dependencies as follows:

```
npm install
```

Install the client side dependencies using the following command:

```
bower install
```

Create the distribution files using the following command:

```
gulp
```

To run the application go to dist/app folder and open the index.html file in your browser.

####Running the unit tests

Go to progress-bar-demo folder and run the following commands:

```
karma start
```