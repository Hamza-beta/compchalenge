
function About({name,img}){
  return (
<section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">{name}</span>,<br />
        and i make horrible websites.
      </h1>
      <img className="avatar" src={img} alt={name}/>
    </section>
    )}
    export default About