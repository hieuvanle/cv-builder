import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
  new Date()
);
const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(
  new Date()
);
const now = `${year}-${month}`;

const detailsFormSlice = createSlice({
  name: "detailsForm",
  initialState: {
    educations: [
      {
        id: uuidv4(),
        school: "(Not specified)",
        degree: "",
        startDate: now,
        endDate: now,
        city: "",
        description: "",
      },
    ],
    skills: [
      {
        id: uuidv4(),
        skill: "(Not specified)",
        level: "Novice",
      },
    ],
    experience: [
      {
        id: uuidv4(),
        jobTitle: "(Not specified)",
        Employer: "",
        startDate: now,
        endDate: now,
        city: "",
        description: "",
      },
    ],
  },
  reducers: {
    inputEducation(state, action) {
      return state;
    },
    addEducation(state, action) {
      return {
        ...state,
        educations: [...state.educations, action.payload],
      };
    },
    deleteEducation(state, action) {
      return {
        ...state,
        educations: state.educations.filter((edu) => edu.id !== action.payload),
      };
    },
    addSkill(state, action) {},
    deleteSkill(state, action) {},
    addExperience(state, action) {},
    deleteExperience(state, action) {},
  },
});

export default detailsFormSlice.reducer;
