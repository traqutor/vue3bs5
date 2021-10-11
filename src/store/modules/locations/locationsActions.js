import { Mutations, Actions } from "@/store/enums/EnumTypes";

const locations = [
  { id: "1", title: "Bed #01" },
  { id: "2", title: "Bed #02" },
  { id: "3", title: "Bed #03" },
  { id: "4", title: "Bed #04" },
  { id: "5", title: "Bed #05" },
  { id: "6", title: "Bed #06" },
  { id: "7", title: "Bed #07" },
  { id: "8", title: "Bed #08" },
  { id: "9", title: "Bed #09" },
  { id: "10", title: "Bed #10" },
  { id: "11", title: "Bed #11" },
  { id: "12", title: "Bed #12" },
  { id: "13", title: "Bed #13" },
  { id: "14", title: "Stairwell #001" },
  { id: "15", title: "Stairwell #002" },
  { id: "16", title: "Stairwell #003" },
  { id: "17", title: "Stairwell #004" },
  { id: "18", title: "Stairwell #005" },
  { id: "19", title: "Stairwell #006" },
  { id: "20", title: "Stairwell #007" },
  { id: "21", title: "Stairwell #008" },
  { id: "22", title: "Stairwell #009" },
  { id: "23", title: "Supply Closet #01" },
  { id: "24", title: "Supply Closet #02" },
  { id: "25", title: "Supply Closet #03" },
  { id: "26", title: "Supply Closet #04" },
  { id: "27", title: "Supply Closet #05" },
  { id: "28", title: "Supply Closet #06" },
  { id: "29", title: "Supply Closet #07" },
  { id: "30", title: "Supply Closet #08" },
];

export default {
  [Actions.onGetLocations]({ commit }) {
    commit(Mutations.setLocations, locations);
  },
};
