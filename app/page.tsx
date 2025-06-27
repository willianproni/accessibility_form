import SettingsTabs from "./components/SettingsTabs/SettingsTabs";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-gray-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-8 flex flex-col">
        <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm bg-white text-zinc-700 font-semibold border border-zinc-300 rounded-lg shadow-sm hover:bg-zinc-50">
              Cancel
            </button>
            <button className="px-4 py-2 text-sm bg-violet-600 text-zinc-50 font-semibold rounded-lg shadow-sm hover:bg-violet-700">
              Save
            </button>
          </div>
        </div>

        <form id="personalForm" action="" className="mt-6 flex flex-col w-full">
          form
        </form>
      </div>
    </>
  );
}
