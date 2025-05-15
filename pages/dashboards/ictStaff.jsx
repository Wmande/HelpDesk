// app/dashboard/page.jsx
import Link from 'next/link';
import { FaChartBar, FaTasks, FaHeadset } from 'react-icons/fa';
import '../../app/globals.css'

// Sample data for the table (replace with API call or dynamic data as needed)
const recentIssues = [];

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-4 flex items-center space-x-2">
          <FaHeadset className="text-2xl" />
          <h1 className="text-xl font-bold">SDEP HELPDESK</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" className="flex items-center space-x-2 text-white hover:bg-blue-700 p-2 rounded">
                <FaChartBar />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/tasks" className="flex items-center space-x-2 text-white hover:bg-blue-700 p-2 rounded">
                <FaTasks />
                <span>Tasks</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Staff Dashboard</h2>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white">A</span>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <main className="p-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Reported Issues */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="mr-2">📋</span> Reported Issues
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">0</p>
              <p className="text-gray-600">Current reported issues</p>
            </div>
            {/* Resolved Issues */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="mr-2">✅</span> Resolved Issues
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">0</p>
              <p className="text-gray-600">Issues resolved this month</p>
            </div>
            {/* Pending Issues */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="mr-2">⏳</span> Pending Issues
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">0</p>
              <p className="text-gray-600">Issues awaiting resolution</p>
            </div>
          </div>

          {/* Recent Issues Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Recently Reported Issues
              </h3>
              <Link
                href="/addIssue"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Report New Issue
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-gray-800 font-semibold">Ticket</th>
                    <th className="p-4 text-gray-800 font-semibold">Officer Assigned</th>
                    <th className="p-4 text-gray-800 font-semibold">Status</th>
                    <th className="p-4 text-gray-800 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentIssues.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="p-4 text-center text-gray-600">
                        No recent issues reported.
                      </td>
                    </tr>
                  ) : (
                    recentIssues.map((issue) => (
                      <tr key={issue.id} className="border-t">
                        <td className="p-4">{issue.ticket}</td>
                        <td className="p-4">{issue.officer}</td>
                        <td className="p-4">{issue.status}</td>
                        <td className="p-4">
                          <button className="text-blue-600 hover:underline">
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;