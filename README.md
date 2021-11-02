# LIFF Starter

LIFF Starter is a good starter template can help you understand how to integrate LIFF into your own development environment.

You can check the source code and modify it to implement some cool stuff with LIFF API.

## Getting Start

Install dependencies

```sh
$ npm ci
```

You can run local server with:

```sh
$ npm start
```

## Build & Deploy

### Deploy the app using 'Deploy to Netlify' button

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/line/line-liff-v2-starter)

1. Click **Deploy to Netlify** above.
2. On the "Create New App" page in Netlify, fill in the required information.
3. Click **Deploy app**.

### Build and deploy the app with Netlify CLI tools

1. Install Netlify CLI tool from npm.

```sh
$ npm install netlify-cli -g
```

2. Run following command to build project.

```sh
$ LIFF_ID="your LIFF ID" npm run build
```

3. Make sure you have signed in your Netlify account.

```sh
$ netlify login
```

4. Deploy to Netlify

```sh
$ netlify deploy
```

5. Create your site name and choose the source path `dist` to deploy.

6. You can see the stating(draft) site URL, once you confirm it you can deploy it to production stie.

```sh
$ netlify deploy --prod
```

## Demo site

You can also check official site before you trying it.

https://liff-starter.netlify.app

