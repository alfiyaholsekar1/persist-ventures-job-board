const jobs = {
flutter: {
title: "Flutter Developer",
description: Persist Ventures is on the lookout for a passionate and skilled Flutter Developer who...
},
frontend: {
title: "Front-End Developer",
description: Persist Ventures is seeking a creative and detail-oriented Front-End Developer who...
},
uiux: {
title: "UI/UX Designer",
description: Persist Ventures is looking for a thoughtful and creative UI/UX Designer who...
}
};

function showJob(id) {
const job = jobs[id];
document.getElementById("job-title").textContent = job.title;
document.getElementById("job-description").textContent = job.description;
document.getElementById("apply-form").setAttribute("data-role", job.title);

document.getElementById("job-listings").style.display = "none";
document.getElementById("job-details").style.display = "block";
}

function goBack() {
document.getElementById("job-details").style.display = "none";
document.getElementById("job-listings").style.display = "block";
}

document.getElementById("apply-form").addEventListener("submit", async function (e) {
e.preventDefault();
const form = e.target;
const role = form.getAttribute("data-role");
const name = form.name.value;
const email = form.email.value;
const file = form.cv.files[0];
const status = document.getElementById("status-message");

if (!file || file.type !== "application/pdf") {
status.textContent = "Please upload a PDF file.";
return;
}

const reader = new FileReader();
reader.onloadend = async function () {
const base64 = reader.result.split(",")[1];
const formData = new URLSearchParams();
formData.append("name", name);
formData.append("email", email);
formData.append("role", role);
formData.append("cvBase64", base64);
formData.append("fileName", file.name);

csharp
Copy
Edit
try {
  const res = await fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    body: formData,
  });
  const text = await res.text();
  status.textContent = text;
  form.reset();
} catch (err) {
  status.textContent = "Submission failed.";
}
};
reader.readAsDataURL(file);
});