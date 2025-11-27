# 🚀 Zeabur 部署指南

## ✅ 已完成的修復（最新更新）

您的專案已經配置好可以部署到 Zeabur 了！

### 最新修改（解決 502 錯誤）：

**更新了 `astro.config.mjs`：**
```javascript
server: {
  host: '0.0.0.0',  // 監聽所有網路介面
  port: process.env.PORT ? parseInt(process.env.PORT) : 4321  // 使用 Zeabur 提供的 PORT
}
```

**為什麼需要這個？**
- Zeabur 會動態分配 PORT 環境變數
- 必須監聽 `0.0.0.0` 才能接受外部請求
- 這樣 Zeabur 才能正確路由流量到您的應用

### 之前的修改：

1. **安裝了 Node.js adapter**
   ```bash
   npm install @astrojs/node@^8.0.0
   ```

2. **配置了 server output 模式**
   - `output: 'server'`
   - Node.js adapter with standalone mode

3. **更新了 start 腳本**
   - `"start": "node ./dist/server/entry.mjs"`

---

## 📋 部署步驟

### 方法 1：使用 Git 部署（推薦）

#### 步驟 1：初始化 Git（如果還沒有）

```bash
git init
git add .
git commit -m "Initial commit"
```

#### 步驟 2：推送到 GitHub

1. 在 GitHub 創建新的 repository
2. 執行：
   ```bash
   git remote add origin https://github.com/你的用戶名/JACKMODE.git
   git branch -M main
   git push -u origin main
   ```

#### 步驟 3：在 Zeabur 部署

1. 登入 [Zeabur](https://zeabur.com)
2. 點擊「New Project」
3. 選擇「Deploy from GitHub」
4. 選擇您的 repository
5. Zeabur 會自動偵測為 Astro 專案並開始部署

---

### 方法 2：使用 Zeabur CLI

#### 步驟 1：安裝 Zeabur CLI

```bash
npm install -g @zeabur/cli
```

#### 步驟 2：登入

```bash
zeabur auth login
```

#### 步驟 3：部署

```bash
zeabur deploy
```

---

## 🔧 如果還是出現 502 錯誤

### 檢查清單：

#### 1. **確認 package.json 的 scripts**

確保有正確的 start 腳本：

```json
{
  "scripts": {
    "dev": "astro dev",
    "start": "node ./dist/server/entry.mjs",
    "build": "astro check && astro build",
    "preview": "astro preview"
  }
}
```

#### 2. **檢查環境變數**

在 Zeabur 設定：
- `NODE_VERSION`: `18` 或更高

#### 3. **檢查 Port 設定**

Astro 會自動使用 Zeabur 提供的 PORT 環境變數，不需要額外設定。

#### 4. **查看部署日誌**

在 Zeabur 控制台查看：
- Build logs（建置日誌）
- Runtime logs（運行日誌）

找出具體錯誤訊息。

---

## 🐛 常見問題

### 問題 1：建置失敗

**解決方法：**
```bash
# 清除快取重新建置
rm -rf node_modules dist
npm install
npm run build
```

### 問題 2：運行時錯誤

**檢查：**
- Node.js 版本是否 >= 18
- 所有依賴是否正確安裝
- 環境變數是否設定正確

### 問題 3：靜態資源 404

**確認：**
- `astro.config.mjs` 中的 `output` 設定為 `'server'`
- adapter 正確配置

---

## 📝 部署後的 URL

部署成功後，Zeabur 會提供一個 URL，例如：
```
https://your-project.zeabur.app
```

---

## ✅ 驗證部署

訪問您的 Zeabur URL，應該能看到：
- ✅ 網站正常顯示
- ✅ 所有動畫正常運作
- ✅ 響應式設計正常
- ✅ 所有功能正常

---

## 🔄 更新部署

當您修改程式碼後：

### 使用 Git：
```bash
git add .
git commit -m "Update"
git push
```
Zeabur 會自動重新部署。

### 使用 CLI：
```bash
zeabur deploy
```

---

## 🆘 需要幫助？

如果還是遇到問題，請提供：
1. Zeabur 的建置日誌
2. 運行日誌
3. 具體的錯誤訊息

我可以幫您進一步診斷！
