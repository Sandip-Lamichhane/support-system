export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call your API here (e.g., axios.post("/login"))
    };

    return (
        <section className="bg-[#CEE1FF] flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">

                <h2 className="text-xl font-bold text-center text-blue-600">
                    Login to Your Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-blue-500" />
                            Remember me
                        </label>

                        <a href="#" className="text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer transition duration-200"
                    >
                        Login
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="/register" className="text-blue-600 hover:underline">Register</a>
                    </p>

                </form>
            </div>
        </section>
    );
}