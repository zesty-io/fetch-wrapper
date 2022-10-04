import { IParams } from "types"

export const customParams = (body = {}, method = "POST", token?: string): IParams => {
   const headers: any = {
      "x-www-form-urlencoded": "application/json",
   }

   if (token) {
      headers["Authorization"] = `Bearer ${token}`
   }

   const params: IParams = {
      headers,
      method,
      mode: "cors",
      referrerPolicy: "no-referrer",
      credentials: "omit",
      body,
   }
   return params
}

export const date7DaysAgo = new Date(new Date().setDate(new Date().getDate() - 7))
   .toISOString()
   .slice(0, 10)

export const dateToday = new Date().toISOString().slice(0, 10)
