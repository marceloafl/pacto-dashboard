"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import PageTitle from "@/components/page-title/PageTitle";
import Search from "@/components/input/search/Search";
import OpenAsideButton from "@/components/aside/open-aside-button/OpenAsideButton";

export default function LinksCreated() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      {!isAsideVisible && <OpenAsideButton handleClick={toggleAside} />}
      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-6">
          <PageTitle>There are no public web links you created</PageTitle>
          <Search />
        </section>
        <section className="flex flex-col gap-6">
          <PageTitle>There are no private web links you created</PageTitle>
          <Search />
        </section>
      </div>
    </PageWrapper>
  );
}
