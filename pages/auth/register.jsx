import Image from 'next/image'
import React from 'react'
import '../../app/globals.css'

export default function register() {
  return (
    <div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-8 '>

            {/* Grid 1 */}
        <div className='mx-auto text-center p-[100px]'>
          <h1 className='text-3xl font-bold text-indigo-600/75 font-kalnia2'>SDEP ICT SUPPORT</h1>
          <Image
          alt='EcoHelpDesk'
          src='/help.png'
          width={560}        
          height={560}    
          />
        </div>
              {/* End of Grid 1 */}

              {/* Grid 2 */}
        <div className='p-[50px]'>
         <div className='bg-white w-[400px] h-full p-4 ml-28'>
          {/* Start of Form */}
         <form  className="space-y-6">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="p-2 border border-gray-500 rounded-lg w-full"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Department</label>
            <select
              name="position"
              className="p-2 border border-gray-500 rounded-lg w-full cursor-pointer"
              required
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="Center">Department1</option>
              <option value="Power Forward">Department2</option>
              <option value="Small Forward">Department3</option>
              <option value="Point Guard">Department4</option>
              <option value="Shooting Guard">Department5</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Designation</label>
            <input
              type="text"
              name="height"
              className="p-2 border border-gray-500 rounded-lg w-full"
              placeholder='e.g. Human Resource Officer'
              required
            />
          </div>

          <div>
            <label className="block mb-1">Extension number</label>
            <input
              type="number"
              name="age"
              className="p-2 border border-gray-500 rounded-lg w-full"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="text"
              name="height"
              className="p-2 border border-gray-500 rounded-lg w-full"
              required
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="status" className="block leading-6 text-gray-900">
              Your role
            </label>
            <select
              name="status"
              className="cursor-pointer block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              required
            >
              <option value="" disabled>
                Status
              </option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Injury</option>
              <option>Pending</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="block font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span> */}
              </div>
          </div>

          <div>
            <label className="block font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
            <div className="mt-2 relative">
                <input
                  id="confpassword"
                  name="confpassword"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span> */}
              </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
            // disabled={isLoading}
          >
            {/* {isLoading ? "Submitting..." : "Submit"} */}Button not yet working
          </button>
      </form>
         </div>
        </div>
        {/* End of Grid 2 */}

      </div>
    </div>
  )
}
