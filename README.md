# Climate Data Visualization Platform

A full-stack web application for visualizing and analyzing climate data with real-time updates and predictive analytics. Built as a demonstration of modern software development practices and technologies.

**Developer:** Computer Science Student, University of Stavanger  
**Location:** Stavanger, Norway  
**Project Type:** Full-Stack Web Application

## Project Overview

This platform provides interactive visualization of climate data, including temperature trends, precipitation patterns, and CO2 emissions. It demonstrates proficiency in modern web technologies, data structures, algorithms, database design, API development, and cloud deployment practices.

### Key Features

- Real-time climate data visualization with interactive charts
- RESTful API backend with comprehensive endpoints
- User authentication and authorization (JWT)
- PostgreSQL database with optimized queries
- Responsive React frontend with modern UI/UX
- Docker containerization for easy deployment
- Comprehensive unit and integration tests
- CI/CD pipeline configuration
- API documentation with Swagger/OpenAPI

## Technologies Demonstrated

### Backend
- **Node.js & Express.js** - Server-side application framework
- **PostgreSQL** - Relational database management
- **JWT Authentication** - Secure user authentication
- **RESTful API Design** - Industry-standard API architecture
- **Data validation** - Input sanitization and validation
- **Error handling** - Comprehensive error management

### Frontend
- **React 18** - Modern component-based UI framework
- **TypeScript** - Type-safe JavaScript development
- **Chart.js & Recharts** - Data visualization libraries
- **Axios** - HTTP client for API communication
- **React Router** - Client-side routing
- **Responsive Design** - Mobile-first CSS approach

### DevOps & Tools
- **Docker & Docker Compose** - Containerization
- **Git** - Version control
- **Jest & React Testing Library** - Testing frameworks
- **ESLint & Prettier** - Code quality tools
- **GitHub Actions** - CI/CD automation

### Computer Science Fundamentals
- **Data Structures** - Arrays, hash maps, trees, queues
- **Algorithms** - Sorting, searching, filtering, aggregation
- **Time Complexity** - O(n), O(log n) optimizations
- **Database Indexing** - Query optimization
- **Caching strategies** - Performance optimization
- **Asynchronous programming** - Promises, async/await

## Project Structure

```
climate-data-platform/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── climateController.js
│   │   │   └── analyticsController.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── ClimateData.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── climate.js
│   │   │   └── analytics.js
│   │   ├── services/
│   │   │   ├── dataProcessor.js
│   │   │   └── analyticsService.js
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   └── helpers.js
│   │   └── app.js
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   ├── .env.example
│   ├── .eslintrc.js
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard/
│   │   │   ├── Charts/
│   │   │   ├── Auth/
│   │   │   └── common/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── tests/
│   ├── Dockerfile
│   ├── tsconfig.json
│   └── package.json
├── database/
│   ├── migrations/
│   │   ├── 001_create_users.sql
│   │   ├── 002_create_climate_data.sql
│   │   └── 003_create_indexes.sql
│   └── seeds/
│       └── sample_data.sql
├── docs/
│   ├── API.md
│   ├── ARCHITECTURE.md
│   └── DEPLOYMENT.md
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Skills Demonstrated

### 1. Software Architecture & Design
- MVC (Model-View-Controller) pattern
- Separation of concerns
- Modular code organization
- Scalable application structure
- RESTful API design principles

### 2. Database Management
- Relational database design
- SQL queries and optimization
- Database migrations
- Data normalization
- Indexing strategies
- Transaction management

### 3. Algorithm Design & Data Structures
- Time series data processing
- Statistical calculations (mean, median, moving averages)
- Data aggregation algorithms
- Efficient data filtering and sorting
- Caching mechanisms

### 4. Security Best Practices
- Password hashing (bcrypt)
- JWT token-based authentication
- SQL injection prevention
- XSS protection
- CORS configuration
- Environment variable management

### 5. Testing & Quality Assurance
- Unit testing
- Integration testing
- Test-driven development (TDD)
- Code coverage analysis
- Mocking and stubbing

### 6. Version Control & Collaboration
- Git workflow (feature branches, pull requests)
- Meaningful commit messages
- Code review practices
- Documentation

### 7. DevOps & Deployment
- Docker containerization
- Container orchestration
- CI/CD pipelines
- Environment configuration
- Production deployment

### 8. API Development
- RESTful endpoint design
- Request/response handling
- Status codes and error handling
- API versioning
- Rate limiting
- API documentation (Swagger)

### 9. Frontend Development
- Component-based architecture
- State management
- Responsive design
- Accessibility (WCAG)
- Performance optimization
- TypeScript for type safety

### 10. Problem Solving
- Debugging techniques
- Performance profiling
- Memory management
- Error handling and recovery

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL 14+
- Docker & Docker Compose
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/climate-data-platform.git
cd climate-data-platform
```

