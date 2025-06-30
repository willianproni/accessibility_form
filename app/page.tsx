import SettingsTabs from "./components/SettingsTabs/SettingsTabs";
import * as Input from "./components/Input";
import { Mail, UploadCloud, User } from "lucide-react";

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
            <button
              type="button"
              className="px-4 py-2 text-sm bg-white text-zinc-700 font-semibold border border-zinc-300 rounded-lg shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-violet-600 text-zinc-50 font-semibold rounded-lg shadow-sm hover:bg-violet-700"
            >
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

          <div className="grid grid-cols-form gap-3 pb-5">
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

          <div className="grid grid-cols-form gap-3 pb-5">
            <label
              htmlFor="yourPhoto"
              className="text-sm font-medium text-zinc-700"
            >
              Your Photo
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <div className="flex items-start gap-5">
              <div className="bg-violet-100 flex h-16 w-16 items-center justify-center rounded-full">
                <User className="w8 h8 text-violet-500" />
              </div>

              <label
                htmlFor="photo"
                className="group flex-1 cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-50 hover:text-violet-500"
              >
                <div className="rounded-full border-8 border-zinc-200 bg-zinc-300 p-2 group-hover:border-violet-100 group-hover:bg-violet-200">
                  <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm">
                    <span className="font-semibold text-violet-700">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </span>
                  <span className="text-xs">
                    SVG, PNG or JPG (max. 800x400px)
                  </span>
                </div>
              </label>

              <input type="file" className="sr-only" id="photo" />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pb-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <div>
              <Input.InputRoot>
                <Input.InputControl
                  id="role"
                  placeholder="Software developer..."
                />
              </Input.InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pb-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pb-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pb-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introdiction.
              </span>
            </label>

            <div></div>
          </div>

          <div className="grid grid-cols-form gap-3 pb-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio project
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <div></div>
          </div>

          <div className="flex justify-end items-center gap-2">
            <button
              type="button"
              className="px-4 py-2 text-sm bg-white text-zinc-700 font-semibold border border-zinc-300 rounded-lg shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button className="px-4 py-2 text-sm bg-violet-600 text-zinc-50 font-semibold rounded-lg shadow-sm hover:bg-violet-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
