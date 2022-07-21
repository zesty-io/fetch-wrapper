/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
   preset: "ts-jest",
   testEnvironment: "node",
   setupFiles: ["dotenv/config"],
   moduleFileExtensions: ["ts", "js"],
   moduleDirectories: ["node_modules", "src"],
}
