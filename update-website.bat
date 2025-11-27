@echo off
echo ========================================
echo 更新網站到 GitHub
echo ========================================
echo.
set /p TOKEN="請貼上您的 Token (和之前一樣): "
echo.

git add .
git commit -m "Fix: Enable Tailwind base styles for proper CSS rendering"
git push https://%TOKEN%@github.com/g83204/jackdemo.git main --force

echo.
echo ========================================
echo 完成！Zeabur 會自動重新部署
echo 請等待 3-5 分鐘後重新整理網站
echo ========================================
pause
