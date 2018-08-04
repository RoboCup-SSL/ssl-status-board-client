# SSL Status Board - Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

You can find the server component here: https://github.com/RoboCup-SSL/ssl-status-board-server

The status-board is deployed here:
 * http://ssllive.robocup.org
 * https://tigers-mannheim.de/status-board/

## Requirements

 * NPM

## Preparation

Run `npm install` in the project folder to install all required NPM packages to the local `node_modules` folder. You should also update our `PATH` to easily use the installed packages: `export PATH=$PATH:node_modules/.bin`

This project makes use of protobufjs. The `.proto` files were generated and checked into GIT. To update them, run: `npm run genProto`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
