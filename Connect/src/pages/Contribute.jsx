import React from "react";
import ClgExpContribute from "../components/ContributionComponents/ClgExpContribute";
import WorkExpContribute from "../components/ContributionComponents/WorkExpContribute";
import ResumeContribute from "../components/ContributionComponents/ResumeContribute";
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
