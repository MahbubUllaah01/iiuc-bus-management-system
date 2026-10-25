# IIUC Bus Management System

A beginner-friendly JavaScript project concept for organizing university bus routes, schedules, student transportation registrations, and seat allocation for International Islamic University Chittagong (IIUC).

> **Project status:** Planning / Initial Development  
> This repository is an independent project concept and is not an official IIUC system. It does not currently provide live bus tracking, verified university schedules, or a production-ready booking service.

## Goals

- Keep bus routes, stops, and schedules organized.
- Let students view available routes and submit a transportation request.
- Help authorized staff manage buses, capacities, and registrations.
- Reduce schedule confusion with clear, updatable information.

## Planned Features

### MVP (first working version)
- [ ] View a list of buses and routes
- [ ] View stops and scheduled departure times
- [ ] Submit a student transportation registration request
- [ ] View registration status
- [ ] Admin CRUD for buses, routes, and stops
- [ ] Validate inputs and show helpful error messages

### Later enhancements
- [ ] Role-based authentication (student / transport admin)
- [ ] Seat allocation and capacity checks
- [ ] Route and stop search/filter
- [ ] Schedule change announcements
- [ ] Responsive dashboard
- [ ] Automated tests and deployment
- [ ] Optional map view
- [ ] Optional GPS tracking, only with authorized hardware/data and appropriate consent

## Proposed Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript | User interface and client-side interactions |
| Backend | Node.js, Express | REST API |
| Database | PostgreSQL | Persistent application data |
| API testing | Postman or Bruno | Test HTTP endpoints |
| Version control | Git and GitHub | Track changes and collaboration |

The initial version intentionally avoids a frontend framework to keep the learning curve manageable. React can be introduced later if the interface becomes more complex.

## Proposed Project Structure

```text
iiuc-bus-management-system/
├── docs/
│   ├── database-schema.md
│   └── roadmap.md
├── public/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── validators/
│   └── server.js
├── tests/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

Some folders are placeholders for future development; they do not mean those features have already been implemented.

## Getting Started

### Prerequisites

- Node.js LTS and npm
- Git
- A code editor such as Visual Studio Code
- PostgreSQL (needed when database integration begins)

### Setup

1. Clone your repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/iiuc-bus-management-system.git
   cd iiuc-bus-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and fill in local development values when backend/database work begins.

4. Start the development server:

   ```bash
   npm run dev
   ```

   The server entry point is being prepared as part of the initial development tasks. Until that task is completed, the command may not start successfully.

## Planned API Endpoints

These are proposed endpoints, not yet implemented.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check whether the API is running |
| GET | `/api/buses` | List buses |
| GET | `/api/routes` | List routes |
| GET | `/api/routes/:id/stops` | List stops on a route |
| POST | `/api/registrations` | Submit a student transport request |
| GET | `/api/registrations/:id` | Check a registration status |
| PATCH | `/api/registrations/:id/status` | Admin updates request status |

Authentication and authorization must be added before exposing administrative endpoints beyond local development.

## Data Model

The initial schema plan is documented in [`docs/database-schema.md`](docs/database-schema.md). It proposes tables for buses, routes, stops, route stops, schedules, students, and registrations.

## Development Roadmap

See [`docs/roadmap.md`](docs/roadmap.md) for the phased implementation plan and first tasks.

## Privacy and Security

- Never commit `.env`, database passwords, API keys, or real student records.
- Use synthetic sample data during development.
- Validate all inputs on the server.
- Protect student information and restrict administrative operations.
- Do not publish unverified bus schedules as official information.

## Contributing

1. Create a branch for your change.
2. Make a small, focused commit.
3. Test the change locally.
4. Open a pull request with a clear summary.

## License

No license has been selected yet. Add a license file only after choosing the terms under which others may use the project.

## Acknowledgements

Created as an independent learning project to explore software engineering, database design, and practical campus transportation workflows.
