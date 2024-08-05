"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import PageTitle from "@/components/page-title/PageTitle";
import Search from "@/components/input/search/Search";

export default function LinksCreated() {
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
