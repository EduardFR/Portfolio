import styled from "styled-components";
import BitmapImage from "../../assets/Bitmap.png";
import ProjectDescription from "./ProjectDescription";

const ProjectStyle = styled.div``;

const ProjectImage = styled.div`
  background-image: url(${BitmapImage});
  height: 400px;
  margin-bottom: 20px;
`;

function Project() {
  return (
    <ProjectStyle>
      <ProjectImage />
      <ProjectDescription />
    </ProjectStyle>
  );
}

export default Project;
