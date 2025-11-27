
function Navbar() {

    return (
        <nav>
            <header class="bg-white shadow-md fixed top-0 z-50 w-full">
                <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-blue-700">Support Ticket System</h1>
                    <nav class="space-x-6 hidden md:block">
                        <a href="#" class="hover:text-blue-600">Home</a>
                        <a href="#" class="hover:text-blue-600">Features</a>
                        <a href="#" class="hover:text-blue-600">How It Works</a>
                        <a href="#" class="hover:text-blue-600">Contact</a>
                    </nav>
                    <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login</a>
                </div>
            </header>
        </nav>
    );
}

export default Navbar