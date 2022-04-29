<img src="https://brand.zesty.io/zesty-io-logo-horizontal.png" height="100" alt="zesty logo" />

# Zesty.io API Fetch Wrapper

A javascript fetch wrapper for the Zesty.io APIs for frontend clients.

### API Service the Wrapper can Access

- Instances API https://instances-api.zesty.org/
- Accounts API https://accounts-api.zesty.org/
- Auth API https://auth-api.zesty.org/
- Media API https://media-api.zesty.org/

Note all endpoints are ported. If you wish to port any missing endpoints, create a fork and pull request.

# Getting Started

Include the fetch wrapper into your project

```
<script src="https://cdn.jsdelivr.net/gh/zesty-io/api-fetch-wrapper@development/dist/index_bundle.min.js" />
```

# Example Usage

For this wrapper to run, you need an authenticated Zesty.io user APP_SID and a Instance ZUID

```
const instanceZUID = '8-xyzxyz-xyz'
const userAppSID = 'xxxxxxxxxx'

ZestyAPI = new ZestyioRestFetchWrapper(instanceZUID,userAppSID)

console.log(ZestyAPI.getModels())

```
