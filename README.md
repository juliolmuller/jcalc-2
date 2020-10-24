<h1 align="center">
  :1234: jCalc 2 - My Second Calculator
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-technologies--resources">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bell-setting-up-the-environment">Environment Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-features-implementations">Features</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=426b7c&label=created%20at&message=Apr%202020" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/jcalc-2?label=updated%20at&labelColor=000000&color=426b7c" alt="Update Date" />

  <img src="https://img.shields.io/github/v/tag/juliolmuller/jcalc-2?label=latest%20version&labelColor=000000&color=426b7c" alt="Latest Version" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=426b7c&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/jcalc-2?labelColor=000000&color=426b7c" alt="Project License" />
</p>

![Application snapshot](./src/assets/app-overview.jpg)

Application developed during [Cod3r's official Vue.js course](https://www.udemy.com/course/vue-js-completo/), on Udemy, in order to create a clone of MacOS calculator with Vue.js and the amazing CSS Grid to make development way smoother for elements positioning.

[Check out the application running!](https://juliolmuller.github.io/jcalc-2/)

## :trophy: Lessons Learned

- Vue.js 2 components communication;
- CSS Grid;

## :hammer: Technologies & Resources

**Frontend:**
- Vue.js 2

**Development:**
- Visual Studio Code
- Vue CLI & Node.js routines

## :bell: Setting up the Environment

Make sure to have **Node.js 10+** installed in your machine and its **npm** available in the command line, then use the following routines:

```bash
$ npm install   # Download dependencies
$ npm start     # Run development server
$ npm run build # Build files for production
```

## :zap: Features Implementations

- [ ] Upgrade to Vue 3 and use Composition API;
- [x] Overall layout and design;
- [x] Traditional calculator operations (`+`, `-`, `*`, `/` and *CLEAR*);
- [x] Continuous calculations by pressing `=` repeatedly;
- [ ] Continuous calculations by chaining other operations (without pressing -=`);
- [ ] Support to keyboard input;
- [ ] Support to copy & paste by pressing `Ctrl + C` & `Ctrl + V`;
- [ ] Sounds on typing (with icon to enable/disable);
- [ ] Add automated testing (unit and E2E);
