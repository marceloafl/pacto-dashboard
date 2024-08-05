import { NextResponse } from "next/server";

export type VideoData = {
  id: number;
  name: string;
  imgPath: string;
  date: Date;
  tags: string[];
};

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "Example 1",
      imgPath: "/tooltip-about-me.png",
      date: new Date("2024-01-12T17:01:00"),
      tags: ["tag1"],
    },
    {
      id: 2,
      name: "Example 2",
      imgPath: "/pactto-logo.svg",
      date: new Date("2024-04-20T04:01:00"),
      tags: ["tag2"],
    },
    {
      id: 3,
      name: "Example 3",
      imgPath: "/tooltip-awards.png",
      date: new Date("2024-02-11T17:11:00"),
      tags: ["tag1", "tag2"],
    },
    {
      id: 4,
      name: "Example 4",
      imgPath: "/pactto-logo.svg",
      date: new Date("2024-03-12T13:03:00"),
      tags: ["tag1"],
    },
    {
      id: 5,
      name: "Example 5",
      imgPath: "/tooltip-about-me.png",
      date: new Date("2024-08-02T17:08:00"),
      tags: ["tag2"],
    },
    {
      id: 6,
      name: "Example 6",
      imgPath: "/pactto-logo.svg",
      date: new Date("2024-05-12T15:51:00"),
      tags: ["tag1", "tag2"],
    },
    {
      id: 7,
      name: "Example 7",
      imgPath: "/tooltip-about-me.png",
      date: new Date("2024-04-11T17:11:00"),
      tags: ["tag1"],
    },
  ]);
}
