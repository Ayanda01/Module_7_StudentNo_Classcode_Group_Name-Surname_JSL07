
function generateCertificate() {
  // Get values from the input fields
  const studentName = document.getElementById('studentName').value || 'CodeSpace Cat';
  const personalMessage = document.getElementById('personalMessage').value || 'You are awesome!';
  const courseName = document.getElementById('courseName').value || 'JSL Course';
  
  // Set values in the certificate
  document.getElementById('studentNameDisplay').textContent = studentName;
  document.getElementById('messageDisplay').textContent = personalMessage;
  document.getElementById('courseNameDisplay').textContent = courseName;
  
  // Display the certificate modal
  document.getElementById('certificateModal').style.display = 'flex';
}

function closeModal() {
  // Close the modal by setting display to 'none'
  document.getElementById('certificateModal').style.display = 'none';
}

