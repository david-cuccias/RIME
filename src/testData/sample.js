const sampleData = [
  {
    test_id: "d3afc649-d59d-4947-a635-99827f200fe4",
    name: "Must be Int",
    category: "Feature Type",
    pass_num: 6,
    total_num: 11,
  },
  {
    test_id: "af05c5c3-48e7-48cb-b6b3-8e28ff885ef9",
    name: "Must be Float",
    category: "Feature Type",
    pass_num: 2,
    total_num: 10,
  },
  {
    test_id: "616615d1-d20b-4bd1-922e-5bd7d14764c2",
    name: "Must be String",
    category: "Feature Type",
    pass_num: 19,
    total_num: 20,
  },
  {
    test_id: "92b7c9a6-bcca-4dc1-a85e-d4bef19afefd",
    name: "Feature Correlated with Label",
    category: "Label Analysis",
    pass_num: 40,
    total_num: 50,
  },
  {
    test_id: "513f4ddb-886a-436b-b95e-c27eded30f5c",
    name: "Duplicate Row",
    category: "Data Integrity",
    pass_num: 50,
    total_num: 50,
  },
  {
    test_id: "513f4ddb-886a-436b-b95e-c27edede0f5c",
    name: "Duplicate Column",
    category: "Data Integrity",
    pass_num: 0,
    total_num: 0,
  },
  {
    test_id: "513f4ddb-886a-436b-b95e-c27edede0f5c",
    name: "Too many nulls",
    category: "Null Values",
    pass_num: 1,
    total_num: 300,
  },
  {
    test_id: "513f4ddb-886a-436b-x95e-c27edede0f5c",
    name: "Too many nulls per column",
    category: "Null Values",
    pass_num: 10,
    total_num: 30,
  },
  {
    test_id: "513f4ddb-886a-436x-x95e-c27edede0f5c",
    name: "Too many nulls per row",
    category: "Null Values",
    pass_num: 11,
    total_num: 32,
  },
];

export default sampleData;
