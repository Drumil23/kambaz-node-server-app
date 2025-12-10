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

const ModuleModel = mongoose.model("ModuleModel", moduleSchema);

const newModules = [
  {
    _id: "M102",
    name: "Fuel and Combustion",
    description: "Understanding rocket fuel types and combustion processes.",
    course: "RS101",
    lessons: [
      {
        _id: "L201",
        name: "Liquid Fuel Systems",
        description: "Liquid propellant rocket engines.",
        module: "M102"
      },
      {
        _id: "L202",
        name: "Solid Fuel Systems",
        description: "Solid propellant rocket motors.",
        module: "M102"
      },
      {
        _id: "L203",
        name: "Hybrid Engines",
        description: "Combining liquid and solid propellants.",
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
        description: "Analyzing supersonic flow through nozzles.",
        module: "M103"
      },
      {
        _id: "L303",
        name: "Expansion Ratio",
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
        name: "Stage Separation",
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
        name: "Tsiolkovsky Equation",
        description: "The rocket equation and its applications.",
        module: "M104"
      }
    ]
  },
  {
    _id: "M105",
    name: "Guidance and Control",
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
        name: "Inertial Guidance",
        description: "Using accelerometers and gyroscopes for navigation.",
        module: "M105"
      },
      {
        _id: "L503",
        name: "GPS Navigation",
        description: "Modern satellite-based guidance systems.",
        module: "M105"
      }
    ]
  },
  {
    _id: "M106",
    name: "Aerodynamics and Heat Transfer",
    description: "Managing aerodynamic forces and thermal loads.",
    course: "RS101",
    lessons: [
      {
        _id: "L601",
        name: "Drag Forces",
        description: "Minimizing aerodynamic drag during ascent.",
        module: "M106"
      },
      {
        _id: "L602",
        name: "Heat Shielding",
        description: "Thermal protection systems for reentry.",
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
        name: "Static Fire Tests",
        description: "Ground testing of rocket engines.",
        module: "M107"
      },
      {
        _id: "L702",
        name: "Failure Analysis",
        description: "Investigating and preventing rocket failures.",
        module: "M107"
      },
      {
        _id: "L703",
        name: "Quality Control",
        description: "Manufacturing standards and inspection.",
        module: "M107"
      }
    ]
  }
];

async function addModules() {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("Connected to MongoDB");
    
    // Insert the new modules
    const result = await ModuleModel.insertMany(newModules);
    console.log(`Successfully added ${result.length} modules`);
    
    // Display all modules for RS101
    const allModules = await ModuleModel.find({ course: "RS101" });
    console.log(`\nTotal modules for RS101: ${allModules.length}`);
    allModules.forEach(m => {
      console.log(`- ${m.name} (${m.lessons?.length || 0} lessons)`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error("Error adding modules:", error);
    process.exit(1);
  }
}

addModules();
