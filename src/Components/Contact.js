function Form(){
    return <form method="post" action="/">
        <p>Give your details and we will contact you.</p>
        <label>Name</label>
        <input type="text" name="name" autoComplete="off" required></input>
        <label>Email</label>
        <input type="email" name="email" autoComplete="off" required></input>
        <label>Message</label>
        <textarea name="message" rows="10" style={{resize:"none",padding:5}}></textarea>
        <input type ="submit" id="submit" value="Submit"></input>
    </form>
}
function Address(){
    return <div className="box addrbox">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <span style={{color:"blue"}}>Address</span>
        <p id="addressP">Tinkering laboratory, Hafiz Mohd. Ibrahim Building, Opposite Security office,IIT Roorkee,
            Roorkee, Haridwar district, Uttarakhand, India</p>
        <div id="addressDiv">
        <i className="fa fa-phone" aria-hidden="true"></i>
        <span style={{color:"blue"}}>Phone</span>
        <p style={{color: "rgb(148, 138, 138)"}}>+91 1332 286581</p>
        </div>
    </div>
}
function Mail(){
    return <div className="box mailbox">
        <img src="mail.png" alt="Not found"></img>
        <span style={{paddingLeft:10,color:"blue"}}>Mail</span>
 
        <p style={{ color: "rgb(148, 138, 138)"}}>rethinktinkering@iitr.ac.in</p>
        <div id="mailDiv">
        <img src="mail.png"alt="Not found"></img>
        <span style={{paddingLeft:10,color:"blue"}}>Mail(Student Body)</span>
        <p style={{color: "rgb(148, 138, 138)"}}>tinkeringlab@iitr.ac.in</p>
        </div>
    </div>
}
function Contact(){
    return <div className="cont">
        <p style={{color:"rgba(14, 13, 13, 0.911)", fontWeight:700,fontSize:25 }} id="contP">Contact</p>
        <hr></hr>
        <div className="contactSection">
        <div className="contactSectionEle" ><Form></Form></div>
        <Address></Address>
        <Mail></Mail>
        
        </div>
    </div>
    
}
export default Contact;