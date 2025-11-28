@echo off
echo ========================================
echo 恢復 Server 模式並推送
echo ========================================
set /p TOKEN="Token: "
git add .
git commit -m "Revert to server mode with proper build configuration"
git push https://%TOKEN%@github.com/g83204/jackdemo.git main --force
echo.
echo 完成！等待 Zeabur 重新部署
pause
