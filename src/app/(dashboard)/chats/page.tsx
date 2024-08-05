"use client";

import Search from "@/components/input/search/Search";
import { ChangeEvent } from "react";
import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import PageTitle from "@/components/page-title/PageTitle";

export default function Chats() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      {!isAsideVisible && (
        <button
          className="top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleAside}
        >
          Abrir Aside
        </button>
      )}
      <PageTitle>Pacttos (Chats)</PageTitle>
      <Search helperText="No Pacctos found" />
    </PageWrapper>
  );
}
