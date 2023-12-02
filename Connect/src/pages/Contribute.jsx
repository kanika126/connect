import React from "react";
import ClgExpContribute from "../components/ClgExpContribute";
import WorkExpContribute from "../components/WorkExpContribute";
import ResumeContribute from "../components/ResumeContribute";
export default function Contribute() {
  return (
    <div>
      <ClgExpContribute />
      <br></br>
      <WorkExpContribute />
      <br></br>
      <ResumeContribute />
    </div>
  );
}
