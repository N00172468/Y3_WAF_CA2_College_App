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

<svg height="500" viewBox="0 0 205.035 236.177" width="170" xmlns="http://www.w3.org/2000/svg"><path d="M181.518 103.129l-79 45.463v28.844l79-45.463zm-7-55.514l-72 41.434v28.844l93.498-53.805h-21.498zM103.018 0L.5 58.611 0 176.7l102.018 59.477 102.517-58.61.5-118.087zm.707 28l76.968 44.875-.377 89.096-77.347 44.218L26 161.316l.377-89.095z" fill="#409eff"/></svg>

- `npm i element-ui -S`
- Once installed, import `import ElementUI from 'element-ui';`, `import 'element-ui/lib/theme-chalk/index.css';` (For full import. On Demand import available) and `Vue.use(ElementUI);` within main/app.js file to globalise the component library for the project.
- Default language will be in Mandarin. To translate it to English, import `import locale from 'element-ui/lib/locale/lang/en'` and update `Vue.use(ElementUI)` to `Vue.use(ElementUI, { locale })`.
