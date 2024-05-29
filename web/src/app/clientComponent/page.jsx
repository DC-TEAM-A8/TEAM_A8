"use client"

import { useState } from "react"
import { Button } from "../../../components/Button"
import action from "./action"

export default function Home() {
  // クライアントコンポーネントのため、コンポーネント内でフックを使用することができます
  const [count, setCount] = useState(0)

  // 今回はデバッグ用途のため、仮にuserIdを1とする
  const userId = 1

  return <div>
    home
    <form action={action}>
      <Button element="inputSubmit">出席</Button>
    </form>
    <Button
      element="button"
      onClick={() => setCount(c => c + 1)}
    >
      {count}+1
    </Button>
  </div>
}
