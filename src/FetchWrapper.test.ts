// @ts-nocheck

import { FetchWrapper } from "./index"
import "@testing-library/jest-dom"
import "isomorphic-fetch"
import { authUser } from "utils"

// zesty pw instance
const instanceZUID = "8-f48cf3a682-7fthvk"

const SECONDS = 1000
jest.setTimeout(30 * SECONDS)

describe("🎯🎯🎯 Fetchwrapper functions testing 🎯🎯🎯", () => {
   let ZestyAPI = {}

   beforeAll(async () => {
      const token = await authUser()
      ZestyAPI = new FetchWrapper(instanceZUID, token)
   })
   it("verify --- expect 200 code", async () => {
      const res = await ZestyAPI.verify()
      expect(res.code).toBe(200)
   })
   it("getModel --- expect data to be present ", async () => {
      const res = await ZestyAPI.getModels()
      expect(res.status).toBe(200)
   })

   it("getinstanceaudit --- expect data to be present ", async () => {
      const res = await ZestyAPI.getInstanceAudit()
      expect(res.status).toBe(200)
   })

   it("searchItems --- expect data to be present ", async () => {
      const res = await ZestyAPI.searchItems()

      expect(res.status).toBe(200)
   })
   it("getViews --- expect data to be present ", async () => {
      const res = await ZestyAPI.getViews()

      expect(res.status).toBe(200)
   })

   it("getView --- expect data to be present ", async () => {
      const res = await ZestyAPI.getView("11-ded898b288-zc1dpg")

      expect(res.status).toBe(200)
   })
   it("getall teams --- expect data to be present ", async () => {
      const res = await ZestyAPI.getAllTeams()

      expect(res.status).toBe(200)
   })
})
