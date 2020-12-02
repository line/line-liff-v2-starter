# LIFF v2 starter app

[LINE Front-end Framework (LIFF)](https://developers.line.biz/ja/docs/liff/overview/)の基本的な機能を実演する小さなウェブアプリケーションです。

:earth_americas:  このREADMEを英語で読みたい場合は、こちらのページを参照してください： [English](README.md)

## デプロイ方法

LIFFの使用方法に応じて、デプロイ方法を選択してください。

- LIFFが提供する機能を試してみたいだけなら：[Herokuボタンを使ってターミナルを使わずにアプリをデプロイする](#Herokuボタンを使ってターミナルを使わずにアプリをデプロイする)
- HerokuとNode.jsを使ってLIFFアプリをカスタム化して開発したいなら：[アプリをカスタマイズしてターミナル経由でHerokuにデプロイする](#アプリをカスタマイズしてターミナル経由でHerokuにデプロイする)
- お好みのサーバープラットフォームを使ってLIFFアプリを開発したいなら：[他のサーバープラットフォームを使用する](#他のサーバープラットフォームを使用する)

## Herokuボタンを使ってターミナルを使わずにアプリをデプロイする

以下の手順に従うと、HerokuボタンとNode.jsを使ってLIFF v2 starter appを簡単にデプロイできます。

### 必要なもの

| 項目 | 説明 |
| ---- | ----------- |
| LINEログインチャネル | LINEログインが提供する機能をアプリで利用するための通信路。 チャネルは、[LINE Developers コンソール](https://developers.line.biz/console/register/messaging-api/channel/)で作成できます。 |
| Heroku アカウント（任意） | [Heroku](https://www.heroku.com)は、Webアプリをデプロイできるクラウドサービスです。[他のサーバープラットフォームを使用する](#他のサーバープラットフォームを使用する)場合は、Herokuのアカウントは必要ありません。 |

### 「Deploy to Heroku」ボタンを使ってアプリをデプロイする

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/line/line-liff-v2-starter)

1. 上記の**Deploy to Heroku** ボタンをクリックします。
2. Herokuの「Create New App」ページで、必要事項を入力します。
3. **Deploy app**をクリックします。
4. **View**をクリックしてアプリのデプロイが成功したことを確認します。「You have not assigned any value for LIFF ID」のメッセージが画面に表示されていたらデプロイができています。
5. HerokuアプリのURL（`https://{Herokuアプリ名}.herokuapp.com`）をメモしておいてください。 LIFFにアプリを追加する際に必要になります。

### LIFFにスターターアプリを追加する

1. [LIFFアプリをチャネルに追加する](https://developers.line.biz/ja/docs/liff/registering-liff-apps/)の手順に従ってLIFFアプリをチャネルに追加してください。
2. 次のステップで必要になるので、LIFF IDをメモしておいてください。 LIFF IDはコンソールに表示される**LIFF URL**の最後の部分です： `https://liff.line.me/{liffId}`
3. **Scope**オプションの**編集**ボタンをクリックします。
4. **すべて表示**オプションをクリックして `chat_message.write` を有効にします。このスコープは LIFFアプリがユーザーに代わってメッセージを送信するために必要です。
5. チャネルのステータスが「非公開」の場合、「非公開」ボタンをクリックしチャネルを公開します。

### 環境変数を使用してアプリにLIFF IDを渡す

1. Herokuの[Dashboard](https://dashboard.heroku.com/)を開きます。
2. 作成したアプリを開きます。
3. **Settings**タブで、 **Reveal Config Vars**をクリックします。
4. **KEY**フィールドに`MY_LIFF_ID`を入力し、**VALUE**フィールドにLIFF IDを入力します。
5. **Add**をクリックして入力した内容を保存します。
6. エンドポイントURL（`https://{Herokuアプリ名}.herokuapp.com`）にWebブラウザーからアクセスし、アプリが正しく動作していることを確かめてください。正しく動作していれば、**Open External Window**や**Close LIFF App**などのボタンが表示されます。

アプリを試す方法については、[アプリを試す](#アプリを試す)を参照してください。

### ログを確認する

HerokuのGUIや[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)を使って、アプリのログを確認することができます。

#### HerokuのGUIを使ってアプリのログを確認する

以下の手順に沿ってHerokuのダッシュボードからログを確認できます。

1. Herokuの[ダッシュボード](https://dashboard.heroku.com/)を開きます。
2. 作成したアプリを開きます。
3. 画面右上の**More**をクリックします。
4. **View logs**をクリックします。

**Application Logs**の下にログが表示されます。

#### Heroku CLIを使ってアプリのログを確認する

1. ターミナルからHerokuにログインします。

    ```shell
    $ heroku login
    ```

2. ログを確認します。

    ```shell
    $ heroku logs --app {Heroku app name} --tail
    ```

## アプリをカスタマイズしてターミナル経由でHerokuにデプロイする

以下の手順に従うと、HerokuとNode.jsを使用してカスタマイズしたアプリをデプロイできます。

### ローカルマシンにアプリをインストールする

1. 以下のものがインストールされていることを確認してください。

    - [Git](https://git-scm.com/)
    - [Node.js](https://nodejs.org/en/)
    - [こちら](#必要なもの)に記載されている項目

2. [line-liff-v2-starter](https://github.com/line/line-liff-v2-starter)のGitHubリポジトリをクローンします。

    ```shell
    git clone https://github.com/line/line-liff-v2-starter
    ```
3. `line-liff-v2-starter`ディレクトリに`cd`します。

4. Dependencyをインストールします。

    ```shell
    $ npm install
    ```

### ローカルリポジトリをHerokuに紐づける

1. ターミナルからHerokuにログインします。

    ```shell
    $ heroku login
    ```

2. 名前付きのHerokuアプリを作成します。

    ```shell
    $ heroku create {Heroku app name}
    ```

3. HerokuアプリのURL（`https://{Herokuアプリ名}.herokuapp.com`）をメモしておいてください。 LIFFにアプリを追加する際に必要になります。

4. Herokuのリモートをローカルリポジトリに追加します。

    ```shell
    $ heroku git:remote -a {Heroku app name}
    ```

### LIFFにスターターアプリを追加する

1. [LIFFアプリをチャネルに追加する](https://developers.line.biz/ja/docs/liff/registering-liff-apps/)の手順に従ってLIFFアプリをチャネルに追加してください。
2. 次のステップで必要になるので、LIFF IDをメモしておいてください。 LIFF IDはコンソールに表示される**LIFF URL**の最後の部分です： `https://liff.line.me/{liffId}`
3. **Scope**オプションの**編集**ボタンをクリックします。
4. **すべて表示**オプションをクリックして `chat_message.write`を有効にします。このスコープは LIFFアプリがユーザーに代わってメッセージを送信するために必要です。
5. チャネルのステータスが「非公開」の場合、「非公開」ボタンをクリックしチャネルを公開します。

### ターミナル経由でアプリをカスタマイズしてデプロイする

1. 環境変数を使用してアプリにLIFF IDを渡します

    ```shell
    heroku config:set MY_LIFF_ID={liffId}
    ```

2. ローカル環境でのテスト用に環境変数を`.env`ファイルにコピーします。

    Herokuでは、ローカル環境で環境変数を使用するために`.env`ファイルを設定することが推奨されています。

    ```shell
    $ heroku config:get MY_LIFF_ID -s  >> .env
    ```
    注: `.env`ファイルを GitHub にコミットしないようにしましょう。除外するには、`.env`ファイルを `.gitignore`に追加してください。

3. アプリをカスタマイズします。利用可能なLIFFメソッドの詳細については、[APIリファレンス](https://developers.line.biz/ja/reference/liff/)を参照してください。

4. ローカルでアプリを実行して、変更内容をプレビューします。

    ```shell
    heroku local
    ```
   [localhost:5000](http://localhost:5000/)にアクセスしてアプリの表示を確認できます。

5. 変更内容に問題がなければ、ステージ、コミット、デプロイを行います。

    ```shell
    $ git add .
    $ git commit -m "My first commit"
    $ git push heroku master
    ```
    
6. エンドポイントURL（`https://{Herokuアプリ名}.herokuapp.com`）にWebブラウザーからアクセスし、アプリが正しく動作していることを確かめてください。正しく動作していれば、**Open External Window**や**Close LIFF App**などのボタンが表示されます。

7. 最後に、チャネルのステータスが**公開済み**であることを確認してください。

アプリを試す方法について詳しくは、[アプリを試す](#アプリを試す)を参照してください。

### Herokuログを確認する

HerokuのGUIや[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)を使って、アプリのログを確認することができます。
詳しくは[ログを確認する](#ログを確認する)を参照してください。

## 他のサーバープラットフォームを使用する

以下の手順に従うと、Heroku以外のサーバープラットフォームを使用してアプリをデプロイできます。

### 必要なもの
| Item | Description |
| ---- | ----------- |
| LINEログインチャネル | LINEログインが提供する機能をアプリで利用するための通信路。 チャネルは、[LINE Developers コンソール](https://developers.line.biz/console/register/messaging-api/channel/)で作成できます。 |

### リポジトリをクローンする

1. [line-liff-v2-starter](https://github.com/line/line-liff-v2-starter)リポジトリをクローンします。

    ```shell
    git clone https://github.com/line/line-liff-v2-starter
    ```
    
2. `line-liff-v2-starter`ディレクトリに`cd`します。

### アプリとサーバーの準備をする

1. `public/liff-starter.js`で変数 `useNodeJS`を`false`に設定する。

    ```shell
    const useNodeJS = false;  
    ```

2. レポジトリからHerokuとNode.js固有のファイル（`app.json`、`index.js`、`package.json`、`Procfile`）を削除します。

3. ファイルをウェブサーバーにホストします。

### LIFFにスターターアプリを追加する

1. [LIFFアプリをチャネルに追加する](https://developers.line.biz/ja/docs/liff/registering-liff-apps/)の手順に従ってLIFFアプリをチャネルに追加してください。

2. 次のステップで必要になるので、LIFF IDをメモしておいてください。 LIFF IDはコンソールに表示される**LIFF URL**の最後の部分です： `https://liff.line.me/{liffId}`

3. LIFF IDを `public/liff-starter.js`の変数`defaultLiffId` に設定します。

    ```shell
    const defaultLiffId = "{liffId}"; 
    ```

## アプリを試す

### LINEでアプリを試す

チャットから簡単なリンクを作成することで、LINEでLIFFアプリを開くことができます。

1. LINEのチャットを開き、LIFF URL（`https://liff.line.me/{liffId}`） をメッセージとして送信します。 例えば、LIFF IDが`123456789`の場合、`https://liff.line.me/123456789`というメッセージを送信します。
2. ステップ１で送ったLIFF URLをタップします。
3. LIFFアプリに必要な許可を与えることに同意します。

### ブラウザでアプリを試す

エンドポイントURLをWebブラウザに入力します。例：`https://{Herokuアプリ名}.herokuapp.com`

## アプリの機能

スターターアプリには以下のボタンがあります。 

ℹ️ 一部のボタンは、LINEのアプリ内ブラウザか通常のブラウザでしか利用できません。詳しくは[APIリファレンス](https://developers.line.biz/ja/reference/liff/)を参照してください。

| ボタン | 説明 | [LIFFブラウザ](https://developers.line.biz/ja/glossary/#liff-browser) | [外部ブラウザ](https://developers.line.biz/ja/glossary/#external-browser) |
| ------ | ----------- | :------------: | :---------------: |
| Open External Window | LINEのアプリ内ブラウザで`https://line.me`を開く。 | ✅ | ✅ |
| Close LIFF App  | LIFF アプリを閉じます。 | ✅ | ❌ |
| Open QR Code Reader  | QRコードリーダーを開き、結果を出力します。 <br>⚠️ **技術的な問題により、iOS v9.19.0以降のLINEでは `liff.scanCode()` は現在利用できません。**</br>| ✅ | ❌ |
| Send Message | チャット画面でLIFFアプリを開いている場合、ユーザーに代わってサンプルメッセージを送信します。 | ✅ | ❌ |
| Get Access Token  | 現在のユーザのアクセストークンを取得します。  | ✅ | ✅ |
| Get Profile  | 現在のユーザのプロフィールを取得します。 | ✅ | ✅ |
| Open Share Target Picker | ターゲットピッカー（グループやフレンドを選択する画面）を表示し、選択したターゲットにサンプルメッセージを送信します。  | ✅ | ❌ |
| Log In  | WebアプリのLINEログインを実行します。ユーザーが認証・承認されると、LIFFアプリはアクセストークンやユーザープロファイルなどの情報を取得できるようになります。  | ❌ | ✅ |
| Log Out |  ユーザーをログアウトします。 | ✅ | ✅ |

ボタンに関連するAPIの呼び出しについては、[LIFF APIを呼び出す](https://developers.line.biz/ja/docs/liff/developing-liff-apps#calling-liff-api)を参照してください。

[heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli
[liff-api-ref]: https://developers.line.biz/ja/reference/liff/
[calling-liff-api]: https://developers.line.biz/ja/docs/liff/developing-liff-apps#calling-liff-api
