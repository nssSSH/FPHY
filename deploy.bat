@echo off
echo  Building FPHY...
call npm run docs:build


cd .vitepress\dist

git init
git checkout -b pages
git add .
git commit -m "deploy: local production build"

git push --force https://codeberg.org/nssSSH/FPHY.git pages 

cd ..\..
rmdir /s /q .vitepress\dist\.git

echo  Deployment complete. Site will update in a minute.
pause