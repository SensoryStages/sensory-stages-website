import React, { useState, useEffect } from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {

  useEffect(() => emailjs.init("R83IwOLiq8B22gn6Q"), []);

  // State to hold form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referralSource: '',
    helpType: '',
    message: '',
  });

  // Handler to update form values
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Handler to handle select dropdown changes
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    // Type assertion to tell TypeScript that the event parameter is of type SelectChangeEvent<string>
    handleChange(event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
  };

  // Handler to submit the form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can perform form submission logic here
    const serviceId = "service_0qr8kyk";
    const templateId = "template_p260hd5";
    try {
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        referralSource: formData.referralSource,
        helpType: formData.helpType,
         message: formData.message
       });
      console.log('Form data submitted:', formData);
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        referralSource: '',
        helpType: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  console.log("This is the formData in Contact.tsx", formData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              fullWidth
              variant="outlined"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
          <TextField
            margin="dense"
            required
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          </Grid>

          <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            InputProps={{
              startAdornment: <InputAdornment position="start">+1</InputAdornment>,
            }}
          />
          </Grid>

          <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" required margin="dense">
            <InputLabel>How did you hear about us?</InputLabel>
            <Select
              name="referralSource"
              value={formData.referralSource}
              onChange={handleSelectChange} 
              label="How did you hear about us?"
            >
              <MenuItem value="Personal Referral">Personal Referral</MenuItem>
              <MenuItem value="Social Media">Social Media</MenuItem>
              <MenuItem value="Neurodiversity Resource">Neurodiversity Resource</MenuItem>
              <MenuItem value="Search Engine">Search Engine</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" required margin="dense">
            <InputLabel>How can we Help?</InputLabel>
            <Select
              name="helpType"
              value={formData.helpType}
              onChange={handleSelectChange}
              label="How can we Help?"
            >
              <MenuItem value="Inclusion Consulting">Inclusion Consulting</MenuItem>
              <MenuItem value="Sensory Friendly Production Consulting">
                Sensory Friendly Production Consulting
              </MenuItem>
              <MenuItem value="Partnership Opportunity">Partnership Opportunity</MenuItem>
              <MenuItem value="General Questions">General Questions</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              fullWidth
              variant="outlined"
              label="Message"
              name="message"
              multiline
              rows={8}
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>

          <Grid
            item
            xs={12}
            textAlign='right'
            marginBottom={3}
            marginRight={2}
          >
            <Button type="submit" variant="contained" style={{backgroundColor: '#3e6a74', width: '30vw'}}>
              Submit
            </Button>
          </Grid>
          <Grid item minHeight={4} justifyContent='center' alignItems='center'>
            <Typography marginBottom={3} marginLeft={2} textAlign='center' variant='h6'>
              Please allow 24-72 hour for a response.
            </Typography>
          </Grid>
        </Grid>
    </form>
    </div>
  );
};

export default Contact;





// import React, { useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';

// function Contact() {

//   useEffect(() => emailjs.init("R83IwOLiq8B22gn6Q"), []);


//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     referralSource: '',
//     helpType: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // const handleSelectChange = (event: HTMLSelectElement) => {
//   //   // Type assertion to tell TypeScript that the event parameter is of type SelectChangeEvent<string>
//   //   handleChange(event);
//   // };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(formData);
//     const serviceId = "service_0qr8kyk";
//     const templateId = "template_p260hd5";
//     try {
//       await emailjs.send(serviceId, templateId, {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         referralSource: formData.referralSource,
//         helpType: formData.helpType,
//         message: formData.message
//       });
//       console.log('Form data submitted:', formData);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         referralSource: '',
//         helpType: '',
//         message: '',
//       });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   }

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name (required):</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email (required):</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="referralSource">Referral Source (required):</label>
//           <select
//             id="referralSource"
//             name="referralSource"
//             value={formData.referralSource}
//             onChange={handleChange}
//             required
//           >
//             <option value="Personal Referral">Personal Referral</option>
//             <option value="Social Media">Social Media</option>
//             <option value="Neurodiversity Resource">Neurodiversity Resource</option>
//             <option value="Search Engine">Search Engine</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="helpType">Help Type (required):</label>
//           <select
//             id="helpType"
//             name="helpType"
//             value={formData.helpType}
//             onChange={handleChange}
//             required
//           >
//             <option value="Inclusion Consulting">Inclusion Consulting</option>
//             <option value="Sensory Friendly Production Consulting">Sensory Friendly Production Consulting</option>
//             <option value="Partnership Opportunity">Partnership Opportunity</option>
//             <option value="General Questions">General Questions</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="message">Message (required):</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Contact;
