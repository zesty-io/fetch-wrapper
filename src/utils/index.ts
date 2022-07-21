import { IParams } from "types"

export const customParams = (body = {}, method = "POST"): IParams => {
   const headers: any = {
      "x-www-form-urlencoded": "application/json",
   }

   const params: IParams = {
      headers,
      method,
      mode: "cors" as RequestMode,
      referrerPolicy: "no-referrer" as ReferrerPolicy,
      credentials: "omit" as RequestCredentials,
      body,
   }
   return params
}
