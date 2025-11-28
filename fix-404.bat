@echo off
echo 推送靜態資源修復...
set /p TOKEN="Token: "
git add .
git commit -m "Fix: Configure base path and static asset serving for production"
git push https://%TOKEN%@github.com/g83204/jackdemo.git main --force
echo.
echo 完成！等待 Zeabur 重新部署 (3-5 分鐘)
echo 這次應該能解決 404 問題了！
pause
