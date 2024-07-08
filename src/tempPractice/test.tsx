import React, { useEffect, useState } from "react";

// Define the props interface
interface MyComponentProps {
  title: string;
  count: number;
  isActive: boolean;
}

export const mainTest: React.FC<MyComponentProps> = ({
  title,
  count,
  isActive,
}) => {
  console.log("🚀 ~ title:", title);
  console.log("🚀 ~ count:", count);
  console.log("🚀 ~ isActive:", isActive);

  return <></>;
};
