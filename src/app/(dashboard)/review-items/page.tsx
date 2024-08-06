"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import PageTitle from "@/components/page-title/PageTitle";
import Search from "@/components/input/search/Search";
import OpenAsideButton from "@/components/aside/open-aside-button/OpenAsideButton";

export default function ReviewItems() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      {!isAsideVisible && <OpenAsideButton handleClick={toggleAside} />}
      <PageTitle>There are no review requests sent to you</PageTitle>
      <Search />
    </PageWrapper>
  );
}
