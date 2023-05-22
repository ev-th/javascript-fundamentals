const cohort = {
    name: 'May2022',
    id: 1234,
    studentNames: ['Evan', 'Ilhan', 'Peter']
}

const printCohort = (obj) => {
    console.log(`${obj.id} - ${obj.name} - ${obj.studentNames.length} students in this cohort`)
}

printCohort(cohort);