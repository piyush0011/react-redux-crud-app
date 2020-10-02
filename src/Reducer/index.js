import { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from "../ActionType";

const initialState = {
  items: [
    {
      logo:
        "https://www.prestigeconstructions.com/wp-content/uploads/2017/08/prestige-group-logo.png",
      imgURL:
        "https://www.prestigeconstructions.com/wp-content/uploads/prestige-misty-waters-vista-towers-exterior-view-1170x600.jpg",
      imgTitle: "Prestige Misty Waters",
      title: "Prestige Estates Projects",
      totalExp: "32",
      totalProjects: "241",
      desc:
        "Prestige Group is a prominent real-estate developer in india with 32 years of rich experience .It established itself as one of the leading and most successful developers of real estate in India by imprinting its indelible mark across all asset classes.",
      location: "Bangalore,Nagavara",
      id: 1,
    },
    {
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8o8IhAE_pIKlWx6fIBqELxMFj1hE_PlXgTuMx2yQxlSpAbvR",
      imgURL:
        "https://is1-2.housingcdn.com/4f2250e8/5dd8ed6c0ce7cc009f60645d5e215574/v5/fs/concorde_tech_turf-electronics_city_phase_1-bengaluru-concorde_housing_corporation_pvt._ltd..jpg",
      imgTitle: "Concorde Spring Meadows",
      title: "Concode Housing ltd",
      totalExp: "20",
      totalProjects: "24",
      desc:
        "The Concorde Group was set up in 1998 with a vision to create sustainable values for stakeholders and deliver customer delight. In almost 2 decades, the company has developed over 20 million square feet of real estate space, consistently delivering satisfaction to its customers through its innovative offerings and professionalism in every aspect of its dealings. Known for building long-lasting value for its customers, the leadership at Concorde persistently strives towards delivering performance that make a difference. A Concorde homeowner is one who looks for high level quality, aesthetics and future growth. We deliver this with trust, transparency, and fairness. Your search for a good home ends here.",
      location: "Jallahali,Bangalore",
      id: 2,
    },
    {
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3N5Wn9mHlv4F8TYhU89YkFONTQgXSSPnmScH2Nx2_qWMD1T7zw",
      imgURL:
        "http://www.jainheights.com/gocart/themes/jainheights/assets/images/ban02.jpg",
      imgTitle: "Jain Rain Forests",
      title: "Jain Heights",
      totalExp: "9",
      totalProjects: "5",
      desc:
        "Jain Heights have pioneered in nurturing the concept of Style and Stature in living standards and adding immense value to our business credibility. Our vision and endeavour has always been to create world-class spaces and provide a high quality of life for people who personify themselves with a sense of luxury, convenience and an enduring relationship.",
      location: "Devanahalli,Bangalore",
      id: 3,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_PROJECT: {
      state.items[action.payload.index] = action.payload;
      return {
        ...state,
        items: [...state.items],
      };
    }
    case DELETE_PROJECT: {
      state.items.splice(action.payload, 1);
      return {
        items: [...state.items],
      };
    }
    default:
      return state;
  }
};

export default reducer;
