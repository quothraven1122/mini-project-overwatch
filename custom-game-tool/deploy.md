1. install gh-pages package

```
cd /path/to/your-app
npm install gh-pages --save-dev
```

2. update package.json

- Add homepage property at the top level

```
  "homepage": "https://{your-username}.github.io/{repo-name}"

```

- Add deployment scripts under scripts

```"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. push project to github

```
git add .
git commit -m "Prepare for deployment"
git push origin main
```

4. deploy

```
npm run deploy
```

---

Homepage url would be https://quothraven1122.github.io/mini-project-overwatch

To update deployed website to current commit, run

```
npm run deploy
```
