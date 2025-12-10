export default [
  {
    _id: "RS101",
    name: "Rocket Propulsion",
    number: "RS4550",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    department: "D123",
    credits: 4,
    description: "This course provides an in-depth study of the fundamentals of rocket propulsion...",
    modules: [
      {
        _id: "M101",
        name: "Introduction to Rocket Propulsion",
        description: "Basic principles of rocket propulsion and rocket engines.",
        course: "RS101",
        lessons: [
          {
            _id: "L101",
            name: "History of Rocketry",
            description: "A brief history of rocketry.",
            module: "M101"
          },
          {
            _id: "L102",
            name: "Rocket Propulsion Fundamentals",
            description: "Basics of rocket propulsion.",
            module: "M101"
          },
          {
            _id: "L103",
            name: "Rocket Engine Types",
            description: "Overview of different rocket engine types.",
            module: "M101"
          }
        ]
      },
      {
        _id: "M102",
        name: "Fuel and Combustion",
        description: "Understanding rocket fuel, combustion processes, and efficiency.",
        course: "RS101",
        lessons: [
          {
            _id: "L201",
            name: "Rocket Fuel",
            description: "Types of rocket fuel.",
            module: "M102"
          },
          {
            _id: "L202",
            name: "Combustion Processes",
            description: "Combustion in rocket engines.",
            module: "M102"
          },
          {
            _id: "L203",
            name: "Efficiency and Performance",
            description: "Measuring rocket engine performance.",
            module: "M102"
          }
        ]
      },
      {
        _id: "M103",
        name: "Nozzle Design",
        description: "Principles of rocket nozzle design and performance optimization.",
        course: "RS101",
        lessons: [
          {
            _id: "L301",
            name: "Nozzle Fundamentals",
            description: "Basic nozzle design principles.",
            module: "M103"
          },
          {
            _id: "L302",
            name: "Nozzle Types",
            description: "Different types of rocket nozzles.",
            module: "M103"
          },
          {
            _id: "L303",
            name: "Performance Optimization",
            description: "Optimizing nozzle performance.",
            module: "M103"
          }
        ]
      }
    ]
  },
  {
    _id: "RS102",
    name: "Aerodynamics",
    number: "RS4560",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    department: "D123",
    credits: 3,
    description: "Comprehensive exploration of aerodynamics.",
    modules: [
      {
        _id: "M201",
        name: "Introduction to Aerodynamics",
        description: "Basic aerodynamic principles and concepts.",
        course: "RS102",
        lessons: [
          {
            _id: "L401",
            name: "Fluid Dynamics",
            description: "Fundamentals of fluid dynamics.",
            module: "M201"
          },
          {
            _id: "L402",
            name: "Airflow Patterns",
            description: "Understanding airflow around objects.",
            module: "M201"
          }
        ]
      },
      {
        _id: "M202",
        name: "Subsonic and Supersonic Flow",
        description: "Characteristics of different flow regimes.",
        course: "RS102",
        lessons: [
          {
            _id: "L501",
            name: "Subsonic Flow",
            description: "Flow below the speed of sound.",
            module: "M202"
          },
          {
            _id: "L502",
            name: "Supersonic Flow",
            description: "Flow above the speed of sound.",
            module: "M202"
          }
        ]
      }
    ]
  }
];
