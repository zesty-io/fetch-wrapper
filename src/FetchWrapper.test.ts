import { FetchWrapper } from "./index"
import "@testing-library/jest-dom"
import "isomorphic-fetch"

const userAppSID = process.env.userAppSID
const instanceZUID = process.env.instanceZUID

describe("Fetchwrapper functions testing ", () => {
   it("searchItems --- expect data to be present ", async () => {
      const ZestyAPI = new FetchWrapper(instanceZUID, userAppSID)
      const res = await ZestyAPI.searchItems()
      expect(res.data).toBeTruthy()
   })
})
