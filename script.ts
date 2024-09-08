document.getElementById('toggle-education')?.addEventListener('click', () => {
    const educationSection = document.getElementById('education-section');
    if (educationSection) {
        educationSection.classList.toggle('hidden');
    }
});

document.getElementById('toggle-work')?.addEventListener('click', () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
        workSection.classList.toggle('hidden');
    }
});

document.getElementById('toggle-skills')?.addEventListener('click', () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        skillsSection.classList.toggle('hidden');
    }
});
