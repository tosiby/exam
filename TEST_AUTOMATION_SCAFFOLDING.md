# Test Automation Scaffolding

This repository now contains baseline workspace and test scaffolding for:

- Backend app (`apps/backend` + `tests/backend/*.test.js`)
- Web app (`apps/web` + `tests/web/*.spec.ts`)
- Mobile app (`apps/mobile` + `tests/mobile/*.test.tsx`)

## Next step

Once your implementation code exists, request the **full automation implementation** again and tests can be authored under:

- `tests/backend/*.test.js`
- `tests/web/*.spec.ts`
- `tests/mobile/*.test.tsx`

## Environment safety for tests

- Copy `.env.test.example` to `.env.test` and keep values non-production.
- `config/test-env.js` hard-fails when `DATABASE_URL` is missing or appears unsafe.
- `config/test-db.config.json` documents dedicated test DB defaults.
