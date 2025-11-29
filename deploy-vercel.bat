@echo off
echo ========================================
echo 推送 Vercel 配置到 GitHub
echo ========================================
set /p TOKEN="Token: "
git add .
git commit -m "Switch to Vercel deployment with serverless adapter"
git push https://%TOKEN%@github.com/g83204/jackdemo.git main --force
echo.
echo ========================================
echo 完成！
echo ========================================
echo.
echo 現在請前往 Vercel 部署：
echo 1. 訪問 https://vercel.com
echo 2. 用 GitHub 帳號登入
echo 3. 點擊 "New Project"
echo 4. Import "jackdemo" repository
echo 5. 點擊 "Deploy"
echo 6. 等待 2-3 分鐘
echo 7. 完成！
echo.
pause
