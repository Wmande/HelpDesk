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
      <div className="flex-1 flex flex-col p-[20px]">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          {/* <h2 className="text-2xl font-bold text-gray-800">Staff Dashboard</h2> */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white">A</span>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
            <div className='bg-white p-4'> 
                <h1 className='text-gray-900 font-semibold'>Add New Issue</h1>
                <form>
                    <div className='mt-8'>
                        <label className='text-gray-600'>Client phone</label>
                        <input
                        type='number'
                        name='clientNo'
                        className="p-2 border border-gray-500/70 rounded-lg w-full"
                        required
                        />
                    </div>

                    <div className='mt-8'>
                        <label className='text-gray-600'>Description</label>
                        <textarea
                        type='text'
                        name='clientDescription'
                        className="p-2 border border-gray-500/70 rounded-lg w-full"
                        required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-[100px] h-[30px] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        // disabled={isLoading}
                        >
                        {/* {isLoading ? "Submitting..." : "ADD PROBLEM"} */}
                    </button>
                </form>


            </div>
      </div>
    </div>
  );
};

export default DashboardPage;