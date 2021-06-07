export default [
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#a5a5a5",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#0c5a15",
      },
    ],
  },
  // {
    // featureType: "poi.medical",
  //   elementType: "geometry",
  //   stylers: [
  //     {
  //       color: "#fcfcfc",
  //     },
  //   ],
  // },
  {
    featureType: "poi.place_of_worship",
    elementType: "geometry",
    stylers: [
      {
        invert_lightness: true,
      },
    ],
  },
  // {
  //   featureType: "poi.school",
  //   elementType: "geometry.fill",
  //   stylers: [
  //     {
  //       color: "#ffffff",
  //     },
  //   ],
  // },
  {
    featureType: "poi.sports_complex",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#ad0b0b",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#abdfec",
      },
    ],
  },
];
