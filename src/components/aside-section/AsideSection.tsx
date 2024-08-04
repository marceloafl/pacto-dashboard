"use client";

import { useAside } from "@/context/MenuContext";
import AsideLogo from "../aside-logo/AsideLogo";
import AsideProfileSummary from "../aside-profile-summary/AsideProfileSummary";
import AsideMenu from "../aside-menu/AsideMenu";

export default function AsideSection() {
  const { isAsideVisible } = useAside();

  return (
    <div className="bg-secondary-black-bg h-screen fixed top-0 left-0 min-w-64">
      {isAsideVisible && (
        <aside className="h-full overflow-y-auto">
          <AsideLogo />
          <AsideProfileSummary />
          <AsideMenu />
        </aside>
      )}
    </div>
  );
}
