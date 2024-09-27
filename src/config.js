var config = {
  style: "mapbox://styles/leastnutrify/cm1j5c0yl00dk01r2b5tn5fyd",
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
        '<span style="font-size:24px">Osun State shines and thrive for better health care for all. </span><br><br><i>Mapping Osun State Primary Health Centers</i> | By <a target = "_blank" href = "https://connorrothschild.github.io/">Jayeola Gbenga</a><br><span style = "color:darkgrey;">(Scroll &#x2913; to explore)</span>',
      location: {
        center: [4.558, 7.118],
        zoom: 8.21,
        pitch: 1,
        bearing: -86.9,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "osun-PHC",
          opacity: 0.75,
        },
        {
          layer: "Iwo",
          opacity: 0,
        },
        {
          layer: "OsogboFocus",
          opacity: 0,
        },
        {
          layer: "referral-Cases",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "osun-PHC",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "chapter1-id",
      alignment: "left",
      image: "../assets/chapter1.jpg",
      title: "Oyediran Residents without access to Primary Health Care",
      description:
        "For over eight years, residents of Oyediran village in Osun State have been without access to healthcare, as their once-operational primary health centre has been abandoned. <br> <br> As reported by Noah Aderoju, this has left villagers, especially pregnant women, facing dangerous, long-distance journeys on poor roads to reach medical services in nearby towns. The situation worsens during the rainy season, with residents trapped by flooding, further highlighting the critical need for a functional health facility.<br><br> <a href='https://checkmyphc.org/blog/phc-in-oyediran-village-aground-for-over-8-years-as-residents-bemoan'>Source: Orodata Science Report</a>",
      location: {
        center: [4.163, 7.679],
        zoom: 10.95,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Iwo",
          opacity: 0.2,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter2-id",
      alignment: "left",
      image: "../assets/chapter2.jpg",
      description:
        "Each ward is expected to have a primary health care centre (PHC) in accordance with the standards set by the National Primary Health Care Development Agency (NPHCDA). However, a major challenge facing Oyediran and its neighbouring communities is inadequate staffing at their PHC. <br><br> According to NPHCDA guidelines, a functional PHC should have a minimum staffing level that includes doctors, nurses, midwives, community health extension workers (CHEWs), and support staff to adequately serve the community’s needs. In Oyediran, the absence of essential health workers has left residents struggling to access basic healthcare services",
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
          layer: "Iwo-PHC",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Iwo-PHC",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter3-id",
      alignment: "left",
      image: "../assets/chapter3.jpg",
      description:
        "Iwo Local Government Area, comprising 15 wards, is predominantly an agricultural community with a significant portion of the population engaged in farming. Residents cultivate crops such as cocoa, yams, maize, cassava, and vegetables, which are both consumed locally and traded in markets across the region. Due to its fertile soil and favorable climate, Iwo serves as a key agricultural hub in Osun State.",
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
          layer: "Iwo-PHC",
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter4-id",
      alignment: "left",
      // image: "../assets/chapter3.jpg",
      description:
        "In emergency cases or when the centre lacks the necessary resources to handle a situation, patients are typically referred to either a comprehensive Primary Health Centre, where a medical officer is on standby, or to a state-owned general hospital. However, in most instances, private health centres are the first choice due to their proximity to Iwo, compared to Asubiaro General Hospital, LAUTECH Teaching Hospital, and Jolayemi Hospital, all located in Osogbo",
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
          layer: "referral-Cases",
          opacity: 1,
        },
        {
          layer: "Osogbo",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "referral-Cases",
          opacity: 0,
        },
        {
          layer: "Osogbo",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter5-id",
      alignment: "left",
      // image: "../assets/chapter3.jpg",
      description:
        "In emergency cases or when the centre lacks the necessary resources to handle a situation, patients are typically referred to either a comprehensive Primary Health Centre, where a medical officer is on standby, or to a state-owned general hospital. However, in most instances, private health centres are the first choice due to their proximity to Iwo, compared to Asubiaro General Hospital, LAUTECH Teaching Hospital, and Jolayemi Hospital, all located in Osogbo",
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
          layer: "OsogboFocus",
          opacity: 1,
        },
        {
          layer: "OsogboBoundary",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "OsogboFocus",
          opacity: 0,
        },
        {
          layer: "OsogboBoundary",
          opacity: 0,
        },
      ],
    },
  ],
};
