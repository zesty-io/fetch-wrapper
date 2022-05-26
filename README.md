<img src="https://brand.zesty.io/zesty-io-logo-horizontal.png" height="100" alt="zesty logo" />

# Zesty.io API Fetch Wrapper

A javascript fetch wrapper for the Zesty.io APIs for frontend clients. For a backend node wrapper, use the [Zesty.io Node SDK](https://www.npmjs.com/package/@zesty-io/sdk)

### API Service the Wrapper can Access

-  Instances API https://instances-api.zesty.org/
-  Accounts API https://accounts-api.zesty.org/
-  Auth API https://auth-api.zesty.org/
-  Media API https://media-api.zesty.org/

Note all endpoints are ported. If you wish to port any missing endpoints, create a fork and pull request.

# Getting Started

Include the fetch wrapper into your project

```
<script src="https://cdn.jsdelivr.net/gh/zesty-io/fetch-wrapper@latest/dist/index.min.js" />
```

# Example Usage

For this wrapper to run, you need an authenticated Zesty.io user APP_SID and a Instance ZUID

```
const instanceZUID = '8-xyzxyz-xyz'
const userAppSID = 'xxxxxxxxxx'

ZestyAPI = new Zesty.FetchWrapper(instanceZUID,userAppSID)

console.log(ZestyAPI.getModels())

```

# How to run in Development

```
npm start
```

then add this in the head of Html

```
  <script src="http://localhost:8080/dist/index.js" />
```

# How to build in Production

```
git checkout main && npm run build && npm run release
```
