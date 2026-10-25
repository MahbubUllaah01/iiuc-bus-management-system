# Development Roadmap

**Current status:** Planning / initial repository setup. All application features below are planned until implemented and tested.

## Phase 0 — Repository setup
- [ ] Create the GitHub repository
- [ ] Add README, `.gitignore`, `.env.example`, and package metadata
- [ ] Install Node.js dependencies
- [ ] Create a minimal Express server
- [ ] Add a health-check endpoint
- [ ] Confirm the server runs locally

## Phase 1 — Frontend prototype
- [ ] Build a responsive home page
- [ ] Show sample buses and routes using clearly labeled mock data
- [ ] Add route search/filter
- [ ] Show route stops and departure times
- [ ] Add accessible forms and validation messages

## Phase 2 — Database and API
- [ ] Install and configure local PostgreSQL
- [ ] Create SQL migrations for core tables
- [ ] Connect Express to PostgreSQL using environment variables
- [ ] Implement `GET /api/buses`
- [ ] Implement `GET /api/routes`
- [ ] Implement route-stop lookup
- [ ] Add server-side validation and consistent error responses

## Phase 3 — Student registration
- [ ] Define the registration policy
- [ ] Implement registration request creation
- [ ] Implement registration status lookup
- [ ] Prevent duplicate or invalid requests according to agreed rules
- [ ] Add tests

## Phase 4 — Admin workflow and security
- [ ] Add authentication
- [ ] Add role-based authorization
- [ ] Implement admin CRUD for buses, routes, stops, and schedules
- [ ] Add audit logging for important changes
- [ ] Review privacy and security

## Phase 5 — Quality and release
- [ ] Add automated tests
- [ ] Add screenshots and a short demo
- [ ] Document setup and API examples
- [ ] Deploy a demo using synthetic data
- [ ] Add a license after choosing terms
- [ ] Review accessibility and mobile layout

## First development session (recommended)

1. Install Node.js LTS.
2. Run `npm install`.
3. Create `src/server.js` with a minimal Express app.
4. Add `GET /api/health`.
5. Run `npm run dev`.
6. Test the endpoint in a browser or API client.
7. Commit the working change with a message such as `feat: add initial Express health endpoint`.

Do not mark a task complete until the code exists and has been checked.
