# 🚀 完全新手指南：從零開始建立 Astro 網站

> 這份指南假設您是完全的新手，從未接觸過 Node.js 或現代前端開發。

## 📚 目錄

1. [前置準備](#前置準備)
2. [安裝 Node.js](#安裝-nodejs)
3. [建立專案](#建立專案)
4. [啟動網站](#啟動網站)
5. [常見問題](#常見問題)

---

## 前置準備

### 您需要什麼？

- ✅ Windows 10 或 Windows 11 電腦
- ✅ 網路連線
- ✅ 約 30 分鐘時間
- ✅ 基本的電腦操作能力

### 什麼是 Node.js？

**簡單來說：** Node.js 就像是一個「翻譯機」，讓您的電腦能夠理解和執行 JavaScript 程式碼。

**為什麼需要它？** 因為 Astro、React 這些現代網站框架都需要 Node.js 來運行。

---

## 安裝 Node.js

### 方法 1：使用 winget（推薦，最簡單）

**適用於：** Windows 10（最新版）或 Windows 11

#### 步驟：

1. **按下 `Win + X` 鍵**，選擇「Windows PowerShell (管理員)」或「終端機 (管理員)」

2. **複製並貼上以下命令**，然後按 Enter：
   ```powershell
   winget install OpenJS.NodeJS.LTS
   ```

3. **看到提示時**，輸入 `Y` 並按 Enter

4. **等待安裝完成**（約 1-2 分鐘）

5. **完全關閉並重新開啟** PowerShell 或終端機

6. **驗證安裝**，輸入：
   ```bash
   node --version
   npm --version
   ```
   
   如果看到版本號碼（例如 v24.11.1 和 11.6.2），就成功了！✅

---

### 方法 2：手動下載安裝（適用所有 Windows 版本）

#### 步驟：

1. **開啟瀏覽器**，前往 https://nodejs.org/

2. **點擊左邊的綠色按鈕**（LTS 版本，推薦）

   ![Node.js 下載頁面](https://nodejs.org/static/images/logo.svg)

3. **下載完成後**，雙擊 `.msi` 安裝檔

4. **安裝過程中**：
   - 點擊「Next」（下一步）
   - 勾選「I accept the terms...」（我接受條款）
   - 保持所有預設選項
   - 點擊「Install」（安裝）
   - 如果出現「是否允許此應用程式變更您的裝置」，點擊「是」

5. **安裝完成後**，點擊「Finish」（完成）

6. **重新啟動電腦**（重要！）

7. **驗證安裝**：
   - 按下 `Win + R`
   - 輸入 `cmd` 並按 Enter
   - 在黑色視窗中輸入：
     ```bash
     node --version
     npm --version
     ```
   - 如果看到版本號碼，就成功了！✅

---

## 建立專案

### 選項 A：使用現有專案（本專案）

如果您已經有這個專案的所有檔案：

1. **開啟終端機**：
   - 按下 `Win + R`
   - 輸入 `powershell` 並按 Enter

2. **導航到專案資料夾**：
   ```bash
   cd C:\Users\user\Desktop\JACKMODE
   ```

3. **安裝依賴**（這會下載所有需要的套件）：
   ```bash
   npm install
   ```
   
   ⏱️ 這需要 1-3 分鐘，請耐心等待

4. **看到「added XXX packages」就成功了！** ✅

---

### 選項 B：從零開始建立新專案

如果您想自己建立一個新的 Astro 專案：

1. **開啟終端機**

2. **導航到您想建立專案的位置**：
   ```bash
   cd C:\Users\user\Desktop
   ```

3. **建立新的 Astro 專案**：
   ```bash
   npm create astro@latest
   ```

4. **按照提示操作**：
   - 專案名稱：輸入您想要的名稱（例如：my-website）
   - 模板：選擇「Empty」或「Blog」
   - 是否安裝依賴：選擇「Yes」
   - 是否使用 TypeScript：選擇「Yes」（推薦）
   - TypeScript 嚴格度：選擇「Strict」
   - 是否初始化 Git：選擇「Yes」（推薦）

5. **進入專案資料夾**：
   ```bash
   cd my-website
   ```

---

## 啟動網站

### 步驟：

1. **確保您在專案資料夾中**：
   ```bash
   cd C:\Users\user\Desktop\JACKMODE
   ```

2. **啟動開發伺服器**：
   ```bash
   npm run dev
   ```

3. **看到類似這樣的訊息**：
   ```
   🚀 astro v4.x.x ready in XXXms
   
   ┃ Local    http://localhost:4321/
   ┃ Network  use --host to expose
   ```

4. **開啟瀏覽器**，訪問：
   ```
   http://localhost:4321
   ```

5. **🎉 成功！您應該能看到網站了！**

---

## 常見問題

### ❓ 找不到 `npm` 命令

**原因：** Node.js 沒有正確安裝，或環境變數沒有更新

**解決方法：**
1. 重新啟動電腦
2. 重新安裝 Node.js
3. 確認安裝時沒有跳過任何步驟

---

### ❓ `npm install` 很慢或卡住

**原因：** 網路速度慢，或防火牆阻擋

**解決方法：**
1. 耐心等待（可能需要 5-10 分鐘）
2. 檢查網路連線
3. 如果真的卡住，按 `Ctrl+C` 停止，然後重新執行

---

### ❓ 瀏覽器顯示「無法連線」

**原因：** 開發伺服器沒有啟動

**解決方法：**
1. 確認終端機中有顯示「Local http://localhost:4321/」
2. 確認沒有其他錯誤訊息
3. 嘗試重新執行 `npm run dev`

---

### ❓ 修改程式碼後沒有變化

**原因：** 檔案沒有儲存，或瀏覽器快取

**解決方法：**
1. 按 `Ctrl+S` 儲存檔案
2. 在瀏覽器中按 `Ctrl+F5` 強制重新整理
3. 檢查終端機是否有錯誤訊息

---

### ❓ 如何停止開發伺服器？

**方法：** 在終端機中按 `Ctrl+C`

---

### ❓ 如何重新啟動開發伺服器？

**方法：** 
1. 按 `Ctrl+C` 停止
2. 再次執行 `npm run dev`

---

## 🎯 完整流程圖

```
1. 安裝 Node.js
   ↓
2. 驗證安裝 (node --version)
   ↓
3. 導航到專案資料夾 (cd ...)
   ↓
4. 安裝依賴 (npm install)
   ↓
5. 啟動開發伺服器 (npm run dev)
   ↓
6. 在瀏覽器開啟 localhost:4321
   ↓
7. 🎉 開始開發！
```

---

## 📝 常用命令速查表

| 命令 | 用途 | 何時使用 |
|------|------|----------|
| `node --version` | 檢查 Node.js 版本 | 驗證安裝 |
| `npm --version` | 檢查 npm 版本 | 驗證安裝 |
| `npm install` | 安裝依賴 | 首次使用專案，或 package.json 更新後 |
| `npm run dev` | 啟動開發伺服器 | 開始開發 |
| `npm run build` | 建置生產版本 | 準備上線 |
| `Ctrl+C` | 停止伺服器 | 結束開發 |
| `Ctrl+S` | 儲存檔案 | 修改程式碼後 |

---

## 🆘 還是不行？

如果按照以上步驟還是遇到問題：

1. **檢查錯誤訊息**：仔細閱讀終端機中的紅色錯誤訊息
2. **Google 搜尋錯誤**：複製錯誤訊息去 Google 搜尋
3. **重新開始**：刪除 `node_modules` 資料夾，重新執行 `npm install`
4. **尋求協助**：在開發者社群（如 Discord、Stack Overflow）發問

---

## 🎓 下一步學習

當您成功啟動網站後，可以：

1. **修改內容**：編輯 `src/components/` 中的檔案
2. **學習 React**：了解組件的概念
3. **學習 Tailwind CSS**：了解如何設計樣式
4. **學習 Framer Motion**：了解如何添加動畫

---

## ✅ 檢查清單

在開始之前，確認：

- [ ] 已安裝 Node.js
- [ ] 已驗證 `node --version` 和 `npm --version`
- [ ] 已下載或建立專案
- [ ] 已在正確的資料夾中
- [ ] 已執行 `npm install`
- [ ] 已啟動 `npm run dev`
- [ ] 瀏覽器可以訪問 localhost:4321

**全部打勾？恭喜您！您已經成功了！** 🎉

---

**記住：** 每個開發者都是從新手開始的。遇到問題是正常的，重要的是不要放棄！💪
