@echo off
npm run build
git add .
git commit -m "changes made"
git push -u origin main
