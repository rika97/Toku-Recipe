import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Typography } from '@mui/material';

const ReportBugsForm = ({reported, setReported}) => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(SERVICEKEY, TEMPLATEKEY, form.current, PUBLICKEY)
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });

//       e.target.reset();
//       setReported(true);
//   };

  return (
    <div>
        <Typography>Sorry we're working on this!</Typography>
        {/* <form ref={form} onSubmit={sendEmail}>
            <div>
                <label>Describe issue: </label>
            </div>
            <textarea name="message" />
            <div>
                <input type="submit" value="Send" />
            </div>
        </form> */}
    </div>
  )
}

export default ReportBugsForm;