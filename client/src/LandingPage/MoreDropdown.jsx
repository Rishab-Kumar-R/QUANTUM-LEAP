import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDownIcon,
  DocumentTextIcon,
  PhoneIcon,
  InformationCircleIcon,
  CalendarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";

const dropdownItems = [
  {
    name: "Workflow",
    description: "Streamline your tasks efficiently",
    href: "/workflow",
    icon: RocketLaunchIcon,
  },
  {
    name: "Plans",
    description: "Choose the best plan for your needs",
    href: "/plans",
    icon: CalendarIcon, // Using CalendarIcon as a substitute
  },
  {
    name: "About",
    description: "Learn more about our mission and team",
    href: "/about",
    icon: InformationCircleIcon,
  },
  {
    name: "Contact Us",
    description: "Get in touch with our support team",
    href: "/contact",
    icon: PhoneIcon,
  },
  {
    name: "Documentation",
    description: "Explore detailed guides and resources",
    href: "/documentation",
    icon: DocumentTextIcon,
  },
];

const MoreDropdown = () => {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-md font-bold text-indigo-900 hover:text-indigo-600 dark:text-white dark:hover:text-gray-400">
        <span>More</span>
        <ChevronDownIcon aria-hidden="true" className="w-5 h-5" />
      </PopoverButton>

      <PopoverPanel className="absolute z-10 mt-4 w-72 rounded-3xl bg-white dark:bg-gray-700 shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {dropdownItems.map((item) => (
            <div
              key={item.name}
              className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-600 dark:group-hover:bg-gray-500">
                <item.icon
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400"
                />
              </div>
              <div>
                <a
                  href={item.href}
                  className="font-semibold text-gray-900 dark:text-white"
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default MoreDropdown;
