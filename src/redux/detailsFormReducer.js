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
        level: "Familiar",
      },
    ],
    experience: [
      {
        id: uuidv4(),
        jobTitle: "(Not specified)",
        employer: "",
        startDate: now,
        endDate: now,
        city: "",
        description: "",
      },
    ],
  },
  reducers: {
    inputEducation(state, action) {
      const { index, data } = action.payload;
      const { school, degree, startDate, endDate, city, description } = data;
      const temp = [...state.educations];
      temp[index] = {
        ...temp[index],
        school,
        degree,
        startDate,
        endDate,
        city,
        description,
      };
      return {
        ...state,
        educations: temp,
      };
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
    inputSkill(state, action) {
      const { index, data } = action.payload;
      const { skill, level } = data;
      const temp = [...state.skills];
      temp[index] = {
        ...temp[index],
        skill,
        level,
      };
      return {
        ...state,
        skills: temp,
      };
    },
    addSkill(state, action) {
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    },
    deleteSkill(state, action) {
      return {
        ...state,
        skills: state.skills.filter((skill) => skill.id !== action.payload),
      };
    },
    inputExperience(state, action) {
      const { index, data } = action.payload;
      const {
        jobTitle,
        employer,
        startDate,
        endDate,
        city,
        description,
      } = data;
      const temp = [...state.educations];
      temp[index] = {
        ...temp[index],
        jobTitle,
        employer,
        startDate,
        endDate,
        city,
        description,
      };
      return {
        ...state,
        experience: temp,
      };
    },
    addExperience(state, action) {
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };
    },
    deleteExperience(state, action) {
      return {
        ...state,
        experience: state.experience.filter((exp) => exp.id !== action.payload),
      };
    },
  },
});

export default detailsFormSlice.reducer;
