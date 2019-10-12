# LIFF v2 starter app

This is a small web application that demonstrates the basic functionality of the [LINE Front-end Framework (LIFF)](https://developers.line.biz/en/docs/liff/overview/). 

## Deploy methods

Depending on how you want to use LIFF, choose one of these methods for deploying the LIFF v2 starter app:

- If you merely want to try the functions LIFF offers, see [Use Heroku button to deploy the app without using the terminal](#Use-Heroku-button-to-deploy-the-app-without-using-the-terminal)
- If you want to develop a LIFF app using Heroku and Node.js, see [Customize the app and deploy it on Heroku via the terminal](#Customize-the-app-and-deploy-it-on-Heroku-via-the-terminal)
- If you want to develop a LIFF app using a server platform of your choice, see [Use any other server platform](#deploy-the-app-using-any-other-server-platform)

## Use Heroku button to deploy the app without using the terminal

Follow the below instructions to deploy your app using the Heroku button and Node.js without customization.

### What you'll need

| Item | Description |
| ---- | ----------- |
| LINE Messaging API channel  | A channel forms the connection between your app and the LINE Platform. Create a channel on the [LINE Developers console](https://developers.line.biz/console/register/messaging-api/channel/). |
| Heroku account (optional) | [Heroku](https://www.heroku.com) is a cloud service that lets you deploy and serve web apps for free. You don't need a Heroku account if you're [deploying the app on another platform](#deploy-the-app-using-any-other-server-platform). |

### Deploy the app using 'Deploy to Heroku' button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/line/line-liff-v2-starter)

1. Click **Deploy to Heroku** above.
2. On the "Create New App" page in Heroku, fill in the required information.
3. Click **Deploy app**.
4. Click **View** to confirm that your app is successfully deployed. You should see a page with the text "You have not assigned any value for LIFF ID". 
5. Take a note of your app's URL (`https://{Heroku app name}.herokuapp.com`). You'll need it when you add the app to LIFF.

### Add the starter app to LIFF

1. Follow the instructions on the page [Adding a LIFF app](https://developers.line.biz/en/docs/liff/registering-liff-apps/). 
2. Take a note of your LIFF ID, because you'll need it for the next part. The LIFF ID is the final part of the LIFF URL shown in the console: `line://app/{liffId}`.

### Pass your LIFF ID to the app using an environment variable

1. In Heroku, go to [Dashboard](https://dashboard.heroku.com/).
2. Select your app.
3. On the **Settings** tab, click **Reveal Config Vars**.
4. Enter a new key called `MY_LIFF_ID` with your LIFF ID as the value.
5. Click **Add** to save.
6. Browse back to your app's URL (`https://{Heroku app name}.herokuapp.com`) and confirm that your app is operational. You should see a number of buttons, such as **Open External Window** and **Close LIFF App**.

For more information about how to try the app, see [Trying the app](#trying-the-app).

### Checking logs

To get more information, you can check your app's logs using Heroku's GUI or [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

#### Check your app's logs using Heroku's GUI

To get more information, check your app's logs online:

1. In Heroku, go to [Dashboard](https://dashboard.heroku.com/).
2. Select the app you just created.
3. In the top-right corner, click **More**.
4. Click **View logs**. 

You'll find the log under **Application Logs**.

#### Check your app's logs using Heroku CLI

1. Log in to Heroku from the command line (if you haven't already).

    ```shell
    $ heroku login
    ```

2. Check the logs.

    ```shell
    $ heroku logs --app {Heroku app name} --tail
    ```


## Customize the app and deploy it on Heroku via the terminal

Follow the below instructions to deploy your customized app using Heroku and Node.js.

### Install the app on your local machine

1. Make sure you have the following installed.

    - [Git](https://git-scm.com/)
    - [Node.js](https://nodejs.org/en/)
    - Items listed [here](#what-youll-need)

2. Clone the [line-liff-starter](https://github.com/line/line-liff-v2-starter) GitHub repository.

    ```shell
    git clone https://github.com/line/line-liff-v2-starter
    ```
3. `cd` into `line-liff-v2-starter` directory.

4. Install the dependencies by running:
    ```shell
    $ npm install
    ```

### Link your local repository to Heroku

1. Log in to Heroku from the command line.

    ```shell
    $ heroku login
    ```

2. Create a named Heroku app.

    ```shell
    $ heroku create {Heroku app name}
    ```

3. Take a note of your app's URL (`https://{Heroku app name}.herokuapp.com`). You'll need it when you add the app to LIFF.

4. Add a remote for Heroku to your local repository.

    ```shell
    $ heroku git:remote -a {Heroku app name}
    ```

### Add the starter app to LIFF

1. Follow the instructions on the page [Adding a LIFF app](https://developers.line.biz/en/docs/liff/registering-liff-apps/). 
2. Take a note of your LIFF ID, because you'll need it for the next part. The LIFF ID is the final part of the LIFF URL shown in the console: `line://app/{liffId}`

### Customize and deploy the app via terminal

1. Set your LIFF ID using an environment variable for local testing.

    Heroku recommends setting up an `.env` file to use an environment variable in a local environment.
    ```shell
    $ heroku config:get MY_LIFF_ID={liffId} -s  >> .env
    ```
    Note: Don't commit the `.env` file to GitHub. To exclude it, add the `.env` file to your `.gitignore`.

2. Customize your app. For more information about available LIFF methods, see [API reference](https://developers.line.biz/en/reference/liff/). 

3. Run the app locally to preview your changes:

    ```shell
    heroku local
    ```
   View the app by browsing to [localhost:5000](http://localhost:5000/).

4. Set your LIFF ID using an environment variable for production.

    ```shell
    heroku config:set MY_LIFF_ID={liffId}
    ```

5. If you're happy with your changes, stage, commit, and deploy the app.

    ```shell
    $ git add .
    $ git commit -m "My first commit"
    $ git push heroku master
    ```
    
 6. Browse to your app's URL (`https://{Heroku app name}.herokuapp.com`) and confirm that your app is operational. You should see a number of buttons, such as **Open External Window** and **Close LIFF App**.

For more information about how to try the app, see [Trying the app](#trying-the-app).

### Checking logs

To get more information, check your app's logs using Heroku's GUI or [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
Refer to [this section](#checking-logs) for more information.

## Deploy the app using any other server platform

Follow the below instructions to deploy your app using the server platform of your choice.

### Prerequisites
| Item | Description |
| ---- | ----------- |
| LINE Messaging API channel  | A channel forms the connection between your app and the LINE Platform. Create a channel on the [LINE Developers console](https://developers.line.biz/console/register/messaging-api/channel/). |


### Clone the repository

1. Clone the [line-liff-starter](https://github.com/line/line-liff-v2-starter) repository.

    ```shell
    git clone https://github.com/line/line-liff-v2-starter
    ```
    
2. `cd` into `line-liff-v2-starter` directory.

### Prepare your app and server

1. Set the `useNodeJS` variable to `false` in `public/liff-starter.js`.

    ```shell
    const useNodeJS = false;  
    ```
2. Remove Heroku and Node.js specific files (`app.json` , `index.js`, `package.json`, and `Procfile`) from your workspace.
3. Host the files on a web server.

### Add the starter app to LIFF

1. Follow the instructions on the page [Adding a LIFF app](https://developers.line.biz/en/docs/liff/registering-liff-apps/). 
2. Take a note of your LIFF ID, because you'll need it for the next part. The LIFF ID is the final part of the LIFF URL shown in the console: `line://app/{liffId}`

3. Set your LIFF ID to the `defaultLiffId` variable in `public/liff-starter.js`.
    ```shell
    const defaultLiffId = "{liffId}"; 
    ```

## Trying the app

### Try the app in LINE

You can open your LIFF app in LINE by creating a simple link from any chat:

1. In any LINE chat, type `line://app/{liffId}` and send the message. (For example, if your LIFF ID is `123`, send the message `line://app/123`.)
2. Tap the link in your own message.
3. Agree to grant the required permissions to the LIFF app.

### Try the app in your browser

To open your LIFF app in your browser, enter the app's Heroku URL: `https://{Heroku app name}.herokuapp.com`

## App features

You'll find the following buttons in the starter app.  

ℹ️ Some buttons are available only in either LINE's in-app browser or in a regular browser. See also the [API reference](https://developers.line.biz/en/reference/liff/).

| Button | Description | LINE browser | Regular browser |
| ------ | ----------- | :------------: | :---------------: |
| Open External Window | Opens `https://line.me` in LINE's in-app browser.  | ✅ | ✅ |
| Close LIFF App  | Closes the LIFF app.  | ✅ | ❌ |
| Open QR Code Reader  | Opens the QR code reader and outputs the result. | ✅ | ❌ |
| Send Message  | Sends a sample message on behalf of the user if the LIFF app is opened in the chat screen.  | ✅ | ❌ |
| Get Access Token  | Gets the current user's access token.  | ✅ | ✅ |
| Get Profile  | Gets the current user's profile.  | ✅ | ✅ |
| Log In  | Performs LINE Login for web apps. Once the user is authenticated and authorized, the LIFF app will be able to obtain information such as access token and user profile.  | ❌ | ✅ |
| Log Out |  Logs out the user. | ✅ | ✅ |

For API calls associated with the buttons, see [Calling the LIFF API](https://developers.line.biz/en/docs/liff/developing-liff-apps#calling-liff-api).

[heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli
[liff-api-ref]: https://developers.line.biz/en/reference/liff/
[calling-liff-api]: https://developers.line.biz/en/docs/liff/developing-liff-apps#calling-liff-api
