document.getElementById('symptom-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const symptoms = document.getElementById('symptoms').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    const diseaseName = document.getElementById('disease-name');
    const diseaseDescription = document.getElementById('disease-description');
    const diseasePrescription = document.getElementById('disease-prescription');
    const diseaseMedication = document.getElementById('disease-medication');
    const diseaseWorkouts = document.getElementById('disease-workouts');
    const diseaseDiets = document.getElementById('disease-diets');

    
    const diseases = {
        'flu': {
            name: 'Flu',
            description: 'Flu is a contagious respiratory illness caused by influenza viruses.',
            prescription: 'Rest and hydration.',
            medication: 'Antiviral medications if prescribed.',
            workouts: 'Light walking and stretching.',
            diets: 'Stay hydrated, consume warm soups.'
        },
        'migraine': {
            name: 'Migraine',
            description: 'A migraine is a headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.',
            prescription: 'Rest in a dark room.',
            medication: 'Pain relievers, triptans.',
            workouts: 'Gentle yoga and relaxation exercises.',
            diets: 'Avoid triggers like caffeine and chocolate.'
        },
        'strep throat': {
            name: 'Strep Throat',
            description: 'Strep throat is a bacterial infection that can make your throat feel sore and scratchy.',
            prescription: 'Antibiotics as prescribed.',
            medication: 'Pain relievers for throat pain.',
            workouts: 'Rest is recommended.',
            diets: 'Soft foods and warm liquids.'
        },
        'diabetes': {
            name: 'Diabetes',
            description: 'A chronic condition that affects how your body processes blood sugar (glucose).',
            prescription: 'Monitor blood sugar levels.',
            medication: 'Insulin or oral medications.',
            workouts: 'Regular aerobic exercise.',
            diets: 'Balanced diet with controlled carbohydrates.'
        },
        'hypertension': {
            name: 'Hypertension',
            description: 'High blood pressure that can lead to serious health issues.',
            prescription: 'Lifestyle changes and medication.',
            medication: 'Antihypertensive drugs.',
            workouts: 'Regular cardiovascular exercise.',
            diets: 'Low-sodium diet rich in fruits and vegetables.'
        },
        'asthma': {
            name: 'Asthma',
            description: 'A condition in which your airways narrow and swell and may produce extra mucus.',
            prescription: 'Inhalers and avoiding triggers.',
            medication: 'Bronchodilators and corticosteroids.',
            workouts: 'Breathing exercises and light activities.',
            diets: 'Avoid allergens and maintain a healthy diet.'
        },
        'allergies': {
            name: 'Allergies',
            description: 'An immune response to a foreign substance that is not typically harmful to your body.',
            prescription: 'Antihistamines and avoiding allergens.',
            medication: 'Allergy medications as needed.',
            workouts: 'Moderate exercise is fine.',
            diets: 'Avoid known allergens.'
        },
        'gastroenteritis': {
            name: 'Gastroenteritis',
            description: 'An inflammation of the stomach and intestines that causes vomiting and diarrhea.',
            prescription: 'Stay hydrated and rest.',
            medication: 'Antiemetics and rehydration solutions.',
            workouts: 'Rest is crucial during recovery.',
            diets: 'Bland foods like bananas and rice.'
        },
        'arthritis': {
            name: 'Arthritis',
            description: 'Inflammation of one or more joints, causing pain and stiffness.',
            prescription: 'Physical therapy and pain management.',
            medication: 'NSAIDs and corticosteroids.',
            workouts: 'Low-impact exercises like swimming.',
            diets: 'Anti-inflammatory foods like omega-3 fatty acids.'
        },
        'depression': {
            name: 'Depression',
            description: 'A mood disorder that causes a persistent feeling of sadness and loss of interest.',
            prescription: 'Therapy and medication.',
            medication: 'Antidepressants as prescribed.',
            workouts: 'Regular physical activity can help.',
            diets: 'Balanced diet rich in nutrients.'
        },
        'anxiety': {
            name: 'Anxiety',
            description: 'A mental health disorder characterized by feelings of worry, anxiety, or fear.',
            prescription: 'Cognitive behavioral therapy and relaxation techniques.',
            medication: 'Anti-anxiety medications as prescribed.',
            workouts: 'Yoga and meditation.',
            diets: 'Avoid caffeine and sugar.'
        },
        'insomnia': {
            name: 'Insomnia',
            description: 'A sleep disorder that is characterized by difficulty falling and/or staying asleep.',
            prescription: 'Sleep hygiene practices.',
            medication: 'Sleep aids if necessary.',
            workouts: 'Light evening stretches.',
            diets: 'Avoid heavy meals before bedtime.'
        },
        'eczema': {
            name: 'Eczema',
            description: 'A condition that makes your skin red and itchy.',
            prescription: 'Moisturizers and topical steroids.',
            medication: 'Antihistamines for itching.',
            workouts: 'Gentle exercises to avoid sweating.',
            diets: 'Avoid known irritants.'
        },
        'psoriasis': {
            name: 'Psoriasis',
            description: 'An autoimmune condition that causes rapid skin cell production leading to scaling.',
            prescription: 'Topical treatments and phototherapy.',
            medication: 'Systemic medications for severe cases.',
            workouts: 'Low-impact exercises.',
            diets: 'Anti-inflammatory diet.'
        },
        'chickenpox': {
            name: 'Chickenpox',
            description: 'A highly contagious viral infection causing an itchy rash and flu-like symptoms.',
            prescription: 'Calamine lotion and antihistamines.',
            medication: 'Acetaminophen for fever.',
            workouts: 'Rest is essential.',
            diets: 'Stay hydrated and eat soft foods.'
        },
        'hepatitis': {
            name: 'Hepatitis',
            description: 'An inflammation of the liver, often caused by a viral infection.',
            prescription: 'Rest and hydration.',
            medication: 'Antiviral medications if necessary.',
            workouts: 'Light activities as tolerated.',
            diets: 'Balanced diet, avoid alcohol.'
        },
        'tuberculosis': {
            name: 'Tuberculosis',
            description: 'A potentially serious infectious disease that mainly affects the lungs.',
            prescription: 'Long-term antibiotic treatment.',
            medication: 'Antitubercular drugs.',
            workouts: 'Gradual return to normal activities.',
            diets: 'Nutritious diet to support recovery.'
        },
        'pneumonia': {
            name: 'Pneumonia',
            description: 'An infection that inflames the air sacs in one or both lungs.',
            prescription: 'Antibiotics for bacterial pneumonia.',
            medication: 'Cough medicine and fever reducers.',
            workouts: 'Rest and gradual return to activity.',
            diets: 'Stay hydrated and eat nutritious foods.'
        },
        'gout': {
            name: 'Gout',
            description: 'A form of arthritis characterized by severe pain, redness, and tenderness in joints.',
            prescription: 'Rest and ice the affected joint.',
            medication: 'NSAIDs and corticosteroids.',
            workouts: 'Low-impact exercises.',
            diets: 'Avoid purine-rich foods.'
        },
        'kidney stones': {
            name: 'Kidney Stones',
            description: 'Hard deposits made of minerals and salts that form inside your kidneys.',
            prescription: 'Pain management and hydration.',
            medication: 'Pain relievers and medications to help pass stones.',
            workouts: 'Light activities as tolerated.',
            diets: 'Increase fluid intake and reduce salt.'
        },
        'thyroid disorders': {
            name: 'Thyroid Disorders',
            description: 'Conditions that affect the thyroid gland, leading to hormonal imbalances.',
            prescription: 'Hormone replacement therapy.',
            medication: 'Thyroid medications as prescribed.',
            workouts: 'Regular exercise to maintain weight.',
            diets: 'Balanced diet with iodine-rich foods.'
        },
        'cancer': {
            name: 'Cancer',
            description: 'A disease in which abnormal cells divide without control and can invade nearby tissues.',
            prescription: 'Treatment varies by type; may include chemotherapy, radiation, or surgery.',
            medication: 'Chemotherapy drugs and pain management.',
            workouts: 'Consult with a healthcare provider for appropriate activities.',
            diets: 'Nutrient-rich diet to support health.'
        },
        'heart disease': {
            name: 'Heart Disease',
            description: 'A range of conditions that affect your heart, including blood vessel diseases.',
            prescription: 'Lifestyle changes and medications.',
            medication: 'Statins and blood pressure medications.',
            workouts: 'Regular cardiovascular exercise.',
            diets: 'Heart-healthy diet low in saturated fats.'
        },
        'stroke': {
            name: 'Stroke',
            description: 'A medical emergency in which the blood supply to the brain is interrupted.',
            prescription: 'Immediate medical attention is crucial.',
            medication: 'Anticoagulants and rehabilitation therapies.',
            workouts: 'Rehabilitation exercises as prescribed.',
            diets: 'Balanced diet to support recovery.'
        },
        'COPD': {
            name: 'Chronic Obstructive Pulmonary Disease (COPD)',
            description: 'A group of lung diseases that block airflow and make it difficult to breathe.',
            prescription: 'Quit smoking and pulmonary rehabilitation.',
            medication: 'Bronchodilators and steroids.',
            workouts: 'Breathing exercises and light activities.',
            diets: 'Healthy diet to maintain weight.'
        },
        'dementia': {
            name: 'Dementia',
            description: 'A group of symptoms affecting memory, thinking, and social abilities severely enough to interfere with daily life.',
            prescription: 'Cognitive therapies and support.',
            medication: 'Cholinesterase inhibitors and memantine.',
            workouts: 'Mental exercises and social activities.',
            diets: 'Balanced diet rich in antioxidants.'
        },
        'bipolar disorder': {
            name: 'Bipolar Disorder',
            description: 'A mental health condition that causes extreme mood swings that include emotional highs and lows.',
            prescription: 'Mood stabilizers and therapy.',
            medication: 'Lithium and anticonvulsants.',
            workouts: 'Regular physical activity can help stabilize mood.',
            diets: 'Balanced diet to support mental health.'
        },
        'schizophrenia': {
            name: 'Schizophrenia',
            description: 'A serious mental disorder in which people interpret reality abnormally.',
            prescription: 'Antipsychotic medications and therapy.',
            medication: 'Antipsychotics as prescribed.',
            workouts: 'Regular exercise to improve mood.',
            diets: 'Healthy diet to support overall health.'
        },
        'fibromyalgia': {
            name: 'Fibromyalgia',
            description: 'A disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory, and mood issues.',
            prescription: 'Pain management and lifestyle changes.',
            medication: 'Pain relievers and antidepressants.',
            workouts: 'Gentle exercises like swimming or walking.',
            diets: 'Balanced diet rich in omega-3 fatty acids.'
        },
        'lupus': {
            name: 'Lupus',
            description: 'An autoimmune disease in which the body’s immune system becomes hyperactive and attacks normal, healthy tissue.',
            prescription: 'Anti-inflammatory medications and immunosuppressants.',
            medication: 'Corticosteroids and antimalarials.',
            workouts: 'Low-impact exercises to avoid fatigue.',
            diets: 'Anti-inflammatory diet rich in fruits and vegetables.'
        },
        'multiple sclerosis': {
            name: 'Multiple Sclerosis',
            description: 'A disease in which the immune system eats away at the protective covering of nerves.',
            prescription: 'Disease-modifying therapies and symptom management.',
            medication: 'Corticosteroids and muscle relaxants.',
            workouts: 'Regular physical activity as tolerated.',
            diets: 'Balanced diet to support overall health.'
        },
        'Parkinson’s disease': {
            name: 'Parkinson’s Disease',
            description: 'A progressive nervous system disorder that affects movement.',
            prescription: 'Medications to manage symptoms.',
            medication: 'Levodopa and dopamine agonists.',
            workouts: 'Regular exercise to improve mobility.',
            diets: 'Healthy diet rich in fiber.'
        },
        'sciatica': {
            name: 'Sciatica',
            description: 'Pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg.',
            prescription: 'Physical therapy and pain management.',
            medication: 'NSAIDs and muscle relaxants.',
            workouts: 'Stretching and strengthening exercises.',
            diets: 'Anti-inflammatory diet.'
        },
        'tension headache': {
            name: 'Tension Headache',
            description: 'A headache that causes mild to moderate pain, often described as feeling like a tight band around the head.',
            prescription: 'Rest and relaxation techniques.',
            medication: 'Over-the-counter pain relievers.',
            workouts: 'Gentle stretching and relaxation exercises.',
            diets: 'Stay hydrated and avoid trigger foods.'
        },
        'carpal tunnel syndrome': {
            name: 'Carpal Tunnel Syndrome',
            description: 'A condition that causes numbness, tingling, and other symptoms in the hand and arm.',
            prescription: 'Wrist splints and ergonomic adjustments.',
            medication: 'NSAIDs for pain relief.',
            workouts: 'Stretching exercises for the wrist.',
            diets: 'Balanced diet to support nerve health.'
        },
        'bacterial vaginosis': {
            name: 'Bacterial Vaginosis',
            description: 'A condition in which there is an imbalance of bacteria in the vagina.',
            prescription: 'Antibiotics as prescribed.',
            medication: 'Metronidazole or clindamycin.',
            workouts: 'Regular exercise to boost immunity.',
            diets: 'Probiotic-rich foods to restore balance.'
        },
        'urinary tract infection': {
            name: 'Urinary Tract Infection (UTI)',
            description: 'An infection in any part of the urinary system, kidneys, bladder, or urethra.',
            prescription: 'Antibiotics as prescribed.',
            medication: 'Pain relievers for discomfort.',
            workouts: 'Rest is recommended.',
            diets: 'Increase fluid intake, especially water.'
        },
        'appendicitis': {
            name: 'Appendicitis',
            description: 'An inflammation of the appendix that requires immediate medical attention.',
            prescription: 'Surgery to remove the appendix.',
            medication: 'Antibiotics before and after surgery.',
            workouts: 'Rest and avoid strenuous activities.',
            diets: 'Clear liquids until recovery.'
        },
        'diverticulitis': {
            name: 'Diverticulitis',
            description: 'An inflammation or infection in one or more small pouches in the digestive tract.',
            prescription: 'Antibiotics and a liquid diet.',
            medication: 'Pain relievers and antibiotics.',
            workouts: 'Rest is essential during flare-ups.',
            diets: 'High-fiber diet once symptoms improve.'
        },
        'cholesterol': {
            name: 'High Cholesterol',
            description: 'A condition where you have too much cholesterol in your blood, which can lead to heart disease.',
            prescription: 'Lifestyle changes and medications.',
            medication: 'Statins and other cholesterol-lowering drugs.',
            workouts: 'Regular cardiovascular exercise.',
            diets: 'Heart-healthy diet low in saturated fats.'
        },
        'celiac disease': {
            name: 'Celiac Disease',
            description: 'An autoimmune disorder where the ingestion of gluten leads to damage in the small intestine.',
            prescription: 'Strict gluten-free diet.',
            medication: 'Nutritional supplements as needed.',
            workouts: 'Regular exercise to maintain health.',
            diets: 'Gluten-free foods and balanced diet.'
        },
        'hives': {
            name: 'Hives',
            description: 'A skin rash triggered by a reaction to food, medicine, or other irritants.',
            prescription: 'Antihistamines to relieve itching.',
            medication: 'Corticosteroids for severe cases.',
            workouts: 'Gentle activities to avoid sweating.',
            diets: 'Avoid known allergens.'
        },
        'ringworm': {
            name: 'Ringworm',
            description: 'A fungal infection that causes a red, circular rash on the skin.',
            prescription: 'Antifungal creams or medications.',
            medication: 'Topical antifungals for skin infections.',
            workouts: 'Avoid activities that cause excessive sweating.',
            diets: 'Balanced diet to support immune health.'
        },
        'shingles': {
            name: 'Shingles',
            description: 'A viral infection that causes a painful rash, caused by the varicella-zoster virus.',
            prescription: 'Antiviral medications and pain relief.',
            medication: 'Acyclovir or valacyclovir.',
            workouts: 'Rest and avoid strenuous activities.',
            diets: 'Nutritious diet to support recovery.'
        },
        'pneumothorax': {
            name: 'Pneumothorax',
            description: 'A collapsed lung that occurs when air leaks into the space between the lung and chest wall.',
            prescription: 'Medical intervention may be required.',
            medication: 'Pain management and oxygen therapy.',
            workouts: 'Rest and avoid physical exertion.',
            diets: 'Balanced diet to support recovery.'
        },
        'sore throat': {
            name: 'Sore Throat',
            description: 'Pain, scratchiness, or irritation of the throat that often worsens when you swallow.',
            prescription: 'Rest and hydration.',
            medication: 'Pain relievers and throat lozenges.',
            workouts: 'Rest is recommended.',
            diets: 'Warm liquids and soft foods.'
        },
        'constipation': {
            name: 'Constipation',
            description: 'A condition in which there is difficulty in emptying the bowels, usually associated with hardened feces.',
            prescription: 'Increase fiber intake and hydration.',
            medication: 'Laxatives if necessary.',
            workouts: 'Regular physical activity to promote digestion.',
            diets: 'High-fiber foods and plenty of fluids.'
        },
        'diarrhea': {
            name: 'Diarrhea',
            description: 'Loose, watery stools that occur more than three times in a day.',
            prescription: 'Stay hydrated and rest.',
            medication: 'Antidiarrheal medications if necessary.',
            workouts: 'Rest is crucial during recovery.',
            diets: 'Bland foods like bananas and rice.'
        },
        'acne': {
            name: 'Acne',
            description: 'A skin condition that occurs when hair follicles become clogged with oil and dead skin cells.',
            prescription: 'Topical treatments and skincare routine.',
            medication: 'Benzoyl peroxide or retinoids.',
            workouts: 'Regular exercise to promote skin health.',
            diets: 'Balanced diet and hydration.'
        },
        'rosacea': {
            name: 'Rosacea',
            description: 'A chronic skin condition that causes redness and visible blood vessels in your face.',
            prescription: 'Topical and oral medications.',
            medication: 'Antibiotics and topical treatments.',
            workouts: 'Gentle exercises to avoid flushing.',
            diets: 'Avoid spicy foods and alcohol.'
        },
        'varicose veins': {
            name: 'Varicose Veins',
            description: 'Enlarged veins that can be seen just under the surface of the skin, often in the legs.',
            prescription: 'Compression stockings and lifestyle changes.',
            medication: 'Pain relievers for discomfort.',
            workouts: 'Regular walking and leg exercises.',
            diets: 'High-fiber diet to prevent constipation.'
        },
        'sciatica': {
            name: 'Sciatica',
            description: 'Pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg.',
            prescription: 'Physical therapy and pain management.',
            medication: 'NSAIDs and muscle relaxants.',
            workouts: 'Stretching and strengthening exercises.',
            diets: 'Anti-inflammatory diet.'
        },
        'tendonitis': {
            name: 'Tendonitis',
            description: 'An inflammation or irritation of a tendon, often caused by repetitive motion.',
            prescription: 'Rest and physical therapy.',
            medication: 'NSAIDs for pain relief.',
            workouts: 'Gentle stretching and strengthening exercises.',
            diets: 'Balanced diet to support healing.'
        },
        'whiplash': {
            name: 'Whiplash',
            description: 'A neck injury due to forceful, rapid back-and-forth movement of the neck.',
            prescription: 'Rest and physical therapy.',
            medication: 'Pain relievers and muscle relaxants.',
            workouts: 'Gentle neck exercises as tolerated.',
            diets: 'Balanced diet to support recovery.'
        },
        'chronic fatigue syndrome': {
            name: 'Chronic Fatigue Syndrome',
            description: 'A complex disorder characterized by extreme fatigue that doesn’t improve with rest.',
            prescription: 'Lifestyle changes and symptom management.',
            medication: 'Pain relievers and antidepressants.',
            workouts: 'Gentle activities to avoid overexertion.',
            diets: 'Balanced diet to support energy levels.'
        },
        'restless legs syndrome': {
            name: 'Restless Legs Syndrome',
            description: 'A condition characterized by an uncontrollable urge to move the legs, often accompanied by uncomfortable sensations.',
            prescription: 'Lifestyle changes and medications.',
            medication: 'Dopaminergic agents and iron supplements.',
            workouts: 'Regular physical activity can help.',
            diets: 'Avoid caffeine and alcohol.'
        },
        'hyperthyroidism': {
            name: 'Hyperthyroidism',
            description: 'A condition in which the thyroid gland is overactive and produces excessive amounts of thyroid hormones.',
            prescription: 'Antithyroid medications and lifestyle changes.',
            medication: 'Methimazole or propylthiouracil.',
            workouts: 'Regular exercise to maintain weight.',
            diets: 'Balanced diet with adequate nutrients.'
        },
        'hypothyroidism': {
            name: 'Hypothyroidism',
            description: 'A condition in which the thyroid gland does not produce enough thyroid hormones.',
            prescription: 'Thyroid hormone replacement therapy.',
            medication: 'Levothyroxine as prescribed.',
            workouts: 'Regular exercise to maintain health.',
            diets: 'Balanced diet with iodine-rich foods.'
        },
        'menopause': {
            name: 'Menopause',
            description: 'The time that marks the end of a woman’s menstrual cycles, diagnosed after 12 months without a menstrual period.',
            prescription: 'Hormone replacement therapy and lifestyle changes.',
            medication: 'Hormonal medications as needed.',
            workouts: 'Regular exercise to manage symptoms.',
            diets: 'Balanced diet rich in calcium and vitamin D.'
        },
        'osteoporosis': {
            name: 'Osteoporosis',
            description: 'A condition in which bones become weak and brittle, increasing the risk of fractures.',
            prescription: 'Calcium and vitamin D supplements.',
            medication: 'Bisphosphonates and hormone therapy.',
            workouts: 'Weight-bearing exercises to strengthen bones.',
            diets: 'Calcium-rich foods and balanced diet.'
        },
        'sickle cell disease': {
            name: 'Sickle Cell Disease',
            description: 'A group of inherited red blood cell disorders characterized by sickle-shaped red blood cells.',
            prescription: 'Pain management and hydration.',
            medication: 'Hydroxyurea and pain relievers.',
            workouts: 'Regular, moderate exercise.',
            diets: 'Balanced diet rich in nutrients.'
        },
        'hemophilia': {
            name: 'Hemophilia',
            description: 'A rare bleeding disorder in which the blood doesn’t clot normally due to a lack of sufficient blood-clotting proteins.',
            prescription: 'Factor replacement therapy.',
            medication: 'Clotting factor concentrates.',
            workouts: 'Avoid high-impact activities.',
            diets: 'Balanced diet to support overall health.'
        },
        'cystic fibrosis': {
            name: 'Cystic Fibrosis',
            description: 'A genetic disorder that affects the lungs and digestive system, causing severe respiratory and digestive problems.',
            prescription: 'Airway clearance techniques and medications.',
            medication: 'Mucus thinners and antibiotics.',
            workouts: 'Regular exercise to improve lung function.',
            diets: 'High-calorie diet to meet energy needs.'
        },
        'autism spectrum disorder': {
            name: 'Autism Spectrum Disorder',
            description: 'A developmental disorder that affects communication and behavior.',
            prescription: 'Behavioral therapies and support.',
            medication: 'Medications for associated symptoms.',
            workouts: 'Physical activities to improve motor skills.',
            diets: 'Balanced diet to support overall health.'
        },
        'ADHD': {
            name: 'Attention Deficit Hyperactivity Disorder (ADHD)',
            description: 'A chronic condition including attention difficulty, hyperactivity, and impulsiveness.',
            prescription: 'Behavioral therapy and medication.',
            medication: 'Stimulants and non-stimulants as prescribed.',
            workouts: 'Regular physical activity to improve focus.',
            diets: 'Balanced diet to support brain health.'
        },
        'bacterial infections': {
            name: 'Bacterial Infections',
            description: 'Infections caused by bacteria, which can affect various parts of the body.',
            prescription: 'Antibiotics as prescribed.',
            medication: 'Antibiotics specific to the infection.',
            workouts: 'Rest is essential during recovery.',
            diets: 'Nutritious diet to support immune health.'
        },
        'viral infections': {
            name: 'Viral Infections',
            description: 'Infections caused by viruses, which can affect various parts of the body.',
            prescription: 'Rest and hydration.',
            medication: 'Antiviral medications if necessary.',
            workouts: 'Rest is crucial during recovery.',
            diets: 'Nutritious diet to support immune health.'
        },
        'fungal infections': {
            name: 'Fungal Infections',
            description: 'Infections caused by fungi, which can affect the skin, nails, and other parts of the body.',
            prescription: 'Antifungal medications as prescribed.',
            medication: 'Topical or systemic antifungals.',
            workouts: 'Gentle activities to avoid irritation.',
            diets: 'Balanced diet to support immune health.'
        },
        'chronic pain': {
            name: 'Chronic Pain',
            description: 'Pain that lasts for weeks, months, or even years, often affecting daily activities.',
            prescription: 'Pain management strategies.',
            medication: 'Pain relievers and anti-inflammatory medications.',
            workouts: 'Gentle exercises to maintain mobility.',
            diets: 'Balanced diet to support overall health.'
        },
        'sleep apnea': {
            name: 'Sleep Apnea',
            description: 'A serious sleep disorder in which breathing repeatedly stops and starts.',
            prescription: 'Lifestyle changes and CPAP therapy.',
            medication: 'Medications for associated symptoms.',
            workouts: 'Regular physical activity to maintain a healthy weight.',
            diets: 'Balanced diet to support overall health.'
        },
        'gastroesophageal reflux disease': {
            name: 'Gastroesophageal Reflux Disease (GERD)',
            description: 'A digestive disorder that affects the lower esophageal sphincter between the esophagus and stomach.',
            prescription: 'Lifestyle changes and medications.',
            medication: 'Proton pump inhibitors and antacids.',
            workouts: 'Regular exercise to maintain a healthy weight.',
            diets: 'Avoid trigger foods and eat smaller meals.'
        },
        'irritable bowel syndrome': {
            name: 'Irritable Bowel Syndrome (IBS)',
            description: 'A common disorder that affects the large intestine, causing cramping, abdominal pain, bloating, gas, and diarrhea or constipation.',
            prescription: 'Dietary changes and stress management.',
            medication: 'Antispasmodics and laxatives.',
            workouts: 'Regular physical activity to promote digestion.',
            diets: 'High-fiber diet and avoid trigger foods.'
        },
        'lactose intolerance': {
            name: 'Lactose Intolerance',
            description: 'The inability to digest lactose, a sugar found in milk and dairy products.',
            prescription: 'Avoidance of lactose-containing foods.',
            medication: 'Lactase supplements if necessary.',
            workouts: 'Regular exercise to maintain health.',
            diets: 'Lactose-free alternatives and balanced diet.'
        },
        'pediatric conditions': {
            name: 'Pediatric Conditions',
            description: 'Various health issues that affect children, including developmental disorders and infections.',
            prescription: 'Varies by condition; consult a pediatrician.',
            medication: 'As prescribed by a healthcare provider.',
            workouts: 'Encourage physical activity appropriate for age.',
            diets: 'Balanced diet to support growth and development.'
        },
        'adult conditions': {
            name: 'Adult Conditions',
            description: 'Various health issues that affect adults, including chronic diseases and mental health disorders.',
            prescription: 'Varies by condition; consult a healthcare provider.',
            medication: 'As prescribed by a healthcare provider.',
            workouts: 'Regular physical activity to maintain health.',
            diets: 'Balanced diet to support overall health.'
        },
        'geriatric conditions': {
            name: 'Geriatric Conditions',
            description: 'Health issues that affect older adults, including mobility issues and cognitive decline.',
            prescription: 'Varies by condition; consult a geriatrician.',
            medication: 'As prescribed by a healthcare provider.',
            workouts: 'Gentle exercises to maintain mobility.',
            diets: 'Balanced diet to support overall health.'
        },
        'sports injuries': {
            name: 'Sports Injuries',
            description: 'Injuries that occur during sports or exercise, including sprains and fractures.',
            prescription: 'Rest and rehabilitation.',
            medication: 'Pain relievers and anti-inflammatory medications.',
            workouts: 'Physical therapy and gradual return to activity.',
            diets: 'Balanced diet to support recovery.'
        },
        'occupational injuries': {
            name: 'Occupational Injuries',
            description: 'Injuries that occur as a result of work-related activities.',
            prescription: 'Rest and rehabilitation.',
            medication: 'Pain relievers and anti-inflammatory medications.',
            workouts: 'Physical therapy and gradual return to activity.',
            diets: 'Balanced diet to support recovery.'
        },
        'environmental illnesses': {
            name: 'Environmental Illnesses',
            description: 'Health issues caused by exposure to environmental factors, including pollutants and allergens.',
            prescription: 'Avoidance of triggers and supportive care.',
            medication: 'Antihistamines and other medications as needed.',
            workouts: 'Regular physical activity to maintain health.',
            diets: 'Balanced diet to support overall health.'
        },
        'toxic exposure': {
            name: 'Toxic Exposure',
            description: 'Health issues caused by exposure to toxic substances, including chemicals and heavy metals.',
            prescription: 'Avoidance of further exposure and supportive care.',
            medication: 'Detoxification treatments as needed.',
            workouts: 'Regular physical activity to maintain health.',
            diets: 'Balanced diet to support detoxification.'
        },
        'mental health disorders': {
            name: 'Mental Health Disorders',
            description: 'A wide range of conditions that affect mood, thinking, and behavior.',
            prescription: 'Therapy and medication as needed.',
            medication: 'Antidepressants, antipsychotics, or anxiolytics as prescribed.',
            workouts: 'Regular physical activity to improve mood.',
            diets: 'Balanced diet to support mental health.'
        },
        'substance abuse': {
            name: 'Substance Abuse',
            description: 'The harmful or hazardous use of psychoactive substances, including alcohol and illicit drugs.',
            prescription: 'Rehabilitation and counseling.',
            medication: 'Medications to manage withdrawal symptoms.',
            workouts: 'Regular physical activity to support recovery.',
            diets: 'Balanced diet to support overall health.'
        },
        'eating disorders': {
            name: 'Eating Disorders',
            description: 'Serious conditions related to persistent eating behaviors that negatively impact health, emotions, and quality of life.',
            prescription: 'Therapy and nutritional counseling.',
            medication: 'Antidepressants or other medications as needed.',
            workouts: 'Regular physical activity to promote health.',
            diets: 'Balanced diet to support recovery.'
        },
        'chronic diseases': {
            name: 'Chronic Diseases',
            description: 'Long-lasting conditions that can be controlled but not cured, such as diabetes and heart disease.',
            prescription: 'Management strategies and lifestyle changes.',
            medication: 'As prescribed by a healthcare provider.',
            workouts: 'Regular physical activity to maintain health.',
            diets: 'Balanced diet to support overall health.'
        },
        'infectious diseases': {
            name: 'Infectious Diseases',
            description: 'Disorders caused by organisms such as bacteria, viruses, fungi, or parasites.',
            prescription: 'Antibiotics or antiviral medications as needed.',
            medication: 'As prescribed by a healthcare provider.',
            workouts: 'Rest is crucial during recovery.',
            diets: 'Nutritious diet to support immune health.'
        },
        'autoimmune diseases': {
            name: 'Autoimmune Diseases',
            description: 'Conditions in which the immune system mistakenly attacks the body.',
            prescription: 'Immunosuppressive medications and lifestyle changes.',
            medication: 'As prescribed by a healthcare provider.',
            workouts: 'Regular physical activity to maintain.'
        },
        
         "fever": {
            name: "Fever",
            description: "A temporary increase in body temperature, often due to an infection.",
            prescription: "Rest and hydration.",
            medication: "Acetaminophen or ibuprofen for fever reduction.",
            workouts: "Light stretching, walking.",
            diets: "Warm fluids, fruit juices, herbal tea."
        },
        "cold": {
            name: "Common Cold",
            description: "A viral infection affecting the nose and throat.",
            prescription: "Rest and hydration.",
            medication: "Over-the-counter cold medications.",
            workouts: "Mild breathing exercises, yoga.",
            diets: "Vitamin C-rich fruits, warm soups, herbal tea."
        },
        "flu": {
            name: "Influenza (Flu)",
            description: "A contagious respiratory illness caused by influenza viruses.",
            prescription: "Rest and hydration.",
            medication: "Antiviral medications if prescribed.",
            workouts: "Light yoga, deep breathing exercises.",
            diets: "Ginger tea, chicken soup, leafy greens."
        },
        "diabetes": {
            name: "Diabetes",
            description: "A chronic disease that affects how your body turns food into energy.",
            prescription: "Monitor blood sugar, eat a balanced diet.",
            medication: "Insulin or oral hypoglycemic agents.",
            workouts: "Walking, cycling, weight training.",
            diets: "Low-carb foods, high-fiber vegetables, lean proteins."
        },
        "hypertension": {
            name: "Hypertension",
            description: "A condition in which blood pressure is consistently too high.",
            prescription: "Reduce salt intake, exercise regularly.",
            medication: "Antihypertensive medications.",
            workouts: "Brisk walking, swimming, aerobics.",
            diets: "Low-sodium diet, leafy greens, bananas."
        },
        "asthma": {
            name: "Asthma",
            description: "A condition in which airways narrow and swell, making breathing difficult.",
            prescription: "Avoid allergens, use prescribed inhalers.",
            medication: "Bronchodilators and corticosteroids.",
            workouts: "Breathing exercises, swimming, yoga.",
            diets: "Omega-3-rich foods, ginger, garlic."
        },
        "migraine": {
            name: "Migraine",
            description: "A neurological condition causing intense headaches and nausea.",
            prescription: "Rest in a dark room, avoid triggers.",
            medication: "Triptans or NSAIDs for pain relief.",
            workouts: "Meditation, light yoga, deep breathing.",
            diets: "Magnesium-rich foods, almonds, dark chocolate."
        },
        "food poisoning": {
            name: "Food Poisoning",
            description: "An illness caused by eating contaminated food.",
            prescription: "Stay hydrated, rest.",
            medication: "Antiemetics for nausea.",
            workouts: "None, allow body to recover.",
            diets: "BRAT diet (Bananas, Rice, Applesauce, Toast), herbal tea."
        },
        "pneumonia": {
            name: "Pneumonia",
            description: "A lung infection that inflames the air sacs in one or both lungs.",
            prescription: "Antibiotics for bacterial pneumonia.",
            medication: "Cough medicine and fever reducers.",
            workouts: "Light stretching, breathing exercises.",
            diets: "Warm soups, vitamin C-rich fruits, green tea."
        },
        "arthritis": {
            name: "Arthritis",
            description: "Inflammation of joints causing pain and stiffness.",
            prescription: "Physical therapy and pain management.",
            medication: "NSAIDs and corticosteroids.",
            workouts: "Swimming, light stretching, tai chi.",
            diets: "Anti-inflammatory foods, omega-3 fatty acids, turmeric."
        },
        "heart disease": {
            name: "Heart Disease",
            description: "A range of conditions affecting the heart and blood vessels.",
            prescription: "Eat heart-healthy foods, exercise.",
            medication: "Statins and blood pressure medications.",
            workouts: "Brisk walking, jogging, swimming.",
            diets: "Mediterranean diet, whole grains, nuts."
        },
        "covid-19": {
            name: "COVID-19",
            description: "A viral disease causing respiratory illness and flu-like symptoms.",
            prescription: "Rest and hydration.",
            medication: "Antivirals if prescribed.",
            workouts: "Light stretching, breathing exercises.",
            diets: "Warm liquids, vitamin C-rich foods, herbal tea."
        },
        "depression": {
            name: "Depression",
            description: "A mood disorder causing persistent sadness and loss of interest.",
            prescription: "Therapy and medication.",
            medication: "Antidepressants as prescribed.",
            workouts: "Meditation, yoga, jogging.",
            diets: "Omega-3 foods, leafy greens, dark chocolate."
        },
        "anemia": {
            name: "Anemia",
            description: "A condition where there is a lack of healthy red blood cells.",
            prescription: "Eat iron-rich foods, take iron supplements if needed.",
            medication: "Iron supplements.",
            workouts: "Walking, light weight lifting, yoga.",
            diets: "Spinach, lentils, lean meats."
        },
        "dengue": {
            name: "Dengue Fever",
            description: "A mosquito-borne viral infection causing flu-like symptoms.",
            prescription: "Rest and hydration.",
            medication: "Pain relievers for fever.",
            workouts: "Rest only during infection, light stretching after recovery.",
            diets: "Papaya leaves, coconut water, vitamin C-rich fruits."
        },
        "malaria": {
            name: "Malaria",
            description: "A mosquito-borne disease causing fever and chills.",
            prescription: "Antimalarial medications.",
            medication: "Chloroquine or artemisinin-based therapies.",
            workouts: "Light walking, stretching after recovery.",
            diets: "Citrus fruits, warm soups, herbal tea."
        },
        "eczema": {
            name: "Eczema",
            description: "A condition causing dry, itchy, and inflamed skin.",
            prescription: "Moisturizers and topical steroids.",
            medication: "Antihistamines for itching.",
            workouts: "Low-impact exercises, yoga, swimming.",
            diets: "Omega-3 foods, leafy greens, probiotic foods."
        },
        "obesity": {
            name: "Obesity",
            description: "A medical condition involving excessive body fat.",
            prescription: "Maintain a healthy diet, exercise regularly.",
            medication: "Weight loss medications if prescribed.",
            workouts: "Cardio exercises, strength training, yoga.",
            diets: "High-fiber foods, lean protein, healthy fats."
        },
        "stroke": {
            name: "Stroke",
            description: "A condition where blood supply to the brain is disrupted.",
            prescription: "Immediate medical attention is crucial.",
            medication: "Anticoagulants and rehabilitation therapies.",
            workouts: "Light stretching, walking, rehab therapy.",
            diets: "Leafy greens, omega-3 foods, whole grains."
        },
        "ulcer": {
            name: "Ulcer",
            description: "A sore in the stomach lining caused by acid damage.",
            prescription: "Avoid spicy foods, limit alcohol.",
            medication: "Proton pump inhibitors.",
            workouts: "Light yoga, meditation.",
            diets: "Bananas, probiotic yogurt, non-citrus fruits."
        },
        "headache": {
            name: "Headache",
            description: "Pain or discomfort in the head, scalp, or neck, often caused by stress, dehydration, or underlying conditions.",
            prescription: "Rest and hydration.",
            medication: "Over-the-counter pain relievers.",
            workouts: "Light yoga, breathing exercises, stretching.",
            diets: "Magnesium-rich foods, herbal tea, almonds, dark chocolate."
        },
        "chronic fatigue syndrome": {
            name: "Chronic Fatigue Syndrome",
            description: "A complex disorder characterized by extreme fatigue that doesn’t improve with rest.",
            prescription: "Lifestyle changes and symptom management.",
            medication: "Pain relievers and antidepressants.",
            workouts: "Gentle activities to avoid overexertion.",
            diets: "Balanced diet to support energy levels."
        },
        "restless legs syndrome": {
            name: "Restless Legs Syndrome",
            description: "A condition characterized by an uncontrollable urge to move the legs, often accompanied by uncomfortable sensations.",
            prescription: "Lifestyle changes and medications.",
            medication: "Dopaminergic agents and iron supplements.",
            workouts: "Regular physical activity can help.",
            diets: "Avoid caffeine and alcohol."
        },
    };

    
    let foundDisease = null;
    for (const key in diseases) {
        if (symptoms.includes(key)) {
            foundDisease = diseases[key];
            break;
        }
    }

    if (foundDisease) {
        diseaseName.textContent = foundDisease.name;
        diseaseDescription.textContent = foundDisease.description;
        diseasePrescription.textContent = foundDisease.prescription;
        diseaseMedication.textContent = foundDisease.medication;
        diseaseWorkouts.textContent = foundDisease.workouts;
        diseaseDiets.textContent = foundDisease.diets;
    } else {
        diseaseName.textContent = 'Unknown';
        diseaseDescription.textContent = 'Please consult a healthcare professional for a proper diagnosis.';
        diseasePrescription.textContent = '';
        diseaseMedication.textContent = '';
        diseaseWorkouts.textContent = '';
        diseaseDiets.textContent = '';
    }

    resultDiv.classList.remove('hidden');
});