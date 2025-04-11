// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form submission handling
document.getElementById('resume-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('job-title').value;
    const experience = document.getElementById('experience').value;

    // Simulate AI-generated resume and cover letter
    const resumeOutput = `
        <h3>Your Resume Preview</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><em>AI-Generated Summary:</em> Highly motivated ${jobTitle} with extensive experience in ${experience.split(' ')[0].toLowerCase()}. Proven track record of delivering results.</p>
    `;

    const coverLetterOutput = `
        <h3>Your Cover Letter Preview</h3>
        <p>Dear Hiring Manager,</p>
        <p>I am excited to apply for the ${jobTitle} position. With my background in ${experience.split(' ')[0].toLowerCase()}, I am confident in my ability to contribute to your team.</p>
        <p>Sincerely,<br>${name}</p>
    `;

    // Display output
    document.getElementById('output').innerHTML = resumeOutput + coverLetterOutput;

    // Scroll to output
    document.getElementById('output').scrollIntoView({ behavior: 'smooth' });
});