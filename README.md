# 環境構築

ステップ１

```
git clone https://github.com/tech-quest/blog_modal.git
```

ステップ２

```
docker-compose up
```

docker環境に変更があった時

```
docker-compose up --build
```

# ページ紹介

php

```
localhost:8080
```

myadmin

```
localhost:3306
```

# 設定を変更したい

```
localhost:8080をhtmlが表示されるようにしたい -> nginx/default.conf 4行目を index index.htmlにする。
```
