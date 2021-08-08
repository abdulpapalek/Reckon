const axios = require("axios");

const interval = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};
  
const getSubtexts = async () => {
    let isRetry = true;
    while(isRetry) {
        try {
            const subtexts = await axios.get("https://join.reckon.com/test2/subTexts");
            return subtexts?.data;            
        } catch (error) {
            console.error("Error:"+error?.response?.data?.message);
        }

        // Added delay so it does not bang up the server and cause rate limit issues.
        interval(200);  
    }
};

const getTextToSearch = async () => {
    let isRetry = true;
    while(isRetry) {
        try {
            const textToSearch = await axios.get("https://join.reckon.com/test2/textToSearch");
            return textToSearch?.data;         
        } catch (error) {
            console.error("Error:"+error?.response?.data?.message);
        }

        // Added delay so it does not bang up the server and cause rate limit issues.
        interval(200);  
    }
};

const submitResults = async (body) => {
    let isRetry = true;
    while(isRetry) {
        try {
            const resp = await axios.post("https://join.reckon.com/test2/submitResults", body);
            return { message: resp.data, body };        
        } catch (error) {
            console.error("Error:"+error?.response?.data?.message);
        }

        // Added delay so it does not bang up the server and cause rate limit issues.
        interval(200);  
    }
};

module.exports = {
    getSubtexts,
    getTextToSearch,
    submitResults
};