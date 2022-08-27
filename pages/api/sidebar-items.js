// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    user: {},
    items: [
      { label: "Dashboard", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
      { label: "Whole School", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", items: [
        { label: "Summary", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Rooms", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Reports", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Context", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Seating Plans", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
      ] },
      { label: "Leadership", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", items: [
        { label: "Overview", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Observations", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "My Reports", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "My Letters", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "My Evaluations", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Legacy SE", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
      ] },
      { label: "Teaching & Learning", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", items: [
        { label: "Self Evaluation", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "My Reports", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "My Seating Plans", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "My Student Strategies", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Observations of Me", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Behaviour", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "My Markbooks", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Legacy SE", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
      ] },
      { label: "Subjects", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", items: [
        { label: "Overview", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Art & Design Learning Area", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index",
          items: [
            { label: "Art (Ar)", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
            { label: "Food Tech (Ft)", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
          ]
        },
        { label: "Business & Economics Learning Area", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index",
          items: [
            { label: "Business Studies (Bs)", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
            { label: "Economics (Ec)", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
          ]
        },
        { label: "Creative Arts Learning Area", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "English Learning Area", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
        { label: "Humanities Learning Area", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
      ] },
      { label: "Year Groups", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
      { label: "Timetable", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
      { label: "Start Observation", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
      { label: "Log Incident", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
      { label: "Reward Student", href: "https://mca2.progressteaching-testing.com/index.php?r=main/dashboard/index", },
    ]
  })
}
