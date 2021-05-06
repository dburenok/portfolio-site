function ProjectImageVideo({ project }) {

  const videoUrl = "https://www.youtube.com/embed/" + project.videoUrl;
  const style = { width: "200px", padding: "10px 25px 10px 25px" }

  return (
    <div className="project">
      <ul className="projectContainer">
        <li><img style={{ width: "400px", padding: "50px 50px 10px 50px" }} src={project.logo} alt="Logo" /></li>
        <li><p className="blurb" style={{ width: "250px", padding: "10px 0px 10px 50px" }}>{project.blurb}</p></li>
        <li><img style={{ width: "175px", padding: "10px 0px 10px 0px" }} src={project.image} alt="" /></li>
        <li><iframe
          style={{ padding: "0px 50px 0px 50px", borderStyle: "none" }}
          title="Scanbot Video Demo"
          width="400"
          height="225"
          className="embed-responsive-item"
          src={videoUrl} allowFullScreen>
        </iframe></li>
        <ul className="bottomContainer">
          <li style={style}>
            <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>Technologies Used:</h2>
            {project.tech.map((item) => {
              return <li style={{ fontSize: "24px" }}>{item}</li>
            })}
          </li>
          {project.repoUrl &&
            <li style={style}>
              <a href={project.repoUrl}><h2>GitHub Repo</h2></a>
            </li>}
        </ul>
      </ul>
    </div>
  )
}

export default ProjectImageVideo