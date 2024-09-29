var config = {
  style: "mapbox://styles/leastnutrify/cm1lmec1000ie01qt0bq4fxkp",
  accessToken: "pk.eyJ1IjoibGVhc3RudXRyaWZ5IiwiYSI6ImNtMWo1NWlhbzB2ZW4yanFsZWZxbmt2ZmsifQ.ZIM-_5pLv1Kxx7dR4sttFw",
  // inset: true,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  // auto: false,
  footer:
    'Source: <a target = "_blank" href = "https://digitalnigeria.gov.ng/challenge/">Mapping Osun State Primary Health Centres</a> | Built with <a target = "_blank" href = "https://www.mapbox.com/">Mapbox</a><br>Design: <a target = "_blank" href = "https://github.com/Segundev/">Jayeola Gbenga</a> | Find the source code <a target = "_blank" href = "https://github.com/Segundev/digital-innovation-challenge">here</a><br>Inspired By: <a href="https://connorrothschild.com">Connor Rothschild</a>',
  chapters: [
    {
      id: "title-id",
      alignment: "left",
      description:
        '<span style="font-size:24px;">Healthcare Access in <strong>Osun State</strong>: Progress Amidst Challenges <span>&#127973;</span>. </span><br><br>Mapping Osun State <strong style="color:#f6aa28;">Primary Health Centers</strong> | By <a target = "_blank" href = "https://www.linkedin.com/in/jayeola-gbenga/">Jayeola Gbenga</a><br><span style = "color:darkgrey;">(Scroll &#x2913; to explore)</span>',
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
        'For more than eight years, residents of Oyediran village in Osun State have lived without access to healthcare, as the once-operational primary health centre was abandoned. "We were overjoyed when the centre first opened," recalls Mrs. Funmilayo Segun, a local resident, "but that happiness quickly faded when the staff disappeared, and the place was left to decay.<br><br> <a href="https://checkmyphc.org/blog/phc-in-oyediran-village-aground-for-over-8-years-as-residents-bemoan">Source: Orodata Science Report</a>',
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
      id: "chapter1b-id",
      alignment: "left",
      image: "assets/chapter1b.jpg",
      description:
        "The centre’s closure has forced villagers, especially pregnant women, to make long and dangerous trips on bad roads to seek care in distant towns. Community leader Mr. Taofeek Amao explained that the health centre was abandoned due to a shortage of medical staff, with state health officials citing the remote location and past security concerns as major reasons for the withdrawal.<br><br> <span style = 'color:#f6aa28;'>&#9679;</span> <span> Primary Health Centre </span>",
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
      id: "chapter1c-id",
      alignment: "left",
      // image: "assets/chapter1b.jpg",
      description:
        "As reported by Noah Aderoju, who conducted an on-site investigation, the situation worsens during the rainy season when floods trap residents, forcing them to face dangerous journeys to reach medical care. This ongoing neglect underscores the urgent need for improved healthcare solutions in rural areas like Oyediran.<br><br> <span style = 'color:#f6aa28;'>&#9679;</span> <span> Primary Health Centre </span>",
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
      // image: "assets/chapter2.jpg",
      description:
        "In accordance with the standards set by the National Primary Health Care Development Agency (NPHCDA) each ward is expected to have a primary health care centre (PHC) <span>&#127973;</span>. However, a major challenge facing remote communities is inadequate staffing <span>&#128104;</span> at their PHC.<br><br> <span style = 'color:#f6aa28;'>&#9679;</span> <span> Primary Health Centre </span>",
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
      id: "chapter2b-id",
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
      id: "chapter4b-id",
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
      id: "chapter5-id",
      alignment: "left",
      title: "Osun thrives among its western pairs",
      image: "assets/chart1.png",
      description:
        "Most babies in Osun State are born in healthcare facilities, which is a good sign that more women are choosing professional care for childbirth. About 54% of deliveries happen in public hospitals and 32.1% in private clinics. Home births, which come with more risks, are less common here—only 12.3%—a much lower figure than in nearby states like Ondo and Ogun, where home deliveries are more frequent. <br><br> Despite this progress, there’s still work to be done to ensure even more women opt for hospital-based deliveries, reducing the risks that come with giving birth at home.",
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
      id: "chapter5b-id",
      alignment: "left",
      image: "assets/chart1.png",
      description:
        "When it comes to child health, Osun is showing some promise but also faces real challenges. The neonatal mortality rate still needs improvement, but the state does better in post-neonatal care, with fewer deaths compared to many others. <br><br>Even so, infant and under-5 mortality rates remain a serious concern. Osun has higher numbers than neighboring Lagos and Oyo, reminding us that while progress is being made, more efforts are needed to ensure more children in the state not only survive but thrive, especially during those crucial early years.",
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
    {
      id: "chapter6b-id",
      alignment: "left",
      image: "assets/renovation.jpg",
      description:
        "As these improvements unfold, it is crucial that the government remains committed to addressing staffing shortages and ensuring that healthcare access becomes a reality for every resident. The future of healthcare in Osun depends on the collaboration between the government, healthcare workers, and community members to build a healthier, more vibrant state for generations to come.<br><br> <span style = 'color:#f6aa28;'>&#9679;</span> <span> Primary Health Centre </span>",
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
    {
      id: "chapter7-id",
      title: "Data Source & References",
      alignment: "left",
      image: "assets/Adeleke.jpg",
      description:
        "<span style='color:darkgrey'>&#9679;</span> News Report Cited: <a href='https://checkmyphc.org/blog/phc-in-oyediran-village-aground-for-over-8-years-as-residents-bemoan'>PHC in Oyediran Village Remains Inoperative for 8 Years, Leaving Residents Frustrated</a><br><span style='color:darkgrey'>&#9679;</span> Primary Health Centre and Geospatial Data: <a href='https://grid3.org/geospatial-data-nigeria'>GRID3</a><br><span style='color:darkgrey'>&#9679;</span> Minimum PHC Staff Requirement: <a href='https://nphcda.gov.ng/'>NPHCDA </a>",
      location: {
        center: [4, 7.555],
        zoom: 8,
        pitch: 1,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
