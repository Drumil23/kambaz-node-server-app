import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz";

const lessonSchema = new mongoose.Schema({
  _id: String,
  name: String,
  description: String,
  module: String,
}, { _id: false });

const moduleSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    description: String,
    course: { type: String, required: true },
    lessons: [lessonSchema],
  },
  { collection: "modules" }
);

const ModuleModel = mongoose.model("SeedModuleModel", moduleSchema);

// All modules for RS101 course
const modulesData = [
  {
    _id: "M101",
    name: "Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines.",
    course: "RS101",
    lessons: [
      {
        _id: "L101",
        name: "History of Rocketry",
        description: "A brief history of rocketry and space exploration.",
        module: "M101"
      },
      {
        _id: "L102",
        name: "Rocket Propulsion Fundamentals",
        description: "Basic principles of rocket propulsion.",
        module: "M101"
      },
      {
        _id: "L103",
        name: "Rocket Engine Types",
        description: "Overview of different types of rocket engines.",
        module: "M101"
      }
    ]
  },
  {
    _id: "M102",
    name: "Fuel and Combustion",
    description: "Understanding rocket fuel types and combustion processes.",
    course: "RS101",
    lessons: [
      {
        _id: "L201",
        name: "Liquid Fuel Systems",
        description: "Liquid propellant rocket engines and fuel delivery systems.",
        module: "M102"
      },
      {
        _id: "L202",
        name: "Solid Fuel Systems",
        description: "Solid propellant rocket motors and grain design.",
        module: "M102"
      },
      {
        _id: "L203",
        name: "Hybrid Engines",
        description: "Combining liquid oxidizers with solid fuel.",
        module: "M102"
      }
    ]
  },
  {
    _id: "M103",
    name: "Nozzle Design",
    description: "Aerodynamic principles and nozzle optimization.",
    course: "RS101",
    lessons: [
      {
        _id: "L301",
        name: "Convergent-Divergent Nozzles",
        description: "De Laval nozzle design and theory.",
        module: "M103"
      },
      {
        _id: "L302",
        name: "Nozzle Flow Analysis",
        description: "Analyzing supersonic flow through rocket nozzles.",
        module: "M103"
      },
      {
        _id: "L303",
        name: "Expansion Ratio Optimization",
        description: "Optimizing nozzle expansion for different altitudes.",
        module: "M103"
      }
    ]
  },
  {
    _id: "M104",
    name: "Rocket Staging",
    description: "Multi-stage rocket design and optimization.",
    course: "RS101",
    lessons: [
      {
        _id: "L401",
        name: "Stage Separation Mechanisms",
        description: "Mechanisms and timing for stage separation.",
        module: "M104"
      },
      {
        _id: "L402",
        name: "Payload Optimization",
        description: "Maximizing payload capacity through staging.",
        module: "M104"
      },
      {
        _id: "L403",
        name: "Tsiolkovsky Rocket Equation",
        description: "The rocket equation and its applications.",
        module: "M104"
      }
    ]
  },
  {
    _id: "M105",
    name: "Guidance and Control Systems",
    description: "Rocket trajectory control and navigation systems.",
    course: "RS101",
    lessons: [
      {
        _id: "L501",
        name: "Thrust Vector Control",
        description: "Controlling rocket direction through thrust vectoring.",
        module: "M105"
      },
      {
        _id: "L502",
        name: "Inertial Guidance Systems",
        description: "Using accelerometers and gyroscopes for navigation.",
        module: "M105"
      },
      {
        _id: "L503",
        name: "GPS and Radio Navigation",
        description: "Modern satellite-based guidance systems.",
        module: "M105"
      }
    ]
  },
  {
    _id: "M106",
    name: "Aerodynamics and Heat Transfer",
    description: "Managing aerodynamic forces and thermal loads during flight.",
    course: "RS101",
    lessons: [
      {
        _id: "L601",
        name: "Drag Forces and Reduction",
        description: "Minimizing aerodynamic drag during ascent.",
        module: "M106"
      },
      {
        _id: "L602",
        name: "Heat Shielding Systems",
        description: "Thermal protection systems for atmospheric reentry.",
        module: "M106"
      },
      {
        _id: "L603",
        name: "Ablative Materials",
        description: "Materials that protect through controlled erosion.",
        module: "M106"
      }
    ]
  },
  {
    _id: "M107",
    name: "Testing and Reliability",
    description: "Rocket testing procedures and quality assurance.",
    course: "RS101",
    lessons: [
      {
        _id: "L701",
        name: "Static Fire Testing",
        description: "Ground testing of rocket engines and systems.",
        module: "M107"
      },
      {
        _id: "L702",
        name: "Failure Mode Analysis",
        description: "Investigating and preventing rocket failures.",
        module: "M107"
      },
      {
        _id: "L703",
        name: "Quality Control Standards",
        description: "Manufacturing standards and inspection procedures.",
        module: "M107"
      }
    ]
  },
  // Modules for RS102 course
  {
    _id: "M201",
    name: "Fundamentals of Aerodynamics",
    description: "Basic principles of aerodynamics and fluid dynamics.",
    course: "RS102",
    lessons: [
      {
        _id: "L801",
        name: "Fluid Properties",
        description: "Understanding air as a fluid medium.",
        module: "M201"
      },
      {
        _id: "L802",
        name: "Bernoulli's Principle",
        description: "Pressure and velocity relationships in fluid flow.",
        module: "M201"
      },
      {
        _id: "L803",
        name: "Continuity Equation",
        description: "Conservation of mass in fluid flow.",
        module: "M201"
      }
    ]
  },
  {
    _id: "M202",
    name: "Airfoil Theory",
    description: "Design and analysis of airfoils and wings.",
    course: "RS102",
    lessons: [
      {
        _id: "L901",
        name: "Airfoil Geometry",
        description: "Understanding airfoil shapes and nomenclature.",
        module: "M202"
      },
      {
        _id: "L902",
        name: "Lift Generation",
        description: "How airfoils generate lift forces.",
        module: "M202"
      },
      {
        _id: "L903",
        name: "Drag Components",
        description: "Analyzing different types of drag on airfoils.",
        module: "M202"
      }
    ]
  },
  {
    _id: "M203",
    name: "Compressible Flow",
    description: "High-speed aerodynamics and shock waves.",
    course: "RS102",
    lessons: [
      {
        _id: "L1001",
        name: "Mach Number Effects",
        description: "Understanding subsonic, transonic, and supersonic flow.",
        module: "M203"
      },
      {
        _id: "L1002",
        name: "Shock Wave Formation",
        description: "Formation and properties of shock waves.",
        module: "M203"
      },
      {
        _id: "L1003",
        name: "Expansion Waves",
        description: "Prandtl-Meyer expansion around corners.",
        module: "M203"
      }
    ]
  }
];

async function seedModules() {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("Connected to MongoDB");
    
    // Clear existing modules
    await ModuleModel.deleteMany({});
    console.log("Cleared existing modules");
    
    // Insert all modules
    const result = await ModuleModel.insertMany(modulesData);
    console.log(`\n✓ Successfully added ${result.length} modules`);
    
    // Display summary by course
    const rs101Count = await ModuleModel.countDocuments({ course: "RS101" });
    const rs102Count = await ModuleModel.countDocuments({ course: "RS102" });
    
    console.log(`\nModules Summary:`);
    console.log(`- RS101 (Rocket Propulsion): ${rs101Count} modules`);
    console.log(`- RS102 (Aerodynamics): ${rs102Count} modules`);
    
    // Display all modules
    const allModules = await ModuleModel.find().sort({ course: 1, _id: 1 });
    console.log(`\nAll Modules:`);
    allModules.forEach(m => {
      console.log(`  ${m.course} - ${m.name} (${m.lessons?.length || 0} lessons)`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding modules:", error);
    process.exit(1);
  }
}

seedModules();
