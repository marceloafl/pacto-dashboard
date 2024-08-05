"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import Input from "@/components/input/default/Input";
import CheckboxList from "@/components/list/checkbox-list/CheckboxList";
import Button from "@/components/button/Button";
import OpenAsideButton from "@/components/open-aside-button/OpenAsideButton";

export default function PersonalInformation() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      <div className="w-full flex gap-4 justify-end">
        <Button theme="gray">Reset changes</Button>
        <Button theme="primary">Save changes</Button>
      </div>
      <div className="flex flex-col gap-8">
        {!isAsideVisible && <OpenAsideButton handleClick={toggleAside} />}
        <section className="flex flex-col gap-4">
          <Input
            type="text"
            id="personal-information-name-input"
            placeholder="First name"
          />
          <Input
            type="text"
            id="personal-information-last-name-input"
            placeholder="Last name"
          />
          <Input
            type="email"
            id="personal-information-email-input"
            placeholder="Email"
          />
        </section>
        <section className="flex flex-col gap-6">
          <p className="text-white">
            What is your main activity? Or activities
          </p>
          <CheckboxList
            showTextField
            items={[
              "Video",
              "Design",
              "Development",
              "Sports",
              "Medical",
              "Inspections",
            ]}
          />
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-white">User handle and password</p>
          <Input
            type="text"
            id="personal-information-username-input"
            placeholder="Username"
          />
          <Input
            type="text"
            id="personal-information-password-input"
            placeholder="Password"
          />
          <Input
            type="email"
            id="personal-information-confirm-password-input"
            placeholder="Confirm password"
          />
        </section>
        <p className="text-pactto-gray text-xs">
          To delete your Pactto account and remove your data permanently from
          all Pactto apps and services, please{" "}
          <a href="#" className="underline">
            click here.
          </a>
        </p>
      </div>
    </PageWrapper>
  );
}
