import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import image from "@/assets/images/bb_image.jpg";
import logo from "@/assets/images/logo_breaking_bad.png";

interface IPreviewState {
  active: boolean;
  content: {
    title: string;
    image: string;
    logo: string;
    description: string;
    year: number;
    cast: string[];
    genres: string[];
    creators: string[];
    categories: string[];
    maturityRating: {
      number: 0 | 7 | 10 | 13 | 16 | 18;
      description: string[];
    };
    seasons: {
      number: number;
      title: string | null;
      episodes: {
        number: number;
        title: string;
        description: string;
        duration: number;
        img: string;
      }[];
    }[];
  };
  selectedSeason: number;
}

const initialState: IPreviewState = {
  active: false,
  content: {
    title: "Breaking Bad",
    image: image,
    logo: logo,
    description:
      "Gdy nauczyciel chemii dowiaduje się, że ma raka, postanawia rozpocząć produkcję metamfetaminy, by finansowo zabezpieczyć swoją rodzinę.",
    year: 2013,
    cast: [
      "Bryan Cranston",
      "Aaron Paul",
      "Anna Gunn",
      "Dean Norris",
      "Betsy Brandt",
      "RJ Mitte",
    ],
    genres: ["Dramat", "Kryminał"],
    creators: ["Vince Gilligan"],
    categories: ["Brutalny", "Mocny", "Mroczny"],
    maturityRating: {
      number: 16,
      description: ["violence", "language", "substances"],
    },
    seasons: [
      {
        number: 1,
        title: null,
        episodes: [
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 2,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 3,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 4,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 5,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 6,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
        ],
      },
      {
        number: 2,
        title: null,
        episodes: [
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 2,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 3,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 4,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
        ],
      },
      {
        number: 3,
        title: null,
        episodes: [
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 2,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 3,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 4,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 5,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 6,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
        ],
      },
      {
        number: 4,
        title: null,
        episodes: [
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },

          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 2,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 3,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 4,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 5,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 6,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
        ],
      },
      {
        number: 5,
        title: null,
        episodes: [
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },

          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 1,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 2,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 3,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 4,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 5,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
          {
            number: 6,
            title: "Pilot",
            description:
              "Nauczyciel chemii w szkole średniej dowiaduje się, że ma nieuleczalnego raka płuc. Aby zapewnić byt rodzinie, bierze się za produkcję i rozprowadzanie metamfetaminy.",
            duration: 58,
            img: image,
          },
        ],
      },
    ],
  },
  selectedSeason: 1,
};

export const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    setPreviewActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },
    setContent: (
      state,
      action: PayloadAction<{
        title: string;
        image: string;
        logo: string;
        description: string;
        year: number;
        cast: string[];
        genres: string[];
        creators: string[];
        categories: string[];
        maturityRating: {
          number: 0 | 7 | 10 | 13 | 16 | 18;
          description: string[];
        };
        seasons: {
          number: number;
          title: string;
          episodes: {
            number: number;
            title: string;
            description: string;
            duration: number;
            img: string;
          }[];
        }[];
      }>
    ) => {
      state.content = action.payload;
    },
    setSelectedSeason: (state, action: PayloadAction<number>) => {
      state.selectedSeason = action.payload;
    },
  },
});

export const { setPreviewActive, setContent, setSelectedSeason } =
  previewSlice.actions;
export default previewSlice.reducer;
