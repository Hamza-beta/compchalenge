
function Contact(){
  return(
<section id="contact">
      <h2 class="text-important">contact me</h2>
      <form>
        <ul>
        <li><label>Full Name</label>
        <input type="text" placeholder="Name" />
        </li>
        <li>
        <label>Email</label>
        <input type="email" placeholder="Email" />
        </li>
        <li>
        <label>Message</label>
        <textarea rows="5" cols="40"></textarea>
        <button >Send</button>
        </li>
        </ul>
      </form>
    </section>
  )  
  }
  export default Contact