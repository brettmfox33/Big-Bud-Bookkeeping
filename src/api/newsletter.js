import axios from 'axios';

export function postNewsletterEmail(email) {
    return axios.post("https://bigbudbookkeeping-cms.appspot.com/newsletter-emails/", 
    {"Email_Address": email});
  }