2. Set up environment variables:
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

3. Update the `.env` files with your configuration

4. Start with Docker Compose:
```bash
docker-compose up -d
```

5. Run database migrations:
```bash
docker-compose exec backend npm run migrate
```

6. Seed sample data:
```bash
docker-compose exec backend npm run seed
```

### Running Locally (Without Docker)

#### Backend
```bash
cd backend
npm install
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

#### Database
Create PostgreSQL database and run migrations:
```bash
createdb climate_data
psql climate_data < database/migrations/001_create_users.sql
psql climate_data < database/migrations/002_create_climate_data.sql
psql climate_data < database/migrations/003_create_indexes.sql
```

## API Documentation

### Authentication Endpoints

**POST /api/auth/register**
- Register new user
- Body: `{ email, password, name }`

**POST /api/auth/login**
- Login user
- Body: `{ email, password }`
- Returns: JWT token

### Climate Data Endpoints

**GET /api/climate/temperature**
- Get temperature data
- Query params: `startDate`, `endDate`, `location`

**GET /api/climate/precipitation**
- Get precipitation data
- Query params: `startDate`, `endDate`, `location`

**GET /api/climate/co2**
- Get CO2 emissions data
- Query params: `startDate`, `endDate`, `region`

### Analytics Endpoints

**GET /api/analytics/trends**
- Get climate trends analysis

**GET /api/analytics/predictions**
- Get predictive analytics

See [API.md](docs/API.md) for complete documentation.

## Testing

### Backend Tests
```bash
cd backend
npm test                 # Run all tests
npm run test:unit       # Unit tests only
npm run test:integration # Integration tests only
npm run test:coverage   # Coverage report
```

### Frontend Tests
```bash
cd frontend
npm test                # Run all tests
npm run test:coverage  # Coverage report
```

## Deployment

### Docker Production Build
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Manual Deployment
See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions.

## Performance Optimizations

- Database query indexing for fast lookups
- API response caching with Redis
- Lazy loading for frontend components
- Image optimization
- Gzip compression
- CDN integration for static assets

## Future Enhancements

- Machine learning predictions for climate trends
- Real-time WebSocket updates
- Mobile application (React Native)
- Advanced data export features
- Multi-language support
- GraphQL API alternative

## Learning Resources

This project incorporates concepts from:
- Database Systems
- Web Development
- Software Engineering
- Data Structures & Algorithms
- Computer Networks
- Software Security

## Contributing

This is a student project, but contributions and suggestions are welcome for learning purposes.

## Contact

**Student:** Sture Troli  
**University:** University of Stavanger  
**Email:** so.troli@stud.uis.no  
**LinkedIn:** [(https://www.linkedin.com/in/sture-odin-troli-b54113104/)  ](https://www.linkedin.com/in/sture-odin-troli-b54113104/)
**GitHub:** [\[Your GitHub Profile\]](https://github.com/Odin-Troli19)

## Acknowledgments

- University of Stavanger - Computer Science Department
- Climate data sources and APIs
- Open source community

---

**Note:** This project is created for educational purposes to demonstrate software development skills for internship and job applications.