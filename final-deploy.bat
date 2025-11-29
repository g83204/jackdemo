@echo off
echo ========================================
echo 推送到 GitHub 並在 Vercel 部署
echo ========================================
set /p TOKEN="Token: "
git add .
git commit -m "Configure for Vercel deployment"
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
pause
