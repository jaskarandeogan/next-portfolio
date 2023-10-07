import { useEffect } from "react";
import { useRouter } from "next/router";
import Home from "@/layouts/Home";


export default function Index() {
  const { pathname, replace } = useRouter();

  const isDevenv = process.env.NEXT_PUBLIC_ENV === "development";

  useEffect(() => {
    if (pathname === "/" && !isDevenv ) {
      replace("/comingsoon");
    }
  }, [isDevenv, pathname, replace]);

  if(isDevenv) return <Home />
  else return null;
}
