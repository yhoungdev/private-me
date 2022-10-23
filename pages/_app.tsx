import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      setTimeout(handleLoading, 100);
    }
  };

  useEffect(() => {
    handleLoading();
  }, []);
  return (
    <div
      className={`relative ${isLoading && "max-h-screen overflow-y-hidden"}`}
    >
      <div
        className={`${
          isLoading ? "flex" : "hidden"
        } z-[9999] bg-[#121212] absolute inset-0 justify-center items-center`}
      >
        <div className="h-20 w-20 border-[#6bd968] rounded-full border-t-2 border-b-2 animate-spin" />
      </div>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
