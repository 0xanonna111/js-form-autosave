const fields = ["name", "email", "message"];
const status = document.getElementById("status");

// Load saved data
fields.forEach(id => {
  const saved = localStorage.getItem(id);
  if (saved) {
    document.getElementById(id).value = saved;
  }
});

// Auto save
fields.forEach(id => {
  document.getElementById(id).addEventListener("input", e => {
    localStorage.setItem(id, e.target.value);
    status.innerText = "Form auto-saved";
  });
});

function clearForm() {
  fields.forEach(id => {
    localStorage.removeItem(id);
    document.getElementById(id).value = "";
  });
  status.innerText = "Form cleared";
}
