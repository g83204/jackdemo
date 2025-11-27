# 🚀 Zeabur 部署指南（菜鳥版）

## ✅ 您的專案已經準備好了！

建置已完成，`dist` 資料夾已生成。

---

## 📋 Zeabur 部署步驟（超詳細）

### 方法：使用 GitHub（最推薦）

雖然 Git 設定有點複雜，但這是最標準的方式。讓我簡化步驟：

#### 步驟 1：創建 GitHub Personal Access Token

1. **開啟瀏覽器，前往：**
   ```
   https://github.com/settings/tokens/new
   ```

2. **填寫表單：**
   - Note: `JACKMODE`
   - Expiration: `90 days`
   - **只勾選一個權限：`repo`**（點擊展開，全部勾選）

3. **點擊底部綠色按鈕** `Generate token`

4. **複製 Token**（格式：`ghp_xxxxxxxxxx`）
   - ⚠️ 只會顯示一次！請立即複製並儲存

#### 步驟 2：推送到 GitHub

1. **雙擊執行** `push-with-token.bat`

2. **當提示輸入 Token 時**：
   - 貼上剛才複製的 Token
   - 按 Enter

3. **等待完成**（約 30 秒）

4. **前往** https://github.com/g83204/jackdemo **確認檔案已上傳**

#### 步驟 3：在 Zeabur 部署

1. **登入** https://zeabur.com

2. **點擊** `New Project`

3. **選擇** `Deploy from GitHub`

4. **授權 Zeabur 訪問 GitHub**（第一次需要）

5. **選擇** `jackdemo` repository

6. **Zeabur 會自動：**
   - 偵測為 Astro 專案
   - 執行 `npm install`
   - 執行 `npm run build`
   - 啟動服務（使用我們配置的 port 設定）

7. **等待 2-5 分鐘**

8. **獲得網址！** 🎉

---

## 🎯 部署成功的標誌

### 在 Zeabur 控制台：

- ✅ Status: `Running`
- ✅ 有一個 URL（例如：`https://your-project.zeabur.app`）
- ✅ Logs 沒有錯誤訊息

### 訪問網站：

- ✅ 能看到您的書局業務網站
- ✅ 所有動畫正常運作
- ✅ 響應式設計正常

---

## 🔧 如果遇到問題

### 問題 1：Token 輸入錯誤

**解決：**
- 重新執行 `push-with-token.bat`
- 確保 Token 完整複製（包含 `ghp_` 開頭）

### 問題 2：GitHub 推送失敗

**解決：**
- 確認 Token 權限包含 `repo`
- 確認 Token 沒有過期

### 問題 3：Zeabur 部署失敗

**檢查：**
- Zeabur 的 Build Logs
- Runtime Logs
- 確認 `astro.config.mjs` 有正確的 port 設定

---

## 📝 重要檔案檢查清單

確認以下檔案存在且正確：

- ✅ `package.json` - 有 `start` 腳本
- ✅ `astro.config.mjs` - 有 `host: '0.0.0.0'` 和 port 設定
- ✅ `dist/` 資料夾 - 建置產物
- ✅ `node_modules/` - 依賴套件

---

## 🎓 學習重點

### 您學到了：

1. **Astro 專案結構**
2. **Node.js adapter 配置**
3. **Port 監聽設定**（重要！）
4. **GitHub Token 認證**
5. **Zeabur 部署流程**

### 核心概念：

```
本地開發 → 建置 → 推送到 GitHub → Zeabur 自動部署 → 網站上線
```

---

## 🚀 下次更新網站

當您修改程式碼後：

1. **執行** `npm run build`（測試建置）
2. **執行** `push-with-token.bat`（推送到 GitHub）
3. **Zeabur 會自動重新部署**

就這麼簡單！

---

## ✨ 恭喜！

完成這些步驟後，您就成功部署了一個：
- ✅ 使用 Astro + React + Framer Motion 的現代網站
- ✅ 有流暢動畫效果
- ✅ 響應式設計
- ✅ 部署在雲端，全世界都能訪問

**您已經是一個會部署網站的開發者了！** 🎉
