document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const hospital = document.getElementById('hospital').value;
    const doctor = document.getElementById('doctor').value; // Get selected doctor
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Add the doctor info to the confirmation message
    const modalMessage = `Thank you, ${name}! Your appointment with Dr. ${doctor} at ${hospital} on ${date} at ${time} has been booked. We will contact you at ${contact}.`;

    const modal = document.getElementById('confirmation-modal');
    const modalMessageElement = document.getElementById('modal-message');
    modalMessageElement.textContent = modalMessage;
    modal.classList.remove('hidden');

    // Reset the form after submission
    document.getElementById('appointment-form').reset();
    // Reset the doctor select dropdown so it doesn't carry over any value
    document.getElementById('doctor').innerHTML = "<option value='' disabled selected>Select a Doctor</option>";
});

// Close the modal when the close button is clicked
document.querySelector('.close-button').addEventListener('click', function() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.add('hidden');
});

// Close the modal if the user clicks outside the modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('confirmation-modal');
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});

// Sample doctor data based on categories
const doctorsData = {
    "general-practitioner": ["John Doe", "Jane Smith", "Emily Clark"],
    "pediatrician": ["Mike Brown", "Sarah White", "Anna Green"],
    "dermatologist": ["Linda Black", "Olivia Grey", "Emma Blue"],
    "orthopedic": ["Robert King", "David Lee", "Peter Scott"],
    "cardiologist": ["Helen Young", "James Walker", "Sophia Adams"],
    "gynecologist": ["Mary Taylor", "Rachel Johnson", "Laura Evans"],
    "neurologist": ["William Harris", "Daniel Carter", "Benjamin Wood","dr.Dev"],
    "psychiatrist": ["Michael Moore", "Jessica Martinez", "Thomas Garcia","kamila das"],
     
        "dentist": ["Dr. Adam Phillips", "Dr. Nora Wilson", "Dr. Laura Dawson"],
        "endocrinologist": ["Dr. Kevin Scott", "Dr. Jessica Hunt", "Dr. Lily Matthews"],
        "gastroenterologist": ["Dr. Frank Cooper", "Dr. Erica Jordan", "Dr. Sophia Harris"],
        "pulmonologist": ["Dr. Claire Davis", "Dr. Emma Foster", "Dr. Michael Green"],
        "urologist": ["Dr. Daniel Lee", "Dr. Nancy Patel", "Dr. James Turner"],
        "rheumatologist": ["Dr. Rebecca King", "Dr. William Clark", "Dr. Charles Wright"],
        "oncologist": ["Dr. Hannah Baker", "Dr. Samuel Moore", "Dr. Jessica Anderson"],
        "infectious-disease-specialist": ["Dr. Olivia Harris", "Dr. William Black", "Dr. Grace Peterson"],
        "nephrologist": ["Dr. Maria Edwards", "Dr. Joshua Lee", "Dr. Ethan Brown"],
        "hematologist": ["Dr. Rachel White", "Dr. Michael Thompson", "Dr. Lisa Adams"],
        "allergist": ["Dr. Victoria Clark", "Dr. Benjamin Lee", "Dr. Sarah Walker"],
        "radiologist": ["Dr. Olivia Turner", "Dr. Daniel Scott", "Dr. Grace Williams"],
        "plastic-surgeon": ["Dr. Sarah Mitchell", "Dr. David Taylor", "Dr. Lauren Evans"],
        "surgeon": ["Dr. John Cooper", "Dr. Helen Allen", "Dr. Brian Scott"],
        "physiotherapist": ["Dr. Mia Peterson", "Dr. Ethan Davis", "Dr. Lucas Grant"],
        "chiropractor": ["Dr. Alan Smith", "Dr. Emily Harris", "Dr. Kevin Wright"],
        "optometrist": ["Dr. Isabella Walker", "Dr. Lucas Foster", "Dr. Emma Davis"]
    
    
};

// Function to update the doctor dropdown based on the selected category
function updateDoctors() {
    const selectedCategory = document.getElementById("doctor-category").value;
    const doctorSelect = document.getElementById("doctor");

    // Clear previous doctor options
    doctorSelect.innerHTML = "<option value='' disabled selected>Select a Doctor</option>";

    if (selectedCategory && doctorsData[selectedCategory]) {
        const doctors = doctorsData[selectedCategory];

        // Add new doctor options to the select element
        doctors.forEach(doctor => {
            const option = document.createElement("option");
            option.value = doctor;
            option.textContent = doctor;
            doctorSelect.appendChild(option);
        });
    }
}

// Listen for changes in the doctor category dropdown
document.getElementById("doctor-category").addEventListener('change', updateDoctors);
