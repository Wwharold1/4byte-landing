import dynamic from "next/dynamic";

const Init = dynamic(() => import("../init"), {
  ssr: true,
});

export default function Page() {
  return <Init />;
}