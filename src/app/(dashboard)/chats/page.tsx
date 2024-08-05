"use client";

import Search from "@/components/input/search/Search";
import { ChangeEvent } from "react";
import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import PageTitle from "@/components/page-title/PageTitle";
import OpenAsideButton from "@/components/open-aside-button/OpenAsideButton";

export default function Chats() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      {!isAsideVisible && <OpenAsideButton handleClick={toggleAside} />}
      <PageTitle>Pacttos (Chats)</PageTitle>
      <Search helperText="No Pacctos found" />
    </PageWrapper>
  );
}
