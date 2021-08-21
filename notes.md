# Getting Started

## Format

```
1. **command/action** ["explanation from docs"](http://documentation)
    - other notes
```
1. **npm-init** ["create a package.json file"](https://docs.npmjs.com/cli/v6/commands/npm-init)
    - "All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies" (https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)

2. **npm install express mongoose dotenv helmet morgan nodemon** ["installs a package and any packages that it depends on. If the package has a package-lock, or an npm shrinkwrap file, or a yarn lock file, the installation of dependencies will be driven by that"](https://docs.npmjs.com/cli/v7/commands/npm-install)
    - express ["minimal and flexible Node.js web application framework"](https://expressjs.com/)
    - mongoose ["elegant mongodb object modeling for node.js"](https://mongoosejs.com/)
    - dotenv ["a zero-dependency module that loads environment variables from a .env file into process.env"](https://www.npmjs.com/package/dotenv)
    - helmet ["helps you secure your Express apps by setting various HTTP headers"](https://helmetjs.github.io/)
    - morgan ["HTTP request logger middleware for node.js"](https://github.com/expressjs/morgan)
    - nodemon ["a utility ... that will monitor for any changes in your source and automatically restart your server"](https://nodemon.io/)

3. **add** ```"start": "nodemon index.js"``` to the ```"scripts": {}``` section of ```package.json file```
    - might have to close and re-open the terminal here

4. **require** express and create express app in ```index.js```

5. **require** all other libraries (mongoose, dotenv, helmet, and morgan)

### Initialize git repository
and create .gitignore file for .env before creating .env file in step 6

6. **touch .env** in outermost folder

7. **Create a mongoDB cluster**
    - [cloud.mongodb.com](https://cloud.mongodb.com/)
    - **connect**
    - **choose a connection method**
    - **connect your application**
    - **copy** your connection string into your applicaiton code
        - inside ```.env``` file:
        ```MONGO_URL = mongodb+srv://admin:<password>@cluster0.gr94c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority```
        - replace <password> with your actual password
        - replace `myFirstDatabase` with intended database name
8. **add mongoose/mongoDB connection method to index.js** [mongoose docs](https://mongoosejs.com/docs/connections.html)
    - ```mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true})```
    - replace ```mongodb://localhost:27017/myapp``` with ```process.env.MONGO_URL```
    - **add a console.log()** so we can verify the connection 
    ```js
    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, () => {console.log('Connected to MongoDB')})
    ```
    - if the server is running, right now it should say "Backend server is running!" and "Connected to MongoDB"
9. **add middleware**
