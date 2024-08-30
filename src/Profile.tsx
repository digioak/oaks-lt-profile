import React from "react";
import { useState } from "react";
import Button from "@cloudscape-design/components/button";
import { Toggle } from "@cloudscape-design/components";

interface ProfileProps {
  name: string;
  title: string;
  location: string;
  imageUrl: string;
  sites: { name: string; icon: string }[];
}

const Profile: React.FC<ProfileProps> = ({
  name,
  title,
  location,
  imageUrl,
  sites,
}) => {
  const [isRowLayout, setIsRowLayout] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="absolute top-4 right-4">
          <Button>
            <div className="h-6 w-6" />
            <span className="sr-only">More options</span>
          </Button>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <img
            alt="Profile picture"
            className="rounded-full w-24 h-24 object-cover"
            src={imageUrl}
          />
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-center text-gray-600">
            {title}. Lives in {location}.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="h-2 w-6" />
        </div>

        <div className="flex justify-center h-12">
          <Toggle
            onChange={({ detail }) => setIsRowLayout(detail.checked)}
            checked={isRowLayout}
          >
            Use row layout
          </Toggle>
        </div>

        <div
          className={`flex ${
            isRowLayout ? "flex-row" : "flex-col"
          } justify-center flex-wrap scale-150`}
          style={{
            marginBottom: 128,
            marginTop: 96,
          }}
        >
          {sites.map((site: any) => (
            <div className="flex-item m-2">
              <Button iconUrl={site.icon}>
                <span className="inline-block w-24">{site.name}</span>
              </Button>
            </div>
          ))}
        </div>

        <Button>
          <span className="mr-2">✦</span> Join{" "}
          {name.split(" ")[0].toLowerCase()} on Linktree
        </Button>
      </div>
    </div>
  );
};

export { Profile };
