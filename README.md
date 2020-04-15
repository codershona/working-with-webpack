### Working with WEBPACK :

```
    - Webpack and creating a workflow : A Primer ;

    * What is Webpack ? 

    ANS: -  JS+JS+JS ---> Analyzes Connections and Bundles/Optimizes Everything -----> bundle.js  ;

    -  CSS+CSS ----> Analyzes Connections and Bundles/Optimizes Everything ---> bundle.css ;

    - JPG+PNG ----> Analyzes Connections and Bundles/Optimizes Everything ----> Optimized JPG + Optimizied PNG ;

    * How it Works ? 

    ANS: - Multiple Entry Points are Possible ---> entry (e.g. app.js) ;

    - File-type dependent transformations ---> Loaders(e.g. babel-loader, css-loader);

    - Global transformations ----> Plugins(e.g. uglify) ;

    - Correctly ordered, concatenated output ----> output(e.g. dist/bundle.js) ;

    * Basic Workflow Requirements :

    ANS : -  Complie Next-Gen Javascript Features ;
    - Handle JSX ;
    - CSS Autoprefixing ;
    - Support Image Imports ;
    - Optimize Code ;

    



```

### Project & npm setup:

```
    - check gitignore file ;
    - run : npm init ;
    - run this: npm install --save-dev webpack webpack-dev-server ;
    
    * Installing Production Dependencies : npm install --save react react-dom react-router-dom ;

    - run this : npm install ;
    - if you run : npm start  it will show errors;
    - So, run : npm install --save-dev webpack-cli ;
    - Then run again : npm start (but again showing errors) ;
    - In this case, we need to create webpack.config.js file to configuration our package ;

    - then run this: npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-stage-2 babel-loader @babel/plugin-proposal-class-properties ;

    - Loading CSS File : run this --->  npm install --save-dev style-loader css-loader ;

    - Then run this : npm install --save-dev postcss-loader ;
    - Then run this : npm install --save-dev autoprefixer ;
    - 


```