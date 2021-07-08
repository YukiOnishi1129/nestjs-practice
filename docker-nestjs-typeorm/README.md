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
