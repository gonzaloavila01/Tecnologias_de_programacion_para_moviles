import { AuthContextProvider } from "./src/context/AuthContext"
import Layout from "./src/layout/Layout"

export default function App() {  
  return (
    <AuthContextProvider>
        <Layout/>
    </AuthContextProvider>
  )
}