@echo off
echo ========================================
echo 推送程式碼到 GitHub (修復版)
echo ========================================
echo.

REM 設定 Git 使用者資訊
echo [1/7] 設定 Git 使用者資訊...
git config --global user.email "g83204@github.com"
git config --global user.name "g83204"

REM 刪除舊的 remote（如果存在）
echo [2/7] 清理舊的設定...
git remote remove origin 2>nul

REM 初始化 Git（如果還沒有）
echo [3/7] 初始化 Git...
git init

REM 加入所有檔案
echo [4/7] 加入所有檔案...
git add .

REM 建立 commit
echo [5/7] 建立 commit...
git commit -m "Initial commit with Astro + React + Framer Motion and Zeabur port fix"

REM 設定分支名稱
echo [6/7] 設定分支為 main...
git branch -M main

REM 連接遠端 repository 並推送
echo [7/7] 連接到 GitHub 並推送...
git remote add origin https://github.com/g83204/jackdemo.git
git push -u origin main

echo.
echo ========================================
echo 完成！
echo ========================================
echo.
echo 請前往 https://github.com/g83204/jackdemo 確認檔案已上傳
echo.
pause
