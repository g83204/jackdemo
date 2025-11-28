@echo off
echo 推送 CSS 修復到 GitHub...
set /p TOKEN="請貼上 Token: "
git add .
git commit -m "Fix: Restructure CSS with Tailwind layers for production"
git push https://%TOKEN%@github.com/g83204/jackdemo.git main --force
echo 完成！請等待 Zeabur 重新部署 (3-5 分鐘)
pause
