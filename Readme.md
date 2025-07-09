### Basic Mern App

##### Backend setup 

```bash
cd Backend
npm init -y (To set package.json file)
npm install express mongoose dotenv cors nanoid (dependencies)
node server.js (run cmd)

```

##### Frontend Setup

```bash
cd Frontend
npm create vite@latest (To create react app using vite tool)
npm install axios (dependency to communicate with backend)
npm run dev (run cmd)

```

###### Git Essential

```bash
git remote add origin https://github.com/ErGovindthakur/Test.git
git remote -v


git checkout main
git pull origin master --allow-unrelated-histories

## when you will not be able to merge with remote branch do it
git fetch origin
git branch -a
git add .
git commit -m "solve git issues"
git checkout -b main origin/main
git merge master
git merge master --allow-unrelated-histories
git push origin main

## Now Job Done
```
