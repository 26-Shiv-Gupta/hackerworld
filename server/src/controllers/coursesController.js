const getCourses = async (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

const setCourse = async (req, res) => {
        // console.log(req.body)
        if (req.body == undefined || !req.body.text) {
             return res.status(400).json('Please enter some text')
        }
        console.log(req.body.text)

        console.log('Text field is present:', req.body.text);
        res.status(200).json({ message: 'Set goal', data: req.body.text });
};

const updateCourse = async (req, res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`})
}

const deleteCourse = async (req, res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`})
}

module.exports = {
    getCourses,
    setCourse,
    updateCourse,
    deleteCourse
}