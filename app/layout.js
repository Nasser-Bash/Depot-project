
import './globals.css'
import Layout from "./components/layout/layout";
import { CartContextProvider } from './context/cartContext';

export const metadata = {
  title: 'Depot',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className="bg-white">
   <CartContextProvider>
             <Layout>
                {children}
              </Layout>
   </CartContextProvider>
         
   
   
       
      </body>
    </html>
  )
} 