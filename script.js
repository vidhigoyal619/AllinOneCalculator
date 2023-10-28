const output = document.getElementById('output');
let currentInput = '';

function appendToOutput(value) {
    currentInput += value;
    output.value = currentInput;
}

function clearOutput() {
    currentInput = '';
    output.value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}
function addDecimalPoint() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        output.value = currentInput;
    }
}

function handleInput(input) {
    if (input === '.') {
        addDecimalPoint();
    } else {
        appendToOutput(input);
    }
}
function convertToDecimal() {
    try {
        const binaryInput = currentInput.replace(/[^01]/g, ''); // Remove non-binary characters
        const decimalOutput = parseFloat(binaryInput, 2);
        currentInput = decimalOutput.toString();
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}

function convertToOctal() {
    try {
        const decimalValue = parseFloat(currentInput, 2);
        const octalOutput = decimalValue.toString(8);
        currentInput = octalOutput;
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}

function convertToHex() {
    try {
        const decimalValue = parseFloat(currentInput, 2);
        const hexOutput = decimalValue.toString(16).toUpperCase();
        currentInput = hexOutput;
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}
function convertToFahrenheit() {
    try {
        const celsiusInput = parseFloat(currentInput);
        const fahrenheitOutput = (celsiusInput * 9/5) + 32;
        currentInput = fahrenheitOutput.toString();
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}

function convertToCelsius() {
    try {
        const fahrenheitInput = parseFloat(currentInput);
        const celsiusOutput = (fahrenheitInput - 32) * 5/9;
        currentInput = celsiusOutput.toString();
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');
const unitFromSelect = document.getElementById('unitFrom');
const unitToSelect = document.getElementById('unitTo');

dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show-dropdown');
});


function calculateOnesComplement() {
    try {
        const binaryInput = currentInput.replace(/[^01]/g, ''); // Remove non-binary characters
        const onesComplement = binaryInput.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
        currentInput = onesComplement;
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}

function calculateTwosComplement() {
    try {
        const binaryInput = currentInput.replace(/[^01]/g, ''); // Remove non-binary characters
        const onesComplement = binaryInput.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
        let twosComplement = '';
        let carry = 1;

        for (let i = onesComplement.length - 1; i >= 0; i--) {
            if (carry === 1) {
                if (onesComplement[i] === '0') {
                    twosComplement = '1' + twosComplement;
                    carry = 0;
                } else {
                    twosComplement = '0' + twosComplement;
                }
            } else {
                twosComplement = onesComplement[i] + twosComplement;
            }
        }

        currentInput = twosComplement;
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}
// Function to convert decimal to binary
function convertToBinary() {
    try {
        const decimalValue = parseFloat(currentInput);
        const binaryOutput = decimalValue.toString(2);
        currentInput = binaryOutput;
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}

// Function to convert decimal to octal
function convertToOctal() {
    try {
        const decimalValue = parseFloat(currentInput);
        const octalOutput = decimalValue.toString(8);
        currentInput = octalOutput;
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}
// Function to convert octal to binary
function convertOctalToBinary() {
    try {
        const octalValue = currentInput; // Assuming currentInput contains the octal number as a string
        const decimalValue = parseInt(octalValue, 8); // Parse octal string to decimal
        const binaryOutput = decimalValue.toString(2); // Convert decimal to binary
        currentInput = binaryOutput;
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}
// Function to calculate sine
function calculateSine() {
    try {
        const inputValue = parseFloat(currentInput);
        const result = Math.sin(inputValue * (Math.PI / 180)); // Convert degrees to radians
        currentInput = result.toString();
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}

// Function to calculate cosine
function calculateCosine() {
    try {
        const inputValue = parseFloat(currentInput);
        const result = Math.cos(inputValue * (Math.PI / 180)); // Convert degrees to radians
        currentInput = result.toString();
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}

// Function to calculate tangent
function calculateTangent() {
    try {
        const inputValue = parseFloat(currentInput);
        const result = Math.tan(inputValue * (Math.PI / 180)); // Convert degrees to radians
        currentInput = result.toString();
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}
// Function to calculate sine in radians
function calculateSineRadians() {
    try {
        const inputValue = parseFloat(currentInput);
        const result = Math.sin(inputValue);
        currentInput = result.toString();
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}

// Function to calculate cosine in radians
function calculateCosineRadians() {
    try {
        const inputValue = parseFloat(currentInput);
        const result = Math.cos(inputValue);
        currentInput = result.toString();
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}

// Function to calculate tangent in radians
function calculateTangentRadians() {
    try {
        const inputValue = parseFloat(currentInput);
        const result = Math.tan(inputValue);
        currentInput = result.toString();
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}
function convertClothingSize() {
    const inputSize = parseFloat(currentInput);

    // Define conversion factors for different size systems
    const usToUkFactor = 0.83;
    const ukToUsFactor = 1.21;
    const euToUsFactor = 1.08;
    const usToEuFactor = 0.93;
    const ukToEuFactor = 1.30;
    const euToUkFactor = 0.77;
    const usToInFactor = 2.54;

    // Get the selected conversion option from a dropdown or input
    const selectedOption = document.getElementById('sizeConversionOption').value;

    let convertedSize;

    switch (selectedOption) {
        case 'usToUk':
            convertedSize = inputSize * usToUkFactor;
            break;
        case 'ukToUs':
            convertedSize = inputSize * ukToUsFactor;
            break;
        case 'euToUs':
            convertedSize = inputSize * euToUsFactor;
            break;
        case 'usToEu':
            convertedSize = inputSize * usToEuFactor;
            break;
        case 'ukToEu':
            convertedSize = inputSize * ukToEuFactor;
            break;
        case 'euToUk':
            convertedSize = inputSize * euToUkFactor;
            break;
        case 'usToIn':
            convertedSize = inputSize * usToInFactor;
            break;    
        default:
            output.value = 'Invalid conversion option';
            return;
    }

    currentInput = convertedSize.toFixed(2); // Round to 2 decimal places
    output.value = currentInput;
}
// ... (previous code)

function calculateFactorial() {
    try {
        const number = parseFloat(currentInput);

        if (number < 0) {
            output.value = 'Error: Factorial of a negative number is undefined';
            return;
        }

        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }

        currentInput = factorial.toString();
        output.value = currentInput;
    } catch (error) {
        output.value = 'Error';
    }
}
