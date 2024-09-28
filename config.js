var config = {
  style: "mapbox://styles/leastnutrify/cm1lmec1000ie01qt0bq4fxkp",
  accessToken: "pk.eyJ1IjoibGVhc3RudXRyaWZ5IiwiYSI6ImNtMWo1NWlhbzB2ZW4yanFsZWZxbmt2ZmsifQ.ZIM-_5pLv1Kxx7dR4sttFw",
  // inset: true,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  // auto: false,
  footer:
    'Source: <a target = "_blank" href = "https://missingmigrants.iom.int">Mapping Osun State Primary Health Centres</a> | Built with <a target = "_blank" href = "https://www.mapbox.com/">Mapbox</a><br>Design: <a target = "_blank" href = "https://github.com/Segundev/">Jayeola Gbenga</a> | Find the source code <a target = "_blank" href = "https://github.com/Segundev/digital-innovation-challenge">here</a><br>Inspired By: <a href="https://connorrothschild.com">Connor Rothschild</a>',
  chapters: [
    {
      id: "title-id",
      alignment: "left",
      description:
        '<span style="font-size:24px;"><strong>Osun State</strong> shines and thrive for better health care <span>&#127973;</span> for all. </span><br><br>Mapping Osun State <strong style="color:#f6aa28;">Primary Health Centers</strong> | By <a target = "_blank" href = "https://connorrothschild.github.io/">Jayeola Gbenga</a><br><span style = "color:darkgrey;">(Scroll &#x2913; to explore)</span>',
      location: {
        center: [3.8, 7.555],
        zoom: 8.21,
        pitch: 1,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Osun Phc Glow",
          opacity: 0.55,
          duration: 3000,
        },
        {
          layer: "Iwo LGA Boundary",
          opacity: 0,
        },
        {
          layer: "Osun Ward",
          opacity: 0,
        },
        {
          layer: "Iwo Phc",
          opacity: 0,
        },
        {
          layer: "Referral Cases",
          opacity: 0,
        },
        {
          layer: "Osogbo LGA Boundary",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "Osun Phc Glow",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "chapter1-id",
      alignment: "left",
      image: "assets/chapter1.jpg",
      title: "Oyediran Residents without access to Primary Health Care",
      description:
        "For over eight years, residents of Oyediran village in Osun State have been without access to healthcare, as their once-operational primary health centre has been abandoned. <br> <br> As reported by Noah Aderoju<span>&#128240;</span>, this has left villagers, especially pregnant women, facing dangerous, long-distance journeys on poor roads to reach medical services in nearby towns. The situation worsens during the rainy season <span>&#127783;</span>, with residents trapped by flooding, further highlighting the critical need for a functional health facility.<br><br> <a href='https://checkmyphc.org/blog/phc-in-oyediran-village-aground-for-over-8-years-as-residents-bemoan'>Source: Orodata Science Report</a>",
      location: {
        center: [4.075, 7.679],
        zoom: 10.95,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Iwo LGA Boundary",
          opacity: 1,
        },
      ],
      onChapterExit: [
        // {
        //   layer: "Iwo LGA Boundary",
        //   opacity: 0,
        // },
      ],
    },
    {
      id: "chapter2-id",
      alignment: "left",
      // image: "assets/chapter2.jpg",
      description:
        "Each ward is expected to have a primary health care centre (PHC) <span>&#127973;</span> in accordance with the standards set by the National Primary Health Care Development Agency (NPHCDA). However, a major challenge facing Oyediran and its neighbouring communities is inadequate staffing <span>&#128104;</span> at their PHC.<br><br> <span style = 'color:#f6aa28;'>&#9679;</span> <span> Primary Health Centre </span>",
      location: {
        center: [4.22, 7.65],
        zoom: 13.5,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Iwo LGA Boundary",
          opacity: 1,
        },
        {
          layer: "Iwo Phc",
          opacity: 1,
        },
      ],
      onChapterExit: [
        // {
        //   layer: "Iwo Phc",
        //   opacity: 0,
        // },
      ],
    },
    {
      id: "chapter2-id",
      alignment: "left",
      image: "assets/chapter2.jpg",
      description:
        "According to NPHCDA guidelines, a functional PHC should have a minimum staffing level that includes doctors, nurses, midwives, community health extension workers (CHEWs), and support staff to adequately serve the community’s needs. In Oyediran, the absence of essential health workers <span>&#128104;</span> has left residents struggling to access basic healthcare services <br><br> <span style = 'color:#f6aa28;'>&#9679;</span> <span> Primary Health Centre </span>",
      location: {
        center: [4.22, 7.65],
        zoom: 13.5,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Iwo LGA Boundary",
          opacity: 1,
        },
        {
          layer: "Iwo Phc",
          opacity: 1,
        },
      ],
      onChapterExit: [
        // {
        //   layer: "Iwo Phc",
        //   opacity: 0,
        // },
      ],
    },
    {
      id: "chapter3-id",
      alignment: "left",
      image: "assets/chapter3.jpg",
      description:
        "Iwo Local Government Area, comprising 15 wards, is predominantly an agricultural community with a significant portion of the population engaged in farming. Residents cultivate crops <span>&#127805;</span> such as cocoa, yams, maize, cassava, and vegetables, which are both consumed locally and traded in markets across the region. Due to its fertile soil and favorable climate, Iwo serves as a key agricultural hub in Osun State. <br><br> <span style = 'color:#f6aa28;'>&#9679;</span> <span> Primary Health Centre </span>",
      location: {
        center: [4.05, 7.679],
        zoom: 10.95,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Iwo LGA Boundary",
          opacity: 0.3,
        },
        {
          layer: "Iwo Phc",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Iwo Phc",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter4-id",
      alignment: "left",
      // image: "../assets/chapter3.jpg",
      description:
        "In emergency cases or when the centre lacks the necessary resources to handle a situation, patients are typically referred to either a comprehensive Primary Health Centre, where a medical officer <span>&#128104;&#8205;&#9877;</span> is on standby, or to a state-owned general hospital. However, in most instances, private health centres are the first choice due to their proximity to Iwo, compared to Asubiaro General Hospital, LAUTECH Teaching Hospital, and Jolayemi Hospital, all located in Osogbo <br><br> <span style = 'color:#ffffff;'>&#9679;</span> <span> Private Hospitals </span><br> <span style = 'color:#21fb09;'>&#9679;</span> <span> Government Owned Tertiary Hospitals </span>",
      location: {
        center: [4.289, 7.611],
        zoom: 8.75,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Referral Cases",
          opacity: 1,
        },
        {
          layer: "Government Owned",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Referral Cases",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter5-id",
      alignment: "left",
      // image: "../assets/chapter3.jpg",
      description:
        "When patients are referred to a general hospital from Iwo, they are responsible for arranging their own transportation, often to Osogbo, Ife, or Ilesha, with Osogbo being the most common destination as the state capital. Due to the recent spike in fuel prices, the cost of public transportation from Iwo to Osogbo has risen to around <span style='color:#f6aa28'>&#8358;2500</span>. This figure is even higher for those who need to charter a private car <span>&#128652;</span> for urgent or critical medical cases, placing an additional financial burden on families already struggling with healthcare access. <br><br> <span style = 'color:#21fb09;'>&#9679;</span> <span> Government Owned Tertiary Hospitals </span>",
      location: {
        center: [4.529, 7.796],
        zoom: 11.8,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Osogbo LGA Boundary",
          opacity: 1,
        },
        {
          layer: "Government Owned",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Osogbo LGA Boundary",
          opacity: 0,
        },
        {
          layer: "Government Owned",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter6-id",
      alignment: "left",
      image: "assets/renovation.jpg",
      description:
        "Under the administration of Governor Ademola Adeleke, the Osun State government has embarked on a significant renovation <span>&#128679;</span> and upgrade of 345 primary healthcare centres across the state. This project is part of a broader effort to revitalize the healthcare system, with the Osun Primary Healthcare Renovation Committee actively monitoring progress at various facilities, including Atile, Odeyinka, and Edun-Abon Primary Health Centres. <br><br> <span style = 'color:#f6aa28;'>&#9679;</span> <span> Primary Health Centre </span>",
      location: {
        center: [3.8, 7.555],
        zoom: 9.21,
        pitch: 1,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Osun Phc",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Osun Phc",
          opacity: 0,
        },
      ],
    },
  ],
};
