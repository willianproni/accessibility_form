import SettingsTabs from "./components/SettingsTabs/SettingsTabs";
import * as Input from "./components/Input";
import { Mail } from "lucide-react";

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

        <form
          id="personalForm"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3 pb-5">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>

            <div className="grid grid-cols-2 gap-6">
              <Input.InputRoot>
                <Input.InputControl id="firstName" placeholder="Your name..." />
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputControl placeholder="Your surname..." />
              </Input.InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              E-mail
            </label>

            <div>
              <Input.InputRoot>
                <Input.InputPrefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.InputPrefix>
                <Input.InputControl
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                />
              </Input.InputRoot>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
