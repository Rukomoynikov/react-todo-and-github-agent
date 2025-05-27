This is a Typescript React based repository and for the backend it uses Supabase. It is primarily responsible for ingesting metered usage for GitHub and recording that usage. Please follow these guidelines when contributing:

## Code Standards

### Required Before Each Commit
- Run `npm run lint` before committing any changes to ensure proper code formatting
- This will run Eslint on all Typescript files to maintain consistent style

### Development Flow
- Build: `npm run build`
- Test: `npm run test`
- Full CI check: `npm run test && npm run lint && npm run build` (includes build, lint, test)

## Repository Structure
- `src/components`: Folder for React components
- `src/pages`: Folder for page components
- `src/routes`: Folder for route definitions
- `src/libs/`: Folder for utility libraries and shared logic
- `docs/`: Documentation

## Key Guidelines
1. Follow React and Typescript best practices and idiomatic patterns
2. Maintain existing code structure and organization
3. Write tests for new functionality. Use `npm run test` to run tests
4. Document public APIs and complex logic. Suggest changes to the `docs/` folder when appropriate