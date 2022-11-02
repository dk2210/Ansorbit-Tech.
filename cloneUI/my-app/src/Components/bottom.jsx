import { EmailIcon, FacebookIcon, LocationIcon } from "../asset/icons";
import { InstaIcon } from "../asset/icons/InstaIcon";

const Bottom = () => {
  return (
    <div style={{ textAlign: "left",padding:'5%',color:'white',backgroundImage:'url(https://www.ansorbit.com/assets/images/footer-bg1.png)' }}>
      <h1>Contact</h1>
      <div style={{ display: "flex" }}>
        <EmailIcon
          style={{background:'#1d42d9', marginRight: "10px", padding: " 5px",borderRadius:'5px' }}
          height='20px'
          width='20px'
        />
        dev@ansorbit.com
      </div>

      <div style={{ display: "flex" }}>
        <LocationIcon height='20px' width='20px'style={{background:'#1d42d9',borderRadius:'5px', margin: "23px 10px 0px 0px", padding: " 5px" }} />
        <p style={{width:'20%',lineHeight:'20px', padding: " 5px" }}>719, Fortune Business Hub, Science City Rd, near Shell Petrol Pump, Ahmedabad, Gujarat 380060</p>
      </div>

      <div style={{ display: "flex" }}>
        <FacebookIcon height='20px' width='20px' style={{background:'#1d42d9',borderRadius:'5px', marginRight: "10px", padding: " 5px" }}/>
        <InstaIcon height='20px' width='20px' style={{background:'#1d42d9',borderRadius:'5px', marginRight: "10px", padding: " 5px" }}/>
      </div>
    </div>
  );
};
export default Bottom;
