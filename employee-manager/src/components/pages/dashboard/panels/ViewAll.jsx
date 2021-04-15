import React  from "react";
import styled from "styled-components";
 

import AddEmployeeWidget from "./widgets/AddEmployeeWidget";
import EmployeeDisplayWidget from "./widgets/EmployeeDisplayWidget";

const ViewAllPanelStyles = styled.section`
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  aside {
    width: 480px;
  }
`;

const ViewAll = (props) => {
  return (
    <section>
      <ViewAllPanelStyles>
        <AddEmployeeWidget />
        <EmployeeDisplayWidget />
      </ViewAllPanelStyles>
    </section>
  );
};

export default ViewAll;
