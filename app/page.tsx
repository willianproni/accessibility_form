import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "./components/Form/FileInput";
import { Select } from "./components/Form/Select/Select";
import { SelectItem } from "./components/Form/Select/SelectItem";
import { TextArea } from "./components/Form/TextArea/TextArea";
import * as Input from "./components/Input";
import SettingsTabs from "./components/SettingsTabs/SettingsTabs";
import { Button } from "./components/Button";

const country = [
  { text: "Brazil", value: "BR" },
  { text: "United States", value: "US" },
  { text: "France", value: "FR" },
];

const timezone = [
  { text: "America - São Paulo (UTC-03:00)", value: "AM-SP" },
  { text: "America - São Paulo (UTC-03:00)", value: "AM-DF" },
  { text: "America - Santigo (UTC-04:00)", value: "AM-ST" },
];

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
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
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

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
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

            <Select placeholder="Select a country...">
              {country.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  text={item.text}
                />
              ))}
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pb-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              {timezone.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  text={item.text}
                />
              ))}
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pb-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introdiction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder="" defaultValue="default">
                  <SelectItem text="Default text" value="default" />
                  <SelectItem text="Medium text" value="medium" />
                  <SelectItem text="Small text" value="small" />
                  <SelectItem text="Large text" value="large" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List strokeWidth={3} className="h-4 w-4 text-zinc-500" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      strokeWidth={3}
                      className="h-4 w-4 text-zinc-500"
                    />
                  </Button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue="I'm a Front end Software Developer based in São Paulo, Brazil. I specialise in React/Next.js and Accessibility, brand strategy, and Webflow development."
              />
            </div>
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

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />

              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex justify-end items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  );
}
