import axios from "axios";

export default axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    'x-rapidapi-key': '25ea486370msheaf43ad37e37c3ap146ebbjsne38fad4550d5',
    'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
  },
});