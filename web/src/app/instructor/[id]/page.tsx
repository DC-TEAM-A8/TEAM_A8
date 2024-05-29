"use server"

// サーバーコンポーネント
export default async function ReviewView() {
  // サーバーコンポーネントはサーバーサイドで実行される関数コンポーネントです。

  // サーバーコンポーネントでは、useStateなどのフックを使うことはできません。
  // そのため、例えば以下のコードはエラーになります。
  //const [count, setCount] = useState(0)
  // ユーザーの操作に合わせてページの表示を変える場合、サーバーコンポーネントの中でクライアントコンポーネントを使うことができます。


  // 一方で、サーバーコンポーネントはサーバーサイドで実行されるため、fetchなどのネットワークリクエストを行うことができます。
  const response = await fetch("http://localhost:8080/companies/1")
  const apiResult = await response.json()

  return <div>
    {apiResult.company_name}
  </div>
}
