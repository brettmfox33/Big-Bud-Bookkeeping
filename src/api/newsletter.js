import axios from 'axios';

export function postNewsletterEmail(email) {
    // return axios.post("https://bigbudbookkeeping-cms.appspot.com/newsletter-emails/", data);http://localhost:1337
    return axios.post("http://localhost:1337/newsletter-emails/", {"Email_Address": email});
  }