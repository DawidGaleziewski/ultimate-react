# Developer environment
    *we will use react CLI
    create-react-app

    *we need node and npm for this cli
    *1 step install the app globally on the os
    sudo npm install -g create-react-app

    *2 create app template
        *it accepts the name of the folder of the app as a argument
    create-react-app ultimate-components --use-npm

# the folder structure
    *node_modules: with installed react and reactDOM
    *package.json
        *includes added dependencies
        *scripts
            -added functionalieties by this app:
                -START - starts app in developers mode
                    This includes webpack live reload server.
                    Code is compiled after we apply changes
                -BUILD - creates production ready application
                -TEST - tests by default with JEST
                -EJECT - ejects from the enviroment, if you want to change the config of for example webpack. Better do not use if not used to webpack

            -eslint: finds problems in patterns of our code. I.E ones that do not confirm to centartain style guidelines

            -browserlist: IE is not support by default. If we want to support IE we will need to look into react documentation on polifils

    *public folder - files not compiled during the build process
        Those are static files copied when our application executes
    
        *manifest.json - it is related to react beeing a progressive web app by default

        *index.html - web pack will inject our script into this file

        *src - this folder will store all code that we will write
            create app application does not process files outside of this folder

            *index.js is the starting point of our appilcation

            *React fallows es6 module system and uses imports from other files

            *App.js - bootstraped component that is rendered in index.js

            *App.test.js - sample test

# Clean up the application - delete files we will not need
    *in /src delete all and leave just index.js

    *in index.js remve all index statments just leaving react related ones:

    import React from 'react';
    import ReactDOM from 'react-dom';

    *remove <App /> component from React.render as we no longer use it

# Start react application:
npm run start
This will run our react application
Application will be started on http://localhost:3000/
This is also a live reload server

