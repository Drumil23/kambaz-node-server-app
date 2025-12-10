import mongoose from "mongoose";
import "dotenv/config";
import UserModel from "./Users/model.js";
import CourseModel from "./Courses/model.js";
import EnrollmentModel from "./Enrollments/model.js";
import users from "./Database/users.js";
import courses from "./Database/courses.js";
import enrollments from "./Database/enrollments.js";

const CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz";

async function seed() {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("Connected to MongoDB");

    // Clear existing data
    await UserModel.deleteMany({});
    await CourseModel.deleteMany({});
    await EnrollmentModel.deleteMany({});
    console.log("Cleared existing data");

    // Seed users
    await UserModel.insertMany(users);
    console.log(`Seeded ${users.length} users`);

    // Seed courses (with modules embedded)
    await CourseModel.insertMany(courses);
    console.log(`Seeded ${courses.length} courses`);

    // Seed enrollments
    await EnrollmentModel.insertMany(enrollments);
    console.log(`Seeded ${enrollments.length} enrollments`);

    console.log("Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
