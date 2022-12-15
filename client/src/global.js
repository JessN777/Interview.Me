import { createGlobalState } from "react-hooks-global-state";
import axios from "axios";

const { setGlobalState, useGlobalState } = createGlobalState({
  companyName: "your company",
  companyPosition: "employee",
  companyValues: "friendly",
  questions: [],
});

const axiosinstance = axios.create({
  baseURL: "http://localhost:5000",
});

async function postGptCommand(prompt, callback) {
  await axiosinstance
    .post("/create_question", {
      prompt: prompt,
    })
    .then((response) => {
      console.log(prompt["message"]);
      console.log(response.data.choices[0].text);
      callback(response.data.choices[0].text);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

export { useGlobalState, setGlobalState, postGptCommand };
