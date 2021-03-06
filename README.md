<p align="center"><img src="https://miro.medium.com/max/984/1*IHI90aWzUnrcfHDuh08YTg.png" width="400"></p>

# Installation Instructions

Follow these steps to install the application:

- Create a db in PhpMyAdmin
- Duplicate '.env.example' and name it '.env'
- Open .env and set the DB_DATABASE to the db you created

Then cd into the application folder and run the following in your terminal (Git Bash)

- `composer install`
- `npm install`
- `php artisan key:generate`
- `php artisan passport:install`

Then migrate and seed the database:

- `php artisan migrate --seed`

And then initialise, add, and commit to Git:

- `git init`
- `git add .`
- `git commit -am "Initial commit"`

Set your own remote git repo and push your commits

## Element UI - Component Library Installation Instructions

- `npm i element-ui -S`
- Once installed, import `import ElementUI from 'element-ui';`, `import 'element-ui/lib/theme-chalk/index.css';` (For full import. On Demand import available) and `Vue.use(ElementUI);` within main/app.js file to globalise the component library for the project.
- Default language will be in Mandarin. To translate it to English, import `import locale from 'element-ui/lib/locale/lang/en'` and update `Vue.use(ElementUI)` to `Vue.use(ElementUI, { locale })`.
- A custom dark theme has been imported for this project: `npm i -D element-theme-dark`. After installing, import `import 'element-theme-dark';` within the app.js file 
#### (All credits for custom Element UI Dark Theme belongs to Arattian: https://github.com/Arattian/element-theme-dark).
