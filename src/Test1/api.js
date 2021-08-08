const axios = require("axios");

const interval = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};
  
const getRangeInfo = async () => {
    let isRetry = true;
    while(isRetry) {
        try {
            const rangeInfo = await axios.get("https://join.reckon.com/test1/rangeInfo");
            return rangeInfo?.data;            
        } catch (error) {
            console.error("Error:"+error?.response?.data?.message);
        }

        // Added delay so it does not bang up the server and cause rate limit issues.
        interval(200);  
    }
};

const getDivisorInfo = async () => {
    let isRetry = true;
    while(isRetry) {
        try {
            const divisorInfo = await axios.get("https://join.reckon.com/test1/divisorInfo");
            return divisorInfo?.data;           
        } catch (error) {
            console.error("Error:"+error?.response?.data?.message);
        }

        // Added delay so it does not bang up the server and cause rate limit issues.
        interval(200);  
    }
};

module.exports = {
    getRangeInfo,
    getDivisorInfo
};