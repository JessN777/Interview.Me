import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  companyName: "your company",
  companyPosition: "employee",
  companyValues: "friendly",
  questions: [],
});

export { useGlobalState, setGlobalState };
