import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";
import Worlds from "@/components/Worlds";

export const metadata: Metadata = {
  title: "Follow the Build",
  description: "Three worlds, one person. Listen, watch the films, or catch the feeling.",
};

export default function FollowPage() {
  return (
    <>
      <div className="follow-page">
        <Newsletter headingLevel="h1" />
      </div>
      <Worlds compact />
    </>
  );
}
