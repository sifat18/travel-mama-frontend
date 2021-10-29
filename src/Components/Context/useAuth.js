const { useContext } = require("react")
const { AuthContext } = require("../AuthProvider/Authprovider")

const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth;