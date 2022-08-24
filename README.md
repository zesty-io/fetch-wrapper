<div align="center">

<img src="https://brand.zesty.io/zesty-io-logo-horizontal.png" height="100" alt="zesty logo" />

# Zesty.io API Fetch Wrapper

</div>

<div align="center">

![GitHub package.json version](https://img.shields.io/github/package-json/v/zesty-io/fetch-wrapper?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/zesty-io/fetch-wrapper?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![NPM](https://img.shields.io/npm/l/@zesty-io/live-editor?style=for-the-badge)

</div>

<div align="center">

A javascript fetch wrapper for the Zesty.io APIs for frontend clients. For a backend node wrapper, use the [Zesty.io Node SDK](https://www.npmjs.com/package/@zesty-io/sdk)

</div>

## ⚡ Getting Started

Include the fetch wrapper into your project

```jsx
<script
   async
   src="https://cdn.jsdelivr.net/gh/zesty-io/fetch-wrapper@latest/dist/index.js"
></script>
```

## 🚀 Example Usage

For this wrapper to run, you need an authenticated Zesty.io user APP_SID and a Instance ZUID

```jsx
const instanceZUID = "8-xyzxyz-xyz"
const userAppSID = "xxxxxxxxxx"

const ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID)

console.log(ZestyAPI.getModels())
```

## 🎯 Features

### API Service the Wrapper can Access

-  Instances API https://instances-api.zesty.org/
-  Accounts API https://accounts-api.zesty.org/
-  Auth API https://auth-api.zesty.org/
-  Media API https://media-api.zesty.org/

Note all endpoints are ported. If you wish to port any missing endpoints, create a fork and pull request.

## 💡 Running locally

-  ### 🙂 Using npm install

```jsx
npm install && npm start
```

then add this in the head of Html

```jsx
<script async src="http://localhost:8080/index.js"></script>
```

-  ### 🐳 Using Docker

```jsx
docker build -t fetchWrapper .
```

```jsx
docker run -p 8080:8080 fetchWrapper

```

then add this in the head of Html

```jsx
<script async src="http://localhost:8080/index.js"></script>
```

## 💡 Use in Development Mode

To access dev and stage api url for zesty development, pass options to the instantation like so:

```jsx
const instanceZUID = "8-xyzxyz-xyz"
const userAppSID = "xxxxxxxxxx"

const ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID, {
   sitesServiceURL: "https://svc.dev.zesty.io/sites-service/",
   instancesAPIURL: ".api.dev.zesty.io/v1",
   authAPIURL: "https://auth.api.dev.zesty.io",
   accountsAPIURL: "https://accounts.api.dev.zesty.io/v1",
   mediaAPIURL: "https://svc.dev.zesty.io",
})

console.log(ZestyAPI.getModels())
```

## 💡 When commiting to github use

```jsx
npm run commit
```

## 💡 Bulding in Production

-  Automated

   -  On successful merge to main will publish new release

-  Manually

```jsx
git checkout main && npm run build && npm run release
```

## 🖥️ Code Contributors

<br />
  <img src ="https://contrib.rocks/image?repo=zesty-io/fetch-wrapper"/>
