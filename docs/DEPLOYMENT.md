# 部署指南

本指南說明如何將 AI 台灣旅遊指南部署到各種平台。

---

## 目錄

- [部署前準備](#部署前準備)
- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [自訂伺服器](#自訂伺服器)
- [環境變數](#環境變數)
- [效能優化](#效能優化)

---

## 部署前準備

### 檢查清單

- [ ] 所有功能測試通過
- [ ] 沒有控制台錯誤
- [ ] 圖片和資源正確載入
- [ ] API 呼叫正常運作
- [ ] 響應式設計在各裝置上正常
- [ ] 深色模式正常運作
- [ ] 所有連結有效

### 建議的測試流程

1. **功能測試**
   ```javascript
   // 在瀏覽器控制台運行
   await runAllTests()
   ```

2. **跨瀏覽器測試**
   - Chrome
   - Firefox
   - Safari
   - Edge

3. **行動裝置測試**
   - iOS Safari
   - Android Chrome

4. **效能測試**
   - 使用 Lighthouse 檢查效能分數
   - 目標：Performance > 90

---

## GitHub Pages

### 優點
- ✅ 完全免費
- ✅ 自動 HTTPS
- ✅ 與 GitHub 整合
- ✅ 簡單易用

### 缺點
- ❌ 只支援靜態網站
- ❌ 有流量限制

### 部署步驟

1. **準備 Repository**
   ```bash
   # 確保在 main 分支
   git checkout main
   git pull origin main
   ```

2. **啟用 GitHub Pages**
   - 前往 Repository Settings
   - 找到 "Pages" 區域
   - Source 選擇 "main" 分支
   - 選擇 "/ (root)" 資料夾
   - 點擊 "Save"

3. **等待部署**
   - 通常需要 1-2 分鐘
   - 部署完成後會顯示網址

4. **自訂網域** (可選)
   - 在 "Custom domain" 輸入您的網域
   - 設定 DNS CNAME 記錄指向 `username.github.io`

### GitHub Actions 自動部署

建立 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## Netlify

### 優點
- ✅ 免費方案慷慨
- ✅ 自動 HTTPS
- ✅ 持續部署
- ✅ 表單處理
- ✅ 無伺服器函數

### 缺點
- ❌ 免費方案有頻寬限制

### 部署步驟

#### 方法 1: 透過 Git

1. **連接 Repository**
   - 登入 [Netlify](https://www.netlify.com/)
   - 點擊 "New site from Git"
   - 選擇 GitHub
   - 選擇您的 Repository

2. **設定建置**
   - Build command: (留空)
   - Publish directory: `/`
   - 點擊 "Deploy site"

3. **自訂網域** (可選)
   - 前往 "Domain settings"
   - 點擊 "Add custom domain"
   - 按照指示設定 DNS

#### 方法 2: 拖放部署

1. 前往 [Netlify Drop](https://app.netlify.com/drop)
2. 將專案資料夾拖放到頁面
3. 等待上傳完成

### netlify.toml 配置

建立 `netlify.toml`:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## Vercel

### 優點
- ✅ 極快的 CDN
- ✅ 自動 HTTPS
- ✅ 無伺服器函數
- ✅ 預覽部署

### 缺點
- ❌ 免費方案有限制

### 部署步驟

1. **安裝 Vercel CLI** (可選)
   ```bash
   npm install -g vercel
   ```

2. **透過 CLI 部署**
   ```bash
   cd ai-travel-guide-taiwan
   vercel
   ```

3. **或透過網頁介面**
   - 登入 [Vercel](https://vercel.com/)
   - 點擊 "New Project"
   - 匯入 GitHub Repository
   - 點擊 "Deploy"

### vercel.json 配置

建立 `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 自訂伺服器

### Nginx

#### 安裝 Nginx

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
```

#### 配置

建立 `/etc/nginx/sites-available/travel-guide`:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/travel-guide;
    index index.html;

    # Gzip 壓縮
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # 快取靜態資源
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA 路由
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 安全標頭
    add_header X-Frame-Options "DENY";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
}
```

#### 啟用網站

```bash
sudo ln -s /etc/nginx/sites-available/travel-guide /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### SSL 憑證 (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Apache

#### 配置

建立 `/etc/apache2/sites-available/travel-guide.conf`:

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/travel-guide

    <Directory /var/www/travel-guide>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Gzip 壓縮
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
    </IfModule>

    # 快取
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType image/jpg "access plus 1 year"
        ExpiresByType image/jpeg "access plus 1 year"
        ExpiresByType image/png "access plus 1 year"
        ExpiresByType text/css "access plus 1 month"
        ExpiresByType application/javascript "access plus 1 month"
    </IfModule>
</VirtualHost>
```

#### .htaccess

建立 `.htaccess`:

```apache
# 啟用 Rewrite
RewriteEngine On

# SPA 路由
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]

# 安全標頭
Header set X-Frame-Options "DENY"
Header set X-Content-Type-Options "nosniff"
Header set X-XSS-Protection "1; mode=block"
```

---

## 環境變數

### 使用環境變數

雖然這是純前端應用，但可以使用建置時環境變數：

#### Netlify

在 Netlify Dashboard:
1. 前往 "Site settings" → "Build & deploy" → "Environment"
2. 添加變數

#### Vercel

```bash
vercel env add GEMINI_API_KEY
```

#### GitHub Actions

在 Repository Settings → Secrets 添加:
```yaml
env:
  GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
```

---

## 效能優化

### 1. 啟用 Gzip/Brotli 壓縮

#### Nginx
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
```

#### Apache
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

### 2. 設定快取標頭

```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. 使用 CDN

#### Cloudflare

1. 註冊 [Cloudflare](https://www.cloudflare.com/)
2. 添加您的網域
3. 更新 DNS 伺服器
4. 啟用 CDN 和快取

### 4. 圖片優化

```bash
# 使用 ImageOptim 或 TinyPNG 壓縮圖片
# 使用 WebP 格式
```

### 5. 程式碼壓縮

雖然使用 ES6 模組，但可以考慮：

```bash
# 使用 Terser 壓縮 JavaScript
npx terser js/main.js -o js/main.min.js

# 使用 cssnano 壓縮 CSS
npx cssnano css/base.css css/base.min.css
```

### 6. 預載入關鍵資源

在 `index.html` 中:

```html
<link rel="preload" href="css/base.css" as="style">
<link rel="preload" href="js/main.js" as="script">
<link rel="dns-prefetch" href="https://generativelanguage.googleapis.com">
```

### 7. 延遲載入圖片

```html
<img src="image.jpg" loading="lazy" alt="描述">
```

---

## 監控與分析

### Google Analytics

在 `index.html` 中添加:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Sentry 錯誤追蹤

```html
<script src="https://browser.sentry-cdn.com/7.x.x/bundle.min.js"></script>
<script>
  Sentry.init({
    dsn: 'YOUR_DSN',
    environment: 'production'
  });
</script>
```

---

## 安全性

### 安全標頭

```nginx
add_header X-Frame-Options "DENY";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;";
```

### HTTPS

- 使用 Let's Encrypt 免費 SSL 憑證
- 強制 HTTPS 重定向

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}
```

---

## 持續整合/持續部署 (CI/CD)

### GitHub Actions 完整範例

`.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      
      - name: Run tests
        run: |
          # 這裡可以添加測試命令
          echo "Running tests..."

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## 故障排除

### 常見問題

#### 1. 404 錯誤

**原因**: SPA 路由未正確配置

**解決**:
- GitHub Pages: 添加 `404.html` 重定向到 `index.html`
- Netlify: 使用 `_redirects` 或 `netlify.toml`
- Nginx: 配置 `try_files`

#### 2. CORS 錯誤

**原因**: API 請求被 CORS 政策阻擋

**解決**:
- 確保 API 端點支援 CORS
- 使用代理伺服器

#### 3. 資源載入失敗

**原因**: 路徑錯誤或 CDN 問題

**解決**:
- 檢查資源路徑
- 使用絕對路徑或相對路徑
- 檢查 CDN 可用性

---

## 檢查清單

部署前最後檢查:

- [ ] 所有測試通過
- [ ] 沒有控制台錯誤或警告
- [ ] 圖片正確載入
- [ ] API 呼叫正常
- [ ] 響應式設計正常
- [ ] 深色模式正常
- [ ] 所有連結有效
- [ ] SEO 標籤完整
- [ ] 效能分數 > 90
- [ ] 安全標頭已設定
- [ ] HTTPS 已啟用
- [ ] 監控已設定

---

## 參考資源

- [GitHub Pages 文檔](https://docs.github.com/en/pages)
- [Netlify 文檔](https://docs.netlify.com/)
- [Vercel 文檔](https://vercel.com/docs)
- [Nginx 文檔](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)

---

**祝部署順利！🚀**
