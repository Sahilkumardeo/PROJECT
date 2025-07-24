// Sample data for medical specialties
const specialties = [
    
        {
            title: "Medical Anatomy",
            description: "Laudantium atque numquam dolorem facere.",
            image: "image1.jpg",
        },
        {
            title: "Medical Geography",
            description: "Est molestias ex eaque.",
            image: "image2.jpg",
        },
        {
            title: "Sleep Therapy",
            description: "Laborum eius with details.",
            image: "image3.jpg",
        },
        {
            title: "Medical Geometry",
            description: "Reprehenderit quibusdam consequatur.",
            image: "image4.jpg",
        },
        {
            title: "Dental Specialty",
            description: "Voluptatem dolorum atque.",
            image: "image5.jpg",
        },
        {
            title: "Medical Spatology",
            description: "Accusantium est aliquid.",
            image: "image6.jpg",
        },
        {
            title: "Cardiovascular Disease",
            description: "Cardiovascular diseases refer to conditions affecting the heart and blood vessels.",
            image: "cardio_image.jpg",
        },
        {
            title: "Diabetes",
            description: "A chronic disease that affects how your body turns food into energy.",
            image: "diabetes_image.jpg",
        },
        {
            title: "Cancer",
            description: "Cancer is a group of diseases involving abnormal cell growth.",
            image: "cancer_image.jpg",
        },
        {
            title: "Asthma",
            description: "A condition in which your airways narrow and swell, leading to breathing difficulty.",
            image: "asthma_image.jpg",
        },
        {
            title: "Alzheimer's Disease",
            description: "A progressive disease that destroys memory and other critical mental functions.",
            image: "alzheimers_image.jpg",
        },
        {
            title: "Parkinson's Disease",
            description: "A neurodegenerative disorder that affects movement and causes tremors.",
            image: "parkinsons_image.jpg",
        },
        {
            title: "Stroke",
            description: "A sudden interruption of the blood supply to part of the brain, causing brain damage.",
            image: "stroke_image.jpg",
        },
        {
            title: "Chronic Obstructive Pulmonary Disease (COPD)",
            description: "A group of lung diseases that block airflow and make breathing difficult.",
            image: "copd_image.jpg",
        },
        {
            title: "HIV/AIDS",
            description: "A virus that attacks the immune system, leading to acquired immunodeficiency syndrome.",
            image: "hiv_aids_image.jpg",
        },
        {
            title: "Multiple Sclerosis",
            description: "A disease in which the immune system attacks the protective covering of nerve fibers.",
            image: "ms_image.jpg",
        },
        {
            title: "Rheumatoid Arthritis",
            description: "An autoimmune disorder that causes inflammation and pain in the joints.",
            image: "rheumatoid_arthritis_image.jpg",
        },
        {
            title: "Osteoporosis",
            description: "A condition where bones become weak and brittle due to mineral loss.",
            image: "osteoporosis_image.jpg",
        },
        {
            title: "Hepatitis",
            description: "An inflammation of the liver caused by viral infections or other factors.",
            image: "hepatitis_image.jpg",
        },
        {
            title: "Kidney Disease",
            description: "A condition where the kidneys lose function over time, affecting waste removal.",
            image: "kidney_disease_image.jpg",
        },
        {
            title: "Obesity",
            description: "A condition characterized by excessive body fat, increasing the risk of other diseases.",
            image: "obesity_image.jpg",
        },
        {
            title: "Tuberculosis",
            description: "A bacterial infection that primarily affects the lungs but can affect other parts of the body.",
            image: "tuberculosis_image.jpg",
        },
        {
            title: "Influenza",
            description: "A contagious respiratory illness caused by influenza viruses.",
            image: "influenza_image.jpg",
        },
        {
            title: "Hypertension",
            description: "Also known as high blood pressure, it increases the risk of heart disease and stroke.",
            image: "hypertension_image.jpg",
        },
        {
            title: "Gastritis",
            description: "An inflammation of the stomach lining that can cause discomfort and digestive issues.",
            image: "gastritis_image.jpg",
        },
        {
            title: "Epilepsy",
            description: "A neurological disorder that causes recurrent seizures due to abnormal brain activity.",
            image: "epilepsy_image.jpg",
        },
        {
            title: "Psoriasis",
            description: "A skin condition that causes red, scaly patches, often on the elbows, knees, and scalp.",
            image: "psoriasis_image.jpg",
        },
        {
            title: "Cholera",
            description: "An infectious disease caused by consuming contaminated food or water, leading to severe diarrhea and dehydration.",
            image: "cholera_image.jpg",
        },
        {
            title: "Malaria",
            description: "A life-threatening disease caused by parasites transmitted to humans through the bite of infected mosquitoes.",
            image: "malaria_image.jpg",
        },
        {
            title: "Acid Reflux",
            description: "A digestive condition where stomach acid or bile irritates the food pipe lining, causing heartburn and discomfort.",
            image: "acid_reflux_image.jpg",
        },
        {
            title: "Lyme Disease",
            description: "A bacterial infection transmitted to humans through the bite of infected black-legged ticks.",
            image: "lyme_disease_image.jpg",
        },
        {
            title: "Autism Spectrum Disorder",
            description: "A developmental disorder affecting communication, behavior, and social interactions.",
            image: "autism_image.jpg",
        },
        {
            title: "Shingles",
            description: "A viral infection that causes a painful rash, typically occurring on one side of the body or face.",
            image: "shingles_image.jpg",
        },
        {
            title: "Chronic Fatigue Syndrome",
            description: "A complex disorder characterized by extreme fatigue that doesn't improve with rest.",
            image: "chronic_fatigue_image.jpg",
        },
        {
            title: "Celiac Disease",
            description: "An autoimmune disorder where the ingestion of gluten damages the small intestine lining.",
            image: "celiac_image.jpg",
        },
        {
            title: "Glaucoma",
            description: "A group of eye conditions that damage the optic nerve, often associated with high eye pressure.",
            image: "glaucoma_image.jpg",
        },
        {
            title: "Schizophrenia",
            description: "A serious mental disorder that affects thinking, feeling, and behavior, causing hallucinations and delusions.",
            image: "schizophrenia_image.jpg",
        },
        {
            title: "Huntington's Disease",
            description: "An inherited neurodegenerative disorder that causes progressive motor dysfunction, cognitive decline, and psychiatric symptoms.",
            image: "huntingson_disease_image.jpg",
        },
        {
            title: "Endometriosis",
            description: "A painful condition where tissue similar to the lining of the uterus grows outside the uterus.",
            image: "endometriosis_image.jpg",
        },
        {
            title: "Hyperthyroidism",
            description: "A condition where the thyroid gland produces too much thyroid hormone, leading to increased metabolism and other symptoms.",
            image: "hyperthyroidism_image.jpg",
        },
        {
            title: "Cystic Fibrosis",
            description: "An inherited disorder that causes severe damage to the lungs, digestive system, and other organs.",
            image: "cystic_fibrosis_image.jpg",
        },
        {
            title: "Sepsis",
            description: "A life-threatening condition caused by the body's response to infection, leading to widespread inflammation and organ failure.",
            image: "sepsis_image.jpg",
        },
        {
            title: "Brucellosis",
            description: "A bacterial infection transmitted from animals to humans, causing fever, joint pain, and fatigue.",
            image: "brucellosis_image.jpg",
        },
        {
            title: "Viral Hepatitis",
            description: "An inflammation of the liver caused by viral infections, leading to jaundice and fatigue.",
            image: "viral_hepatitis_image.jpg",
        },
        {
            title: "Chronic Sinusitis",
            description: "Chronic inflammation of the sinuses causing symptoms like nasal congestion, facial pain, and a runny nose.",
            image: "sinusitis_image.jpg",
        },
        {
            title: "Bronchitis",
            description: "An inflammation of the bronchial tubes, often caused by a viral infection, leading to coughing and difficulty breathing.",
            image: "bronchitis_image.jpg",
        }
    ];
    

function showMore(infoId) {
    const infoDiv = document.getElementById(infoId);
    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
    } else {
        infoDiv.style.display = "none";
    }
}


function createCards(specialties) {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = ''; 

    specialties.forEach(specialty => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${specialty.title}</h3>
            <p>${specialty.description}</p>
            <button>Discover More</button>
        `;
        cardContainer.appendChild(card);
    });
}


function searchSpecialty() {
    const query = document.querySelector('.search-bar').value.toLowerCase();
    const filteredSpecialties = specialties.filter(specialty =>
        specialty.title.toLowerCase().includes(query)
    );
    createCards(filteredSpecialties);
}


document.querySelector('.search-bar').addEventListener('input', searchSpecialty);


createCards(specialties);