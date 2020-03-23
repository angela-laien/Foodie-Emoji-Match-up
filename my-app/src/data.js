const cards = [
    {
      value: "🍕" ,
      matched: false,
      flipped: false,
      id: 1
    },
    {
      value: "🍣" ,
      matched: false,
      flipped: false,
      id: 2
    },
    {
      value: "🍔" ,
      matched: false,
      flipped: false,
      id: 3
    },
    {
      value: "🍉" ,
      matched: false,
      flipped: false,
      id: 4
    },
    {
      value: "🥑" ,
      matched: false,
      flipped: false,
      id: 5
    },
    {
      value: "🥐"  ,
      matched: false,
      flipped: false,
      id: 6
    },
    {
      value: "🍦"  ,
      matched: false,
      flipped: false,
      id: 7
    },
    {
      value: "🌭" ,
      matched: false,
      flipped: false,
      id: 8
    },
    {
      value: "🍩" ,
      matched: false,
      flipped: false,
      id: 9
    },
    {
      value: "🍤" ,
      matched: false,
      flipped: false,
      id: 10
    },
    {
      value: "🍕",
      matched: false,
      flipped: false,
      id: 11
    },
    {
      value: "🍣",
      matched: false,
      flipped: false,
      id: 12
    },
    {
      value: "🍔",
      matched: false,
      flipped: false,
      id: 13
    },
    {
      value: "🍉",
      matched: false,
      flipped: false,
      id: 14
    },
    {
      value: "🥑",
      matched: false,
      flipped: false,
      id: 15
    },
    {
      value: "🥐",
      matched: false,
      flipped: false,
      id: 16
    },
    {
      value: "🍦",
      matched: false,
      flipped: false,
      id: 17
    },
    {
      value: "🌭",
      matched: false,
      flipped: false,
      id: 18
    },
    {
      value: "🍩",
      matched: false,
      flipped: false,
      id: 19
    },
    {
      value: "🍤" ,
      matched: false,
      flipped: false,
      id: 20
    }
  ];
  
  // This shuffles the cards every time.
  export default cards.sort(() => Math.random() - 0.5);
  