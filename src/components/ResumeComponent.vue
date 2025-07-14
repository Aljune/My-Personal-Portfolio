<template>
  <div class="resume text-start">
    <div data-aos="fade-up" data-aos-duration="1000">
      <div class="section-title">
        <h2>RESUME</h2>
        <p>CHECK MY RESUME</p>
      </div>
      <div class="row">
        <div class="col-lg-6 px-4">
          <h3 class="resume-title">Education</h3>
          <div v-for="education in educations" :key="education.id">
            <div class="resume-item">
              <h4>{{ education.title }}</h4>
              <h5>{{ education.year }}</h5>
              <p><em>{{ education.school }}</em></p>
              <p>{{ education.description }}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 px-4">
          <h3 class="resume-title">Professional Experience</h3>
          <div v-for="prof in professionalExperiences" :key="prof.id">
            <div class="resume-item">
              <h4>{{ prof.title }}</h4>
              <h5>{{ prof.year }}</h5>
              <p><em>{{ prof.company }}</em></p>
              <ul>
                <li v-for="(line, idx) in prof.description.split('\\n')" :key="idx">{{ line }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeComponent',
  props: {
    firstName: String,
    lastName: String,
    title: String,
    msg: String,
  },
  data() {
    return {
      professionalExperiences: [
        {
          id: 1,
          title: 'REACTJS DEVELOPER – JUNIOR FULLSTACK DEVELOPER',
          year: 'APRIL 2021 – APRIL 2025',
          company: 'AJIO IT SOLUTIONS',
          description: `
Skilled in writing clean, maintainable, and efficient code while following best practices, with a focus on thorough testing for bug identification and resolution.
Capable of creating reusable components using hooks and redux to enhance code efficiency and consistency.
Collaborative team member, adept at merging changes into the "develop" branch and sending pull requests for code review and integration.
          `.trim()
        },
        {
          id: 2,
          title: 'JUNIOR SOFTWARE ENGINEER',
          year: 'JUNE 2020 – MARCH 2021',
          company: 'HALCYON DIGITAL MEDIA',
          description: `
Worked as a Laravel and ReactJS developer, also using OctoberCMS.
Handled both design and development tasks and managed project customizations as needed.
          `.trim()
        },
        {
          id: 3,
          title: 'WEB DESIGNER AND DEVELOPER',
          year: 'JUNE 2017 – MAY 2020',
          company: 'BORDERLESS-CEBU INC.',
          description: `
Designed and developed websites using WordPress, native PHP, and Laravel.
Created visual designs using Photoshop, Illustrator, and Figma.
Handled deployment from staging to production environments.
          `.trim()
        },
        {
          id: 4,
          title: 'I.T TECHNICIAN (OJT)',
          year: '2016 – 2017',
          company: 'ADSCO ENTREPRICES',
          description: `
Performed computer repair and troubleshooting, including OS and driver installation.
Contributed to the development of the company’s Inventory System from scratch.
          `.trim()
        }
      ],

      educations: [
        {
          id: 1,
          title: 'BS in INFORMATION TECHNOLOGY',
          year: '2013 – 2017',
          school: 'CORDOVA PUBLIC COLLEGE',
          description: `
Participated in the development of a Point of Sale (POS) system as both front-end and back-end developer.
Designed interfaces using Photoshop and integrated barcode scanning and receipt printing features.
          `.trim()
        },
        {
          id: 2,
          title: 'SECONDARY EDUCATION',
          year: '2007 – 2011',
          school: 'CORDOVA CATHOLIC COOPERATIVE SCHOOL',
          description: `
      Completed a comprehensive secondary curriculum with a strong foundation in mathematics, science, and computer subjects.
      Actively participated in school clubs and group projects focused on basic programming and digital design.
          `.trim()
        },
        {
          id: 3,
          title: 'PRIMARY EDUCATION',
          year: '2000 – 2007',
          school: 'CORDOVA CENTRAL SCHOOL',
          description: `
      Developed essential academic skills and discipline through a well-rounded primary education.
      Consistently achieved high academic performance and demonstrated early interest in technology-related activities.
          `.trim()
        }
      ]
    };
  }
};
</script>

<style>
.resume p,
.resume h5 {
  color: #fff;
}
.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
}
.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
}
.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #18d26e;
  border: 2px solid #18d26e;
}
.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #18d26e;
  margin-bottom: 10px;
}
.resume .resume-item h5 {
  font-size: 16px;
  background: rgba(255, 255, 255, 0.15);
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}
.resume .resume-item ul {
  padding-left: 20px;
}
.resume .resume-item ul li {
  padding-bottom: 10px;
  color: #fff;
}
</style>
