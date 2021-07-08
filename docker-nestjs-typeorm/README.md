## docker コマンド

- ビルド
  docker-compose build

- 起動
  docker-compose up
  docker-compose up -d

- 停止
  docker-compose down

- app コンテナへログイン
  docker exec -it nestjs_typeorm_server sh

- mysql コンテナへログイン
  docker exec -it nestjs_typeorm_db mysql -u root -p

## nestjs コマンド

- モジュールの追加
  nest g mo ドメイン名

- コントローラーの追加
  nest g co ドメイン名

- サービスの追加
  nest g s ドメイン名

## 参考

- https://qiita.com/daikiojm/items/a35065e0b691f878d53c
- https://area-b.com/blog/2018/09/16/1600/
