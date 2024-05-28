# ボタンコンポーネントの使用方法

```tsx
// ページ上部にimport文を追加
import { Button } from "../Button";
// コンポーネントに以下を記入
<Button
  onClick={() => {
    // クリック時の処理
  }}
  variant="primary"
>
  Primary Button
</Button>
```

結果  
![image](https://github.com/DC-TEAM-A8/TEAM_A8/assets/33714346/d2a02d47-2b86-4874-b768-527b7410d36b)

## ボタン型のリンクを作成する場合

```tsx
// コンポーネントに以下を記入
<Button
  href="/<遷移先のリンク>"
  variant="primary"
>
  Primary Button
</Button>
```

## ボタンの見た目を変える方法

```tsx
<Button variant="primary">重要なボタン</Button>
<Button variant="secondary">普通のボタン</Button>
<Button variant="disabled">無効なボタン</Button>
```

結果  
![image](https://github.com/DC-TEAM-A8/TEAM_A8/assets/33714346/a6181b39-b238-49dc-bfc4-cb145070eab6)
