# DomainHaul

## Overview
DomainHaul is a full-stack web application that scans a given domain and provides detailed information about its DNS records, HTTP headers, SSL certificate details, and WHOIS information. It is built using Next.js, Flask, TypeScript, Python, ShadCN, Tailwind CSS, and RESTful APIs.

## Features
- **DNS Records:** Retrieves and displays domain name system (DNS) records, including A, AAAA, CNAME, MX, TXT, and more.
- **HTTP Headers:** Fetches and presents HTTP response headers of the target domain.
- **SSL Information:** Shows SSL certificate details such as issuer, validity period, and subject.
- **WHOIS Lookup:** Provides domain registration information, including registrar, creation date, expiration date, and more.
- **Modern UI:** Built with ShadCN and Tailwind CSS for a clean and responsive interface.
- **Fast API Backend:** Flask-based backend handles scanning and processing efficiently.
- **TypeScript Support:** Ensures better type safety and maintainability in the frontend.

## Tech Stack
### Frontend:
- **Next.js** (React Framework)
- **TypeScript**
- **ShadCN (UI Components)**
- **Tailwind CSS**

### Backend:
- **Flask (Python Framework)**
- **Python**
- **RESTful API**

## Installation
### Prerequisites
- Node.js & npm
- Python & pip
- Docker (optional, for containerized deployment)

### Setup Frontend
```sh
cd frontend
npm install
npm run dev
```


(Backend)[https://github.com/SarvT/DomainScanner]
### Setup Backend
```sh
cd backend
pip install -r requirements.txt
flask run
```

## Usage
1. Enter the domain you want to scan.
2. View the retrieved details in an interactive UI.
3. Analyze DNS records, HTTP headers, SSL certificate, and WHOIS data.
<!--
## Deployment
You can deploy the project using Vercel (for frontend) and Railway/Render (for backend):

### Frontend Deployment
```sh
npm run build
vercel deploy
```

### Backend Deployment
```sh
docker build -t domain-scanner-backend .
docker run -p 5000:5000 domain-scanner-backend
```
-->
## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## License
MIT License

## Contact
For questions or suggestions, feel free to reach out!

