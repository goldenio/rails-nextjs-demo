# Rails + Next.js

Talk in [COSCUP 2023 Ruby track](https://volunteer.coscup.org/schedule/2023/session/LN8PAN)

Slide in [Speaker Deck](https://speakerdeck.com/tsechingho/gao-dong-react-he-rails-zuo-wei-qian-hou-duan-fen-li-huo-ban-de-ma-fan-shi)

## 0. Environment

```sh
ruby 3.2.2
nodejs 18.16.0
```

## 1. Oauth Provider (Rails)

* 設置 rail server

```sh
cd oauth_provider && bin/setup && cd ..
```

* keep the client_id and client_secret from the screen

## 2. Application (Nextjs)

* 設置 nextjs

```sh
cd nextjs-application && cp .env.local.template .env.local && yarn install && cd ..
```

* Setup .env.local from previous step

## 3. Start

* Start applications

```sh
foreman start -f ./Procfile.dev
```

* Open browser

```sh
open http://localhost:4000
```
