// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import faker from 'faker'
import _ from 'lodash'

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

const numberOfEbacSubjects = 4
const numberOfNonEbacSubjects = 3

export default (req, res) => {
  let results = [...Array(10).keys()].map( student => {
    let courseProgress = [];

    basicSubjects.forEach( subject => {
      courseProgress.push({
        name: subject,
        currentResult: faker.datatype.float({
          min: 2, max: 7, precision: 0.2
        }),
        predictedResult: faker.datatype.float({
          min: 5, max: 7, precision: 0.2
        }),
        isBasicSlot: true,
        isEbacSlot: false,
        isNonEbacSlot: false,
      })
    })

    _.shuffle(ebacSubjects).slice(0, numberOfEbacSubjects).forEach(subject => {
      courseProgress.push({
        name: subject,
        currentResult: faker.datatype.float({
          min: 2, max: 7, precision: 0.2
        }),
        predictedResult: faker.datatype.float({
          min: 5, max: 7, precision: 0.2
        }),
        isBasicSlot: false,
        isEbacSlot: true,
        isNonEbacSlot: false,
      })
    })

    _.shuffle(nonEbacSubjects).slice(0, numberOfNonEbacSubjects).forEach(subject => {
      courseProgress.push({
        name: subject,
        currentResult: faker.datatype.float({
          min: 2, max: 7, precision: 0.2
        }),
        predictedResult: faker.datatype.float({
          min: 5, max: 7, precision: 0.2
        }),
        isBasicSlot: false,
        isEbacSlot: false,
        isNonEbacSlot: true,
      })
    })

    return {
      id: faker.datatype.number(),
      name: faker.name.findName(),
      attributes: {
        gender: _.shuffle(gender)[0],
        sen: faker.datatype.boolean(),
        ppi: faker.datatype.boolean(),
        band: `11${faker.name.findName()[0].toUpperCase()}`,
      },
      courseProgress: courseProgress
    }
  })


  res.status(200).json(results)
}
