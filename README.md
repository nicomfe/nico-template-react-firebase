React-redux-immutable-starter
=====================

Another React boilerplate project
I couldnt find a simple one with these libraries so I created my own.

## Stack
 - React v15
 - Immutable v3
 - Redux v4
 - Redux-form v6
 - Babel v6
 - Webpack v1.13

## Usage
```
git clone https://github.com/nicomfe/react-redux-immutable-starter.git
cd react-redux-immutable-starter
npm install
npm start
```

## Deploy
In heroku we have configured to run 'npm install' and 'npm run build' so node modules and build files are created on server
So locally we only need to add our changes to heroku repo
```
git add .
git commit -m <MESSAGE>
git push heroku master


To aws
npm run build
aws s3 sync dist/ s3://raccoon-bucket
```
