// ApprovalWrapperPage.js
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CollegeExperiencesPage from './ApproveCollegeExpPage'; // Import your CollegeExperiencesPage
// Import other components for resumes and work experiences

const ApprovalWrapperPage = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Approval Requests</h1>
      <label htmlFor="approvalType">Select Type: </label>
      <select id="approvalType" onChange={handleTypeChange} value={selectedType}>
        <option value="" disabled>Select Type</option>
        <option value="collegeExperiences">College Experiences</option>
        <option value="resumes">Resumes</option>
        <option value="workExperiences">Work Experiences</option>
      </select>
      {selectedType && (
        <div>
          <h2 className="text-2xl font-bold mt-4">Selected Type: {selectedType}</h2>
          <Switch>
            <Route path={`/approve/collegeExperiences`}>
              <CollegeExperiencesPage />
            </Route>
            {/* Add routes for resumes and work experiences */}
            {/* Example: <Route path={`/approve/resumes`} component={ResumesPage} /> */}
          </Switch>
        </div>
      )}
    </div>
  );
};

export default ApprovalWrapperPage;
