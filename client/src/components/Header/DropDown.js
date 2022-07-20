import "./DropDown.css";

function DropDown({ currentProject, setCurrentProject }) {
  // const [selectedProject, setSelectedProject] = useState(currentProject);

  const handleChange = (e) => {
    setCurrentProject(Number(e.target.value));
  };

  return (
    <select className="" value={currentProject} onChange={handleChange}>
      <option value="1">1</option>
      <option value="2">New Project</option>
    </select>
  );
}

export default DropDown;
