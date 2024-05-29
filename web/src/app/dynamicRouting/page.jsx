import Link from "next/link";

export default async function DynamicRoutingRoot() {
  return (
    <div className="flex flex-col text-xl">
      <h1>Dynamic Routing</h1>
      <Link className="text-blue-600 underline" href="/dynamicRouting/1">ページ1</Link>
      <Link className="text-blue-600 underline" href="/dynamicRouting/2">ページ2</Link>
      <Link className="text-blue-600 underline" href="/dynamicRouting/3">ページ3</Link>
    </div>
  )
}
