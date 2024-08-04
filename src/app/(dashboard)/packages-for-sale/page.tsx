"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";

export default function PackagesForSale() {
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
      Packages For Sale
    </PageWrapper>
  );
}
