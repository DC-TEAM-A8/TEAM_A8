"use server"

// Server Action

const API_BASE = "http://localhost:8080"

/**
 * @param {FormData} data
 */
export default async function action(data) {
  // サーバーアクションは、FormDataというフォームの入力結果を受け取りますが、このコードでは使用していません。

  console.log("action: 出席")
  // 例として、APIにデータを送信し出席を記録します。
  const response = await fetch(
    `${API_BASE}/attendances`,
    {
      method: "POST",
      body: JSON.stringify({
        user: "/users/1",
        attendance_index: 1,
        type: "MORNING",
        memo: "電車遅延"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
  console.log("Status code :", response.status)
}
