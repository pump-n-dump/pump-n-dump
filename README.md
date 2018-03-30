# Pump-N-Dump


This is the official repo for the pump and dump software created in the Miami Bitcoin Hackathon.

This will be a feature filled and stable version. Not made with no sleep and held together by hope.

![](/logo.png)


# Development
```yarn``` for first time setup

```yarn electron-dev``` for development launch

# Release
```yarn build``` to compile react app

- <a href='https://github.com/pump-n-dump/pump-n-dump/blob/master/public/electron.js#L19'>Comment out line 19 in electron.js</a>
- <a href='https://github.com/pump-n-dump/pump-n-dump/blob/master/public/electron.js#L20'>Uncomment line 20 in electron.js</a>

```yarn electron-dist``` to have an executable app compiled into the /dist folder
