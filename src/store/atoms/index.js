import { atom, atomFamily } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const listState = atom({
  key: uuidv4(),
  default: [],
});

export const configState = atomFamily({
  key: uuidv4(),
  default: null,
});
