<h1 align="center">
  :1234: jCalc 2 - My Second Calculator
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies--resources">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-setting-up-the-environment">Environment Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-features-implementations">Features</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=426b7c&label=created%20at&message=april%202020" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/jcalc-2?label=updated%20at&labelColor=000000&color=426b7c" alt="Update Date" />

  <img src="https://img.shields.io/github/v/tag/juliolmuller/jcalc-2?label=latest%20version&labelColor=000000&color=426b7c" alt="Latest Version" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=426b7c&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/jcalc-2?labelColor=000000&color=426b7c" alt="Project License" />
</p>

![Application snapshot](https://github.com/user-attachments/assets/77ae5a29-d792-48b7-acd1-616c3c533a03)

Application developed during Cod3r's official Vue.js course at Udemy (no longer available), to create a clone of macOS calculator with Vue.js and the amazing CSS Grid to make development way smoother for elements positioning.

[Check out the application running!](https://jcalc2.vercel.app/)

## :trophy: Lessons Learned

- (~~Vue.js 2~~) Vue 3 components communication;
- Vue 3 Composition API & Setup Scripts;
- CSS Grid;

## :rocket: Technologies & Resources

**Frontend:**

- (~~Vue.js 2~~) Vue.js 3

**Development:**

- Visual Studio Code
- (~~Vue CLI~~) Vite

## :hammer: Setting up the Environment

To set up the projects in your environment, make sure to have **Node.js 22+** and **Bun 1.2+** installed on your machine and the `bun` shortcuts available through the command line.

```bash
$ bun install     # download dependencies
$ bun run dev     # run development server
$ bun run build   # build files for production
```

## :zap: Features Implementations

- [x] Upgrade to Vue 3 and use Composition API;
- [ ] Convert project to TypeScript;
- [x] Overall layout and design;
- [x] Traditional calculator operations (`+`, `-`, `*`, `/` and _CLEAR_);
- [x] Continuous calculations by pressing `=` repeatedly;
- [ ] Continuous calculations by chaining other operations (without pressing `=`);
- [ ] Support to keyboard input;
- [ ] Support to copy & paste by pressing `Ctrl + C` & `Ctrl + V`;
- [ ] Sounds on typing (with icon to enable/disable);
- [ ] Add automated testing (unit and E2E);
