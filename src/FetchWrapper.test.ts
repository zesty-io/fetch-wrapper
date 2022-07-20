import { FetchWrapper } from "./index"
import "@testing-library/jest-dom"
import "isomorphic-fetch"

const userAppSID = process.env.userAppSID
const instanceZUID = process.env.instanceZUID

describe("Fetchwrapper functions testing ", () => {
   it("verify --- expect 200 code", async () => {
      const ZestyAPI = new FetchWrapper(instanceZUID, userAppSID)
      const res = await ZestyAPI.verify()
      expect(res.code).toBe(200)
   })
   it("getModel --- expect data to be present ", async () => {
      const ZestyAPI = new FetchWrapper(instanceZUID, userAppSID)
      const res = await ZestyAPI.getModels()
      expect(res.error).toBeFalsy()
      expect(res.data).toBeTruthy()
   })
   it("searchItems --- expect data to be present ", async () => {
      const ZestyAPI = new FetchWrapper(instanceZUID, userAppSID)
      const res = await ZestyAPI.searchItems()
      expect(res.data).toBeTruthy()
      expect(res.error).toBeFalsy()
   })
   it("getViews --- expect data to be present ", async () => {
      const ZestyAPI = new FetchWrapper(instanceZUID, userAppSID)
      const res = await ZestyAPI.getViews()
      expect(res.data).toBeTruthy()
      expect(res.error).toBeFalsy()
   })
})
it("getView --- expect data to be present ", async () => {
   const ZestyAPI = new FetchWrapper(instanceZUID, userAppSID)
   const res = await ZestyAPI.getView(instanceZUID)
   expect(res.data).toBeTruthy()
   expect(res.error).toBeFalsy()
})
