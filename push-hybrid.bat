@echo off
echo 推送 Hybrid 模式修復...
set /p TOKEN="Token: "
git add .
git commit -m "Fix: Switch to hybrid mode for better static asset serving"
git push https://%TOKEN%@github.com/g83204/jackdemo.git main --force
echo.
echo 完成！等待 Zeabur 重新部署
echo Hybrid 模式會預渲染頁面，應該能解決 404 問題
pause
