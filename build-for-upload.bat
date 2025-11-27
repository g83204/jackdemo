@echo off
echo ========================================
echo 打包專案準備上傳
echo ========================================
echo.

echo 正在建置專案...
call npm run build

echo.
echo ========================================
echo 建置完成！
echo ========================================
echo.
echo 接下來請：
echo 1. 登入 https://zeabur.com
echo 2. 點擊 New Project
echo 3. 選擇 Upload 或 Manual Deploy
echo 4. 上傳整個 JACKMODE 資料夾
echo.
pause
