import client from "./client"

// 動作確認
export const execTest = () => {
  return client.get("/test")
}