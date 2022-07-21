import { FetchWrapper } from "./index"
import "@testing-library/jest-dom"
import "isomorphic-fetch"

const userAppSID = process.env.userAppSID
const instanceZUID = process.env.instanceZUID

describe("🎯🎯🎯 Fetchwrapper functions testing 🎯🎯🎯", () => {
   const ZestyAPI = new FetchWrapper(instanceZUID, userAppSID)
   it("verify --- expect 200 code", async () => {
      const res = await ZestyAPI.verify()
      expect(res.code).toBe(200)
   })
   it("getModel --- expect data to be present ", async () => {
      const res = await ZestyAPI.getModels()
      expect(res.error).toBeFalsy()
      expect(res.data).toBeTruthy()
   })
   it("searchItems --- expect data to be present ", async () => {
      const res = await ZestyAPI.searchItems()
      expect(res.data).toBeTruthy()
      expect(res.error).toBeFalsy()
   })
   it("getViews --- expect data to be present ", async () => {
      const res = await ZestyAPI.getViews()
      expect(res.data).toBeTruthy()
      expect(res.error).toBeFalsy()
   })

   it("getView --- expect data to be present ", async () => {
      const res = await ZestyAPI.getView(instanceZUID)
      expect(res.data).toBeTruthy()
      expect(res.error).toBeFalsy()
   })
   it("login --- expect unauthorized ", async () => {
      const res = await ZestyAPI.login("test", "testpass")
      expect(res.status).toBe("Unauthorized")
      expect(res.error).toBeFalsy()
   }, 30000)
   it("verify2fa --- expect unauthorized ", async () => {
      const res = await ZestyAPI.verify2FA("test")
      expect(res.status).toBe("Unauthorized")
      expect(res.error).toBeFalsy()
   }, 30000)
})
