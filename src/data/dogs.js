export const dogs = [
  { id: "HP11111", call: "Juno", name: "GCH CH Taji Alster's Twelfth Moon SCN SIN SEN", breed: "Basenji" },
  { id: "HP13243", call: "Echo", name: "DC Taji's Alster Echo RA MC LCX4", breed: "Basenji" },
  { id: "HP33412", call: "Arti", name: "Artimus Maximus Youngs", breed: "Beauceron" }
];

export const events = [
  {
    id: "GCCKC20181202", date: "12/02/2018", club: "Greater Clark County Kennel Club",
    scentwork: [
      { interiors: ["Novice A", "Novice B", "Advanced", "Excellent"] },
      { exteriors: ["Novice A", "Novice B", "Advanced", "Excellent"] },
      { containers: ["Novice A", "Novice B", "Advanced", "Excellent"] },
      { buried: ["Novice A", "Novice B", "Advanced", "Excellent"] },
    ]
  },
  {
    id: "GCCKC20181203", date: "12/03/2018", club: "Greater Clark County Kennel Club",
    scentwork: [
      { interiors: ["Novice A", "Novice B", "Advanced", "Excellent"] },
      { exteriors: ["Novice A", "Novice B", "Advanced", "Excellent"] },
      { containers: ["Novice A", "Novice B", "Advanced", "Excellent"] },
      { buried: ["Novice A", "Novice B"] },
    ]
  },
  {
    id: "GCCKC20181204", date: "12/04/2018", club: "Greater Clark County Kennel Club",
    scentwork: [
      { interiors: ["Novice A", "Novice B", "Advanced", "Excellent"] },
      { exteriors: ["Novice A", "Novice B", "Advanced", "Excellent"] },
      { containers: ["Novice A", "Novice B", "Advanced", "Excellent"] },
      { buried: ["Novice A", "Novice B"] },
    ]
  }
];

export const entries = [
  {
    dog: "HP11111",
    event: "GCCKC20181202",
    scentwork: [
      { interiors: { level: "Advanced" } },
      { exteriors: { level: "Advanced", qualified: true, time: "00:06.49", faults: 0 } },
      { containers: { level: "Advanced" } },
      { buried: { level: "Novice B" } }
    ]
  },
  {
    dog: "HP11111",
    event: "GCCKC20181203",
    scentwork: [
      { interiors: { level: "Advanced" } },
      { exteriors: { level: "Advanced", qualified: true, time: "00:12.56", faults: 0 } },
      { containers: { level: "Advanced" } },
      { buried: { level: "Novice B" } }
    ]
  },
  {
    dog: "HP11111",
    event: "GCCKC20181204",
    scentwork: [
      { interiors: { level: "Advanced" } },
      { exteriors: { level: "Advanced" } },
      { containers: { level: "Advanced" } },
      { buried: { level: "Novice B" } }
    ]
  },
  {
    dog: "HP33412",
    event: "GCCKC20181202",
    scentwork: [
      { interiors: { level: "Novice B" } },
      { exteriors: { level: "Novice B", qualified: true, time: "00:16.49", faults: 0 } },
      { containers: { level: "Novice B" } }
    ]
  }
];
