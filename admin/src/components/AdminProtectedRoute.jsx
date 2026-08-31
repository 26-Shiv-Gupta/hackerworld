import { useUser } from "@clerk/clerk-react";

const AdminProtectedRoute = ({ children }) => {
    const { user, isLoaded, isSignedIn } = useUser();

    // Clerk load ho raha hai
    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    // User logged in nahi hai
    if (!isSignedIn) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <h1 className="text-xl font-semibold">
                    Please login to access the admin dashboard.
                </h1>
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

                    <p className="text-gray-400">
                        You are not authorized to access this dashboard.
                    </p>
                </div>
            </div>
        );
    }

    return children;
};

export default AdminProtectedRoute;