// ApprovalWrapperPage.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CollegeApprovePage from './CollegeApprovePage';

import WorkApprovePage from './WorkApprovePage';
import Sidebar from './Sidebar';

const ApprovalWrapperPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 overflow-y-auto">
        <Routes>
          <Route path="/clgexp" element={<CollegeApprovePage />} />
          
          <Route path="/workexp" element={<WorkApprovePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default ApprovalWrapperPage;
