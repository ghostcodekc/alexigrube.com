/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import Item from "./project-info-item"

type ProjectInfoProps = {
  project: {
    client: string
    date: string
    service: string
  }
}

const ProjectInfo = ({ project }: ProjectInfoProps) => (
  <Flex sx={{ mt: 4, mb: [2, 4], flexWrap: `wrap` }}>
    {/* <Item name="Title" content={project.title} /> */}
    <Item name="Medium" content={project.service} />
    <Item name="Date" content={project.date} />
  </Flex>
)

export default ProjectInfo
