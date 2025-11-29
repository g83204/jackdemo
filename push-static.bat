@echo off
echo ========================================
echo 推送靜態網站配置到 GitHub
echo ========================================
set /p TOKEN="Token: "
git add .
git commit -m "Switch to static output for Vercel deployment"
git push https://%TOKEN%@github.com/g83204/jackdemo.git main --force
echo.
echo ========================================
echo 完成！
echo ========================================
echo.
echo 現在前往 Vercel 部署：
echo 1. https://vercel.com
echo 2. 用 GitHub 登入
echo 3. Import jackdemo
echo 4. Deploy
echo.
echo 這次使用靜態輸出，應該能成功部署！
pause
