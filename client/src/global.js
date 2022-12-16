import { createGlobalState } from "react-hooks-global-state";
import axios from "axios";

const { setGlobalState, useGlobalState } = createGlobalState({
  companyName: "your company",
  companyPosition: "employee",
  companyValues: "friendly",
  results: [],
});

const axiosinstance = axios.create({
  baseURL: "http://localhost:5000",
});

async function postGptQuestion(prompt, callback) {
  await axiosinstance
    .post("/create_question", {
      prompt: prompt,
    })
    .then((response) => {
      console.log(`Prompt: ${prompt["message"]}`);
      console.log(response.data.choices[0].text);
      callback(response.data.choices[0].text);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function postGptFeedback(prompt, callback) {
  await axiosinstance
    .post("/create_feedback", {
      prompt: prompt,
    })
    .then((response) => {
      console.log(`Prompt: ${prompt["message"]}`);
      console.log(response.data.choices[0].text);
      callback(response.data.choices[0].text);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
export { useGlobalState, setGlobalState, postGptQuestion, postGptFeedback };
