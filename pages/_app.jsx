
import { useState } from "react";
import { ThemeProvider } from '@/components/ThemeProvider.jsx';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";





export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
       <Toaster position="top-left" richColors/>
       
    <ThemeProvider
            attribute="class"
           
            enableSystem
            disableTransitionOnChange
          >
      
      {/* <div className='absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]' /> */}
      <Component {...pageProps} />
    </ThemeProvider>
    </QueryClientProvider>
  );
}
