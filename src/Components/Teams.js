import managementData from './managementData';
import StudentData from './studentData';
import formerSecretaryData from './formerSecretaryData';
function ImgManagement(props){
    return <div className="imageDat" key={props.key}>
        <div>
        <img src={props.imgUrl} className="Images" alt=" not found"></img>
        <div className="imgName">{props.name}</div>
        <div className="imgStatus">{props.status}</div>
        </div>
    </div>
}

function students(props){
    return <div className="imageDat" key={props.key}>
        <img src={props.imgUrl} className="Images" alt="not found"></img>
        <div className="imgName">{props.name}</div>
        <div style={{textAlign:'center'}}>
        <a href={props.facebookProfile} className="fa fa-facebook" target="blank"></a>
        <a className="fa fa-linkedin" href={props.linkedinProfile} target="blank"></a>
        </div>
    </div>
}
function formerSecretary(props){
    return <div className="imageDat" key={props.key}>
        <img src={props.imgUrl} className="Images" alt="not found"></img>
        <div className="imgName">{props.name}</div>
        <div style={{textAlign:'center'}}>
        <a href={props.facebookProfile} className="fa fa-facebook" target="blank"></a>
        <a className="fa fa-linkedin" href={props.linkedinProfile} target="blank"></a>
        </div>
    </div>
}

function Team(){
    return <div className="team">
        <span style={{color:"rgba(14, 13, 13, 0.911)", fontWeight:700,fontSize:25}}>Team</span>
        <hr></hr>

        <p style={{color:"rgb(122, 115, 115)"}}>Management</p>
        {managementData.map(ImgManagement)}
        <p style={{color:"rgb(122, 115, 115)",marginTop:35}}>Students' Body</p>
        {StudentData.map(students)}
        <p style={{color:"rgb(122, 115, 115)",marginTop:35}}>Former Secretary</p>
        {formerSecretaryData.map(formerSecretary)}

    </div>
}
export default Team;