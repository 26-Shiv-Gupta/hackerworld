const Course = require('../models/course'); // Use PascalCase as this is a model

// GET all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// POST create a new course
const setCourse = async (req, res) => {
  try {
    // You could validate here, for now we directly use req.body
    const newCourse = await Course.create({
      title: req.body.title,
      description: req.body.description,
      level: req.body.level,
      duration: req.body.duration,
      image: req.body.image,
      price: req.body.price,
      originalPrice: req.body.originalPrice,
      enrollmentLink: req.body.enrollmentLink,
      features: req.body.features,       // should be array of strings
      mentor: req.body.mentor,           // should be object: { name, title, bio, image }
      modules: req.body.modules,         // array of modules [{name, topics: []}]
      reviews: req.body.reviews,         // array of {name, rating, comment}
      faqs: req.body.faqs                // array of {question, answer}
    });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: "Could not create course", error });
  }
};

// PUT update course by ID
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(400).json({ message: "Could not update course", error });
  }
};

// DELETE course by ID
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    await course.remove();
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Could not delete course", error });
  }
};

module.exports = {
  getCourses,
  setCourse,
  updateCourse,
  deleteCourse,
};
