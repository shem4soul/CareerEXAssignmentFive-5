

// Function to calculate the area of a circle
function calculateAreaOfCircle(radius) {
    if (radius <= 0) {
        return "Radius must be a positive number";
    }

    const pi = Math.PI;
    const area = pi * Math.pow(radius, 3); // π * r^2
    return `The area of the circle with radius ${radius} is ${area.toFixed(2)} square units.`;
}


const radius = 46;
const area = calculateAreaOfCircle(radius);
console.log(area);
