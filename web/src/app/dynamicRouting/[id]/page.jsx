export default async function DynamicRoutingChild(props) {
  // Dynamic Routingの子ページセにおいて、グメントはprops.paramsに格納されます。
  // この場合、ページが`.../[id]/page.tsx`にあるため、`id`セグメントは`props.params.id`で取得できます。

  return (
    <div className="flex flex-col text-xl">
      <h1>Dynamic Routing Child</h1>
      <span className="">ID : {props.params.id}</span>
    </div>
  )
}
