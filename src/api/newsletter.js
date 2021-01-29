import axios from 'axios';

export function postNewsletterEmail(email) {
    let config = {
        headers: {
            "content-type": "application/json",
            "api-key": "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"
        }
    }

    let data = {"email": email}

    return axios.post(  'https://api.sendinblue.com/v3/contacts', data, config);
  }
