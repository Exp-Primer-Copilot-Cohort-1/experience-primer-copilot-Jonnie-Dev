function skillsMember() {
  var skills = document.getElementById("skill").value;
  var skillsError = document.getElementById("skillsError");
  if (skills == "") {
    skillsError.innerHTML = "Please enter your skills";
    return false;
  }
  return true;
}
