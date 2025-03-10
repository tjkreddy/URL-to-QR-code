# URL to QR Code Converter

A simple web application that converts URLs into QR codes using Node.js and Express.

## Features

- Convert any valid URL into a QR code
- Download QR code as PNG image
- Simple and intuitive web interface
- Real-time conversion

## Prerequisites

Before running this project, make sure you have installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/URL-to-QR-code.git
cd URL-to-QR-code
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
node index.js
```

2. Open your web browser and navigate to:
```
http://localhost:3000
```

3. Enter a URL in the input field and click "Convert" to generate a QR code.

## Dependencies

- express: ^4.21.2
- body-parser: ^1.20.3
- qr-image: ^3.2.0
- fs: ^0.0.1-security

## Project Structure

```
URL-to-QR-code/
├── index.js        # Main application file
├── index.html      # Frontend HTML
├── package.json    # Project configuration
└── README.md      # Documentation
```

## API Endpoints

- `GET /`: Serves the main page
- `POST /convert`: Converts submitted URL to QR code

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- [qr-image](https://github.com/alexeyten/qr-image) for QR code generation
- [Express.js](https://expressjs.com/) for the web framework
