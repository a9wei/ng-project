# Angular-1-toturial-boilerplate

Angular 1 教學用初始化樣板

## 環境必要
你必須安裝

1. node (主要只是拿來當 server, 為了簡化教學流程，不會使用到 gulp, grunt 等自動化流程)
2. bower (使用 bower 安裝一些第三方套件)

## 初始化專案
執行 npm i  將所需要的 package 安裝下來。
執行 bower install 將所需要的第三方套件下載。

```
npm i
bower install
```


## 起 server

```
npm start
```

或是

```
gulp
```

起 server 後造訪 `http://localhost:8080/`，若有需要換 port，修改 `gulpfile.js` 裡面的設定並且重啟 server。
