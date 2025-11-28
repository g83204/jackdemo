@echo off
echo ========================================
echo 推送 Zeabur 配置檔案
echo ========================================
set /p TOKEN="Token: "
git add .
git commit -m "Add zeabur.json configuration for proper static asset serving"
git push https://%TOKEN%@github.com/g83204/jackdemo.git main --force
echo.
echo ========================================
echo 完成！
echo ========================================
echo.
echo 已添加 zeabur.json 配置檔案
echo 這應該能幫助 Zeabur 正確識別和服務靜態資源
echo.
echo 請等待 Zeabur 重新部署 (3-5 分鐘)
echo 然後強制重新整理網站 (Ctrl + Shift + R)
echo.
pause
