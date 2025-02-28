const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyAmXWf3-8_-X443X50vYZLm1nk0v8BGfbI";
const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${API_KEY}`;
const SEARCH_SUGGESTION_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export {BASE_URL,API_KEY,YOUTUBE_VIDEO_API,SEARCH_SUGGESTION_API}