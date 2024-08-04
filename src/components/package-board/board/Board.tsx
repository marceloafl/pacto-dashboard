"use client";

import Input from "@/components/input/default/Input";
import BoardSection from "../board-section/BoardSection";
import BoardTitle from "../board-title/BoardTitle";
import TextArea from "@/components/input/text-area/TextArea";
import RadioList from "@/components/list/radio-list/RadioList";
import Select from "@/components/select/Select";
import Button from "@/components/button/Button";
import { ChangeEvent, useState } from "react";

const secondaryTitleStyle = "text-center text-pactto-gray px-10";

export default function Board() {
  const [hasChange, setHasChange] = useState(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setHasChange(true);
  };

  return (
    <section className="flex gap-6 border border-accent">
      <BoardSection>
        <BoardTitle title="1. Describe your package" />
        <p className={secondaryTitleStyle}>
          Users will see this info on your expert page or in your integrations,
          <a className="text-accent"> view example.</a>
        </p>
        <Input
          placeholder="Change the name of package"
          id="package-name"
          label="Package name"
          onChange={handleChange}
        />
        <TextArea
          placeholder="Add description to this package"
          label="Package description"
          onChange={handleChange}
        />
        <Input
          placeholder="Add details"
          id="package-name"
          label="Package details (user will view only)"
          onChange={handleChange}
        />
        <Input
          placeholder="Add instructions"
          id="package-name"
          label="Package instructions (customers will view too)"
          onChange={handleChange}
        />
      </BoardSection>

      <BoardSection>
        <BoardTitle title="2. Define requirements for your package" />
        <p className={secondaryTitleStyle}>
          Users will be able to upload items for you to review. The items can be
          files, links or combinations.
        </p>
        <RadioList
          label="Review type"
          id="review-type"
          items={[
            "Single file review (e.g. video, image, or PDF)",
            "Single link review (e.g. LinkedIn URL, portfolio)",
            "Single review of multiple files (e.g. 2 videos and 1 image, reviewed together)",
          ]}
          onChange={handleChange}
        />
        <RadioList
          label="Review file type"
          id="review-file-type"
          items={["Video", "Image", "File (PDF, txt, etc)"]}
          orientation="horizontal"
          onChange={handleChange}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="package-tags" className="text-white">
            Options for the user to select (tags) <a href="#">view example</a>
          </label>
          <p className="text-xs text-pactto-gray">
            The user will be able to select these options when purchasing the
            package. They will become tags in your dashboard.
          </p>
          <Input
            placeholder="Add option"
            id="package-tags"
            onChange={handleChange}
          />
        </div>
      </BoardSection>

      <BoardSection>
        <BoardTitle title="3. Define its cost and number of reviews" />
        <p className={secondaryTitleStyle}>
          Users will upload their items for you to review, and they pay your
          review fee.
        </p>
        <div className="flex items-center justify-between">
          <label htmlFor="package-tags" className="text-white">
            Currency
          </label>
          <div className="">
            <Select
              options={["USD", "BRL"]}
              customClassname="bg-gray-500 w-24 border-none"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="w-full flex justify-between">
            <label htmlFor="package-tags" className="text-white">
              Package cost
            </label>
            <p className="text-pactto-gray">Price</p>
          </div>
          <div className="w-28">
            <Input
              type="number"
              id="board-package-cost"
              placeholder="0"
              customClassname="w-24 text-white"
              onChange={handleChange}
            />
          </div>
        </div>
        <p className={secondaryTitleStyle}>
          This package can result in one single review, or it can be a specific
          number of reviews to be consumed as credits.
        </p>
        <div className="flex items-center justify-between gap-4">
          <div className="w-full flex flex-col justify-between">
            <label htmlFor="package-tags" className="text-white">
              Number of reviews (credits) in this package
            </label>
            <a className="text-accent">View video explanation</a>
          </div>
          <div className="w-28">
            <Input
              type="number"
              id="board-package-credits"
              placeholder="1"
              customClassname="w-24 text-white"
              onChange={handleChange}
            />
          </div>
        </div>
        <p className={secondaryTitleStyle}>
          Users can see and buy your package when it&apos;s published.
        </p>
        <div className="w-fit m-auto">
          <Button theme="primary">
            {hasChange ? "Save and publish package" : "Publish package"}
          </Button>
        </div>
      </BoardSection>
    </section>
  );
}
