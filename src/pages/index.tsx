import Home from "@/layouts/Home";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

export default function Index() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <HashLoader color="#97F36B" />
      </div>
    );
  }

  return <Home />;
}
