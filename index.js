document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const closeModal = document.querySelector('.close');

  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const studentName = document.getElementById('studentName').value;
    const personalMessage = document.getElementById('personalMessage').value;
    const courseName = document.getElementById('courseName').value;

    if (studentName.trim() === '' || personalMessage.trim() === '' || courseName.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // Update certificate content
    document.getElementById('studentNameDisplay').innerText = studentName;
    document.getElementById('courseNameDisplay').innerText = courseName;
    document.getElementById('personalMessageDisplay').innerText = personalMessage;

    // Show the modal
    modal.style.display = 'block';

    // Clear the form
    cardForm.reset();
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});

  