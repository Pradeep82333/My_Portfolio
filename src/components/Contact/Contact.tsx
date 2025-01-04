// import { Container } from "./styles";
// import emailIcon from "../../assets/email-icon.svg";
// import phoneIcon from "../../assets/phone-icon.svg"
// import { Form } from "../Form/Form";


// export function Contact(){

//   return(
//     <Container id="contact">
//       <header>
//         <h2>Contact</h2>
//         <p>Ready to get started on your project? </p>
//         {/* <p>Contact me now for a Free consultation.</p> */}
//       </header>
//       <div className="contacts">
//         <div>
//         <a href="mailto:kongupradeep82333@gmail.com"><img src={emailIcon} alt="Email" /></a> 
//           <a href="kongupradeep82333@gmail.com">kongupradeep82333@gmail.com</a>
//         </div>
//         <div>
//         <a href="tel:+919488182333"><img src={phoneIcon} alt="Phone No" /></a>
//           <a href="tel:+919488182333">(+91) 9488182333</a>
//         </div>  
//       </div>
//       <Form></Form>
//     </Container>
//   )
// }



import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  const emailAddress = "kongupradeep82333@gmail.com";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
      </header>
      <div className="contacts">
        <div>
          <a href={gmailLink} target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href={gmailLink} target="_blank" rel="noopener noreferrer">{emailAddress}</a>
        </div>
        <div>
          <a href="tel:+919488182333">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+919488182333">(+91) 9488182333</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}