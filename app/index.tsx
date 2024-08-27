import { useAuth } from "@clerk/clerk-expo"
import { Href, Redirect } from "expo-router"

const Home = () => {
    const { isSignedIn } = useAuth()

    if (isSignedIn) {
        return <Redirect 
            href={'/(root)/(tabs)/home' as Href} 
        />
    }
    return <Redirect href={"/(auth)/welcome" as Href} />
}

export default Home