import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: '메모 앱',
  description: '간단 메모 앱',
}

export default function Page() {
  return (
    <div id="webcrumbs">
      <div className="border-primary-100 w-[500px] overflow-hidden rounded-lg border bg-white shadow-lg">
        <div className="p-6">
          <header className="mb-6">
            <h1 className="text-primary-700 text-2xl font-bold">Memo App</h1>
            <p className="text-sm text-gray-500">
              Create and manage your notes
            </p>
          </header>

          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search notes..."
                className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 transition-all duration-200 focus:border-transparent focus:ring-2 focus:outline-none"
              />
              <span className="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400">
                search
              </span>
            </div>
          </div>

          <div className="mb-6">
            <details open className="group">
              <summary className="bg-primary-50 hover:bg-primary-100 flex cursor-pointer items-center justify-between rounded-lg p-3 transition-all duration-200">
                <span className="font-medium">Create New Note</span>
                <span className="material-symbols-outlined transform transition-transform duration-200 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-1 rounded-b-lg border border-t-0 border-gray-200 p-4">
                <textarea
                  placeholder="What's on your mind?"
                  className="focus:ring-primary-500 mb-3 min-h-[100px] w-full rounded-lg border border-gray-300 p-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:outline-none"></textarea>
                <div className="flex justify-end">
                  <button className="bg-primary-600 hover:bg-primary-700 flex transform items-center gap-2 rounded-lg px-4 py-2 text-white transition-all duration-200 hover:scale-105">
                    <span className="material-symbols-outlined text-sm">
                      save
                    </span>
                    Save Note
                  </button>
                </div>
              </div>
            </details>
          </div>

          <div className="max-h-[400px] space-y-4 overflow-y-auto pr-2">
            <div className="group rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:shadow-md">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-lg font-semibold">Meeting Notes</h3>
                <div className="flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <button className="rounded-full p-1 transition-colors duration-200 hover:bg-gray-100">
                    <span className="material-symbols-outlined text-gray-600">
                      edit
                    </span>
                  </button>
                  <button className="rounded-full p-1 transition-colors duration-200 hover:bg-gray-100">
                    <span className="material-symbols-outlined text-gray-600">
                      delete
                    </span>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Discuss project timeline and deliverables with the team. Follow
                up with Lisa about the design assets.
              </p>
              <div className="mt-3 text-xs text-gray-400">
                Created 2 hours ago
              </div>
            </div>

            <div className="group rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:shadow-md">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-lg font-semibold">Shopping List</h3>
                <div className="flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <button className="rounded-full p-1 transition-colors duration-200 hover:bg-gray-100">
                    <span className="material-symbols-outlined text-gray-600">
                      edit
                    </span>
                  </button>
                  <button className="rounded-full p-1 transition-colors duration-200 hover:bg-gray-100">
                    <span className="material-symbols-outlined text-gray-600">
                      delete
                    </span>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Milk, eggs, bread, cheese, fruits, vegetables, chicken, pasta,
                and olive oil.
              </p>
              <div className="mt-3 text-xs text-gray-400">
                Created 1 day ago
              </div>
            </div>

            <div className="group rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:shadow-md">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-lg font-semibold">Project Ideas</h3>
                <div className="flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <button className="rounded-full p-1 transition-colors duration-200 hover:bg-gray-100">
                    <span className="material-symbols-outlined text-gray-600">
                      edit
                    </span>
                  </button>
                  <button className="rounded-full p-1 transition-colors duration-200 hover:bg-gray-100">
                    <span className="material-symbols-outlined text-gray-600">
                      delete
                    </span>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Build a todo app with React and TailwindCSS. Create a weather
                app using a public API.
              </p>
              <div className="mt-3 text-xs text-gray-400">
                Created 3 days ago
              </div>
            </div>
            {/* Next: "Add note categories with color coding" */}
            {/* Next: "Add a dark mode toggle" */}
            {/* Next: "Add note sorting options (date, alphabetical)" */}
          </div>
        </div>
      </div>
    </div>
  )
}
