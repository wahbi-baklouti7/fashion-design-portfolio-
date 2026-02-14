import HeroModel from '../assets/hero-model.jpg';
import Collection1 from '../assets/col1.jpg';
import Collection2 from '../assets/col2.jpg';
import Collection3 from '../assets/col3.jpg';
import Collection4 from '../assets/col4.jpg';
import Collection5 from '../assets/col5.jpg';
import Collection6 from '../assets/col6.jpg';
import Collection7 from '../assets/col7.jpg';
import Collection8 from '../assets/col8.jpg';
import Collection9 from '../assets/col9.jpg';
import Process1 from '../assets/proc1.jpg';
import Process2 from '../assets/proc2.jpg';
import Process3 from '../assets/proc3.jpg';
import Process4 from '../assets/proc4.jpg';

export const ASSETS = {
  hero: {
    src: HeroModel,
    alt: "Hasna Rachmalia - SS26 Silence Editorial Portrait"
  },
  // Organized by collection ID/Season
  collections: {
    ss26: [
      {
        id: 1,
        src: Collection1,
        alt: "Hasna Rachmalia - SS26 Silence - Look 01",
        title: "Look 01"
      },
      {
        id: 2,
        src: Collection2,
        alt: "Hasna Rachmalia - SS26 Silence - Look 02",
        title: "Look 02"
      },
      {
        id: 3,
        src: Collection3,
        alt: "Hasna Rachmalia - SS26 Silence - Look 03",
        title: "Look 03"
      },
      {
        id: 4,
        src: Collection4,
        alt: "Hasna Rachmalia - SS26 Silence - Look 04",
        title: "Look 04"
      }
    ],
    ss2023: [
        {
          id: 5,
          src: Collection5, // Reusing for demo purposes
          alt: "Hasna Rachmalia - FW25 Echo - Look 01",
          title: "Look 01"
        },
        {
          id: 6,
          src: Collection6,
          alt: "Hasna Rachmalia - FW25 Echo - Look 02",
          title: "Look 02"
        },
        {
          id: 7,
          src: Collection7,
          alt: "Hasna Rachmalia - FW25 Echo - Look 03",
          title: "Look 03"
        },
        {
          id: 8,
          src: Collection8,
          alt: "Hasna Rachmalia - FW25 Echo - Look 04",
          title: "Look 04"
      },
        {
          id: 9,
          src: Collection9,
          alt: "Hasna Rachmalia - FW25 Echo - Look 04",
          title: "Look 04"
        }
      ]
  },

  process: [
    {
      id: 1,
      src: Process1,
      alt: "Hasna Rachmalia - SS26 Silence Collection Process 01",
      title: "Process 01"
    },
    {
      id: 2,
      src: Process2,
      alt: "Hasna Rachmalia - SS26 Silence Collection Process 02",
      title: "Process 02"
    },
    {
      id: 3,
      src: Process3,
      alt: "Hasna Rachmalia - SS26 Silence Collection Process 03",
      title: "Process 03"
    },
    {
      id: 4,
      src: Process4,
      alt: "Hasna Rachmalia - SS26 Silence Collection Process 04",
      title: "Process 04"
    }
  ]
};