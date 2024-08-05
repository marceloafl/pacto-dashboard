"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import Button from "@/components/button/Button";
import ListWithIcon from "@/components/list/list-with-icon/ListWithIcon";
import OpenAsideButton from "@/components/open-aside-button/OpenAsideButton";

export default function Subscriptions() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      {!isAsideVisible && <OpenAsideButton handleClick={toggleAside} />}
      <div className="flex flex-col gap-10">
        <p className="text-pactto-gray text-sm">
          You have access to{" "}
          <span className="uppercase text-white">PACTTO PRO</span> as a trial.{" "}
          <span className="text-white">9 days left</span>
        </p>
        <div className="w-fit">
          <Button theme="primary">Subscribe to Pactto Pro</Button>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-white text-sm">
            The PACTTO PRO subscription allows you to:
          </p>
          <ListWithIcon />
        </div>
      </div>
    </PageWrapper>
  );
}
