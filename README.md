# AngularJS Material-Start 

This Material **start*** project is a *seed* for AngularJS Material applications with Typescript.
The project contains a sample AngularJS application and is pre-configured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

This sample application is skeleton for a typical [AngularJS Material](http://angularjs.org/) web app: comprised of a Side navigation area and a content area.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.
<br>

![Material Starter](https://cloud.githubusercontent.com/assets/210413/6428195/7a0c5386-bf5e-11e4-9989-ab68843b6852.png)


<br/>
> The start app doesn't do much... it just demonstrates how to override a theme and how to use the side navigation component. Try shrinking the window size and watch the sideNav auto-hide. You can temporarily show the sideNav by clicking on the upper left menu button.

## Getting Started

To get you started you can simply clone the material-start repository and install the dependencies:

### Prerequisites

You need git to clone the material-start repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone material-start

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/ngParty/material-start.git
cd material-start
```

If you just want to start a new project without the material-start commit history then you can do:

```bash
git clone --depth=1 https://github.com/ngParty/material-start.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools and angular code we depend upon via `npm`, the [node package manager][npm].

simply do:

```
npm install
```

Behind the scenes this will also call `tsd install` so you get all type definitions.

* `node_modules` - contains the npm packages for the tools and libraries we need
* `typings` - contains angular + angular material type definitions

## Directory Layout

```
app/                    --> all of the source files for the application
  /assets
    app.css             --> default stylesheet
    /svg                --> svg icons
  /common               --> common logic for whole app services,constansts etc..
  /components           --> reusable components
  main.ts               --> main application file which boots angular app
  app.ts                --> root module
  app-config.ts         --> root module config
  app-component.ts      --> root component
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
typings/            --> downloaded type definitions
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool and angular dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.


## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

just simple:

```
npm start
```

### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and webserver(s).

## Contact

For more information on AngularJS please check out http://angularjs.org/
For more information on Angular Material, check out https://material.angularjs.org/

[git]: http://git-scm.com/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/