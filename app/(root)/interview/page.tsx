import Agent from "@/components/Agent";
import React from "react";

const page = () => {
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent type="generate" userName="You" />
    </>
  );
};

export default page;
