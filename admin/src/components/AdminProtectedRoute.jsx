import { useUser, useClerk, SignIn } from "@clerk/clerk-react";

const AdminProtectedRoute = ({ children }) => {
    const { user, isLoaded, isSignedIn } = useUser();
    const { signOut } = useClerk();

    // Clerk load ho raha hai
    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    // User logged in nahi hai
    // Directly Clerk SignIn component show karo
    if (!isSignedIn) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <SignIn />
            </div>
        );
    }

    // User admin nahi hai
    if (user?.publicMetadata?.role !== "admin") {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">

                    <h1 className="text-3xl font-bold text-red-600 mb-3">
                        Access Denied
                    </h1>

                    <p className="text-gray-400 mb-6">
                        You are not authorized to access this dashboard.
                    </p>

                    {/* Logout Button */}
                    <button
                        onClick={() => signOut()}
                        className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
                    >
                        Logout
                    </button>

                </div>
            </div>
        );
    }

    // Admin hai
    return children;
};

export default AdminProtectedRoute;