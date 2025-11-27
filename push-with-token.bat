@echo off
echo ========================================
echo 使用 Token 推送到 GitHub
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

REM 初始化
echo [3/6] 初始化 Git...
git init

REM 加入檔案
echo [4/6] 加入所有檔案...
git add .

REM Commit
echo [5/6] 建立 commit...
git commit -m "Initial commit with Astro + React + Framer Motion"

REM 設定分支
git branch -M main

REM 使用 Token 推送
echo [6/6] 推送到 GitHub...
git remote add origin https://%TOKEN%@github.com/g83204/jackdemo.git
git push -u origin main

echo.
echo ========================================
echo 完成！
echo ========================================
echo.
echo 請前往 https://github.com/g83204/jackdemo 確認
echo.
pause
