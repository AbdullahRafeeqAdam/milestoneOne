var _a, _b, _c;
(_a = document.getElementById('toggle-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var educationSection = document.getElementById('education-section');
    if (educationSection) {
        educationSection.classList.toggle('hidden');
    }
});
(_b = document.getElementById('toggle-work')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var workSection = document.getElementById('work-section');
    if (workSection) {
        workSection.classList.toggle('hidden');
    }
});
(_c = document.getElementById('toggle-skills')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        skillsSection.classList.toggle('hidden');
    }
});
