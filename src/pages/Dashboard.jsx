import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Welcome */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center sm:text-left">
          Welcome back, <span className="text-gray-800">{user?.email}</span> 👋
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-800">Your Tasks</h2>
            <p className="text-gray-600 mt-2">12 tasks pending</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-800">Completed</h2>
            <p className="text-gray-600 mt-2">5 tasks completed</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-800">New Messages</h2>
            <p className="text-gray-600 mt-2">3 unread messages</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            Recent Activity
          </h2>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            <li>✅ Logged in successfully</li>
            <li>📌 Updated profile</li>
            <li>📝 Created a new task</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
