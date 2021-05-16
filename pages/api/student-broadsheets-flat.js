// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import faker from 'faker'
import _ from 'lodash'

const defaultNumberOfResults = 100
const numberOfEbacSubjects = 4
const numberOfNonEbacSubjects = 3

const gender = ["male", "female", "other"]
const basicSubjects = ["English", "English Lit", "Maths"]
const ebacSubjects = [
  "Science", "Biology", "Chemistry", "Physics", "Computer Sci", "History",
  "Geography", "French", "Spanish"
]
const nonEbacSubjects = [
  "Art", "Drama", "Music", "PE", "Food", "Media", "Economics", 
  "Socialogy", "RS", "BTEC", "Sports"
]

export default (req, res) => {
  let numberOfResults = req.query.count ? parseInt(req.query.count) : defaultNumberOfResults
  let results = [];

  let generateSubjectData = (subjectPrefix, subjectName) => {
    let subject = {}
    //subject[`${subjectPrefix}_subjectId`] = faker.datatype.number();
    subject[`${subjectPrefix}_subjectName`] = subjectName;
    subject[`${subjectPrefix}_currentResult`] = faker.datatype.float({
      min: 2, max: 7, precision: 0.2
    });
    subject[`${subjectPrefix}_predictedResult`] = faker.datatype.float({
      min: 5, max: 7, precision: 0.2
    });
  
    return subject
  }
  
  [...Array(numberOfResults).keys()].forEach( studentId => {
    let studentData = {
      studentId: studentId,
      studentName: faker.name.findName(),
      studentGender: _.shuffle(gender)[0],
      studentBand: `11${faker.name.findName()[0].toUpperCase()}`,
      isSEN: faker.datatype.boolean(),
      isPPI: faker.datatype.boolean(),
    };

    basicSubjects.forEach( (subjectName, index) => {
      let subjectPrefix = `basic_${index+1}`;
      let subject = generateSubjectData(subjectPrefix, subjectName)

      studentData = {
        ...studentData,
        ...subject,
      }
    })

    _.shuffle(ebacSubjects).slice(0, numberOfEbacSubjects).forEach((subjectName, index) => {
      let subjectPrefix = `ebac_${index+1}`;
      let subject = generateSubjectData(subjectPrefix, subjectName)

      studentData = {
        ...studentData,
        ...subject,
      }
    })

    _.shuffle(nonEbacSubjects).slice(0, numberOfNonEbacSubjects).forEach((subjectName, index) => {
      let subjectPrefix = `noneEbac_${index+1}`;
      let subject = generateSubjectData(subjectPrefix, subjectName)

      studentData = {
        ...studentData,
        ...subject,
      }
    })

    results.push(studentData)
  })

  res.status(200).json({
    success: true,
    count: results.length,
    data: results,
  })
}
