import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

const useAuth = () => {
    // return useContext(AuthContext);
    const { user, handleSignOut } = useContext(AuthContext)
    return {
        user,
        handleSignOut
    }
}

export default useAuth;