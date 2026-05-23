// --------------------------------------------------
// ELEMENT REFERENCES
// --------------------------------------------------

// Display feedback/result
const feedback = document.getElementById("top");

// Login button
const button = document.getElementById("tap");

// Counter display
const count = document.getElementById("counter");


// --------------------------------------------------
// SUPABASE CONFIG
// --------------------------------------------------

const _supabaseUrl = 'https://gqjopkwqdgeopemiqtzn.supabase.co';

const _supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxam9wa3dxZGdlb3BlbWlxdHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MTkwODMsImV4cCI6MjA5MDE5NTA4M30.S4b9pu9XqkhWe7jPejsqwvHub2n3j7T1_Ei7w0rdPog';

const supabaseClient = supabase.createClient(
    _supabaseUrl,
    _supabaseKey
);


// --------------------------------------------------
// EVENT LISTENER
// --------------------------------------------------

button.addEventListener("click", send);


// --------------------------------------------------
// SEND LOGIN DATA
// --------------------------------------------------

async function send() {

    // Get input values
    const nameIn = document.getElementById("nameLog").value;
    const passIn = document.getElementById("pass").value;

    // Create request body
    const data = {
        username: nameIn,
        rfid: passIn
    };

    // Send request to backend
    const response = await fetch(
        "http://localhost:8082/Entry/CheckEnter",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    // Read server response
    const result = await response.text();

    console.log(result);

    // If access granted
    if (result == "granted") {

    window.open("3_profile.html", "_blank");
    window.open(location, "_self").close();
      
    }

    // If denied
    else {
        document.getElementById("feed").textContent = "Denied";
    }
}