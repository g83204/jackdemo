@echo off
echo ========================================
echo 推送到 GitHub (修復版 - 強制推送)
echo ========================================
echo.
echo 請準備好您的 GitHub Personal Access Token
echo Token 格式: ghp_xxxxxxxxxxxx
echo.
set /p TOKEN="請貼上您的 Token: "
echo.

REM 設定 Git 使用者資訊
echo [1/6] 設定 Git 使用者資訊...
git config --global user.email "g83204@github.com"
git config --global user.name "g83204"

REM 清理
echo [2/6] 清理舊設定...
git remote remove origin 2>nul

REM 加入檔案
echo [3/6] 加入所有檔案...
git add .

REM Commit
echo [4/6] 建立 commit...
git commit -m "Initial commit with Astro + React + Framer Motion" 2>nul || echo 沒有新的變更

REM 設定分支
git branch -M main

REM 使用 Token 強制推送
echo [5/6] 連接到 GitHub...
git remote add origin https://%TOKEN%@github.com/g83204/jackdemo.git

echo [6/6] 強制推送到 GitHub (覆蓋遠端)...
git push -u origin main --force

echo.
echo ========================================
echo 完成！
echo ========================================
echo.
echo 請前往 https://github.com/g83204/jackdemo 確認
echo.
pause
