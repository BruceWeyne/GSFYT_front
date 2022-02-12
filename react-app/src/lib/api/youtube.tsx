import client from "./client";
import { Url } from "../../interfaces/index";

// 入力された URL をポスト
export const postVideoUrl = (data: Url) => {
  return client.post('/youtube', data)
}