
function  Projects({projm}){
  
  return (<div>
    <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
    {projm.map((el,i)=><div class="project-card">
          <img src={el.pimg} alt="project img" />
          <h3>{el.projtitle}</h3>
          <p>
            {el.descript}
          </p>
          <p><a href="#Gallery">Gallery</a></p>
        </div>
  )
  }</div>
  </section>
  </div>
  )}

export default Projects