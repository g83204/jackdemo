# 🚀 Vercel 部署指南

## ✅ 已完成配置

您的專案已經配置好可以部署到 Vercel 了！

### 修改內容：
- 安裝了 `@astrojs/vercel` adapter
- 更新了 `astro.config.mjs` 使用 Vercel adapter
- 創建了 `vercel.json` 配置檔案

---

## 📋 Vercel 部署步驟

### 步驟 1：推送到 GitHub

**執行 `deploy-vercel.bat`** 並貼上您的 Token

### 步驟 2：在 Vercel 部署

1. **開啟瀏覽器，前往** https://vercel.com

2. **登入**
   - 點擊右上角 "Sign Up" 或 "Login"
   - 選擇 "Continue with GitHub"
   - 授權 Vercel 訪問您的 GitHub

3. **創建新專案**
   - 點擊 "Add New..." → "Project"
   - 或直接點擊 "Import Project"

4. **選擇 Repository**
   - 在列表中找到 `jackdemo`
   - 點擊 "Import"

5. **配置專案**（通常不需要修改）
   - Framework Preset: Vercel 會自動偵測為 "Astro"
   - Build Command: `npm run build`
   - Output Directory: `.vercel/output`
   - Install Command: `npm install`

6. **部署！**
   - 點擊 "Deploy" 按鈕
   - 等待 2-3 分鐘

7. **完成！**
   - 部署成功後，Vercel 會給您一個 URL
   - 例如：`https://jackdemo-xxx.vercel.app`
   - 點擊 URL 訪問您的網站

---

## ✨ Vercel 的優勢

- ✅ **自動偵測 Astro**：無需手動配置
- ✅ **靜態資源正確服務**：不會有 404 問題
- ✅ **全球 CDN**：訪問速度快
- ✅ **自動 HTTPS**：免費 SSL 證書
- ✅ **自動部署**：每次 push 到 GitHub 都會自動重新部署
- ✅ **免費額度高**：個人專案完全夠用

---

## 🎯 部署後驗證

訪問 Vercel 提供的 URL，您應該看到：
- ✅ 完整的樣式（咖啡色系配色）
- ✅ 中文字體正確顯示
- ✅ 所有 Framer Motion 動畫
- ✅ 響應式設計正常
- ✅ 所有互動功能正常

---

## 🔄 未來更新網站

當您修改程式碼後：

1. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "Update"
   git push
   ```

2. **Vercel 自動部署**
   - Vercel 會自動偵測 GitHub 的更新
   - 自動重新建置和部署
   - 約 2-3 分鐘完成

---

## 🆘 需要幫助？

如果遇到問題：
1. 檢查 Vercel 的 Deployment Logs
2. 查看 Build Logs 是否有錯誤
3. 確認 GitHub repository 已正確推送

---

**恭喜！您即將成功部署您的 Astro 網站到 Vercel！** 🎉
