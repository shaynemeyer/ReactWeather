# Simple React Weather App
A simple React application that uses the Open Weather API with Webpack.

#### Install NodeJS
Make sure node is [installed](https://nodejs.org/en/). 

#### Download app
Once you have node installed either clone or download the zip for this repository.

## Getting Started
In a terminal or command line change to the directory where you downloaded the boilerplate.
```
cd yourdirectory
```

### Create Environmental variables
create a file called development.env in the root of your app.

```
mkdir config
touch config/development.env
```

### Add this to your .gitignore file:
```bash
config
```

Make sure you sign up for Open Weather API and get your appid (API Key). Once you have that add it to the env file.

Add the following line to the file:

```
OPENWEATHERKEY=YOUR_API_KEY
```

### Install Dependencies

```
npm install
``` 

### Start the app
Once all the modules have been downloaded, run the app.

```
node server.js
```

### Remove git
To make this your own repo start by removing git and re-initializing it.

Remove git:

```
rm -rf .git
```

Initialize new git:
Make sure you have git [installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). 

```
git init
```

