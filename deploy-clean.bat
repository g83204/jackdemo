@echo off
echo ========================================
echo 推送純靜態網站到 GitHub
echo ========================================
set /p TOKEN="Token: "
git add .
git commit -m "Pure static site - removed Vercel adapter"
git push https://%TOKEN%@github.com/g83204/jackdemo.git main --force
echo.
echo ========================================
echo 完成！
echo ========================================
echo.
echo 重要：在 Vercel 需要刪除舊專案並重新部署
echo.
echo 步驟：
echo 1. 前往 https://vercel.com
echo 2. 找到舊的 jackdemo 專案
echo 3. Settings -^> Delete Project
echo 4. 回到首頁，點擊 New Project
echo 5. Import jackdemo repository
echo 6. Deploy
echo.
echo 這樣 Vercel 會用新的靜態配置部署
pause
