const seatsContainer = document.getElementById("seatsContainer");
const selectedSeatsText = document.getElementById("selectedSeats");
const totalText = document.getElementById("total");
const bookBtn = document.getElementById("bookBtn");

const ticketPrice = 200;
const totalSeats = 40;

let selectedSeats = [];

// Create seats
for (let i = 1; i <= totalSeats; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.textContent = i;

    // Random booked seats
    if ([5, 9, 14, 18, 27, 32].includes(i)) {
        seat.classList.add("booked");
    }

    seat.addEventListener("click", () => {
        if (seat.classList.contains("booked")) return;

        seat.classList.toggle("selected");

        if (seat.classList.contains("selected")) {
            selectedSeats.push(i);
        } else {
            selectedSeats = selectedSeats.filter(
                seatNumber => seatNumber !== i
            );
        }

        updateSummary();
    });

    seatsContainer.appendChild(seat);
}

function updateSummary() {
    selectedSeats.sort((a, b) => a - b);

    selectedSeatsText.textContent =
        selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "None";

    totalText.textContent =
        selectedSeats.length * ticketPrice;
}

bookBtn.addEventListener("click", () => {
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat");
        return;
    }

    alert(
        `Booking Successful!\n\nSeats: ${selectedSeats.join(", ")}\nAmount: ₹${selectedSeats.length * ticketPrice}`
    );

    document
        .querySelectorAll(".seat.selected")
        .forEach(seat => {
            seat.classList.remove("selected");
            seat.classList.add("booked");
        });

    selectedSeats = [];
    updateSummary();
});