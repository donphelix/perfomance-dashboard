import Link from 'next/link';

const WelcomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to Business Performance Page</h1>
            <p className="text-lg mb-8">Web application built to visualize key business metrics, including sales, expenses, and transactions.</p>
            <Link href="/dashboard">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get Started
                </button>
            </Link>
        </div>
    );
};

export default WelcomePage;