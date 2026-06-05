# How I Designed Multi-Tenancy for CloudCampus

CloudCampus is a School ERP SaaS platform, so the core architecture question is not only "how do users log in?" It is "which school, tenant, role, and workflow is this user allowed to touch?"

The design starts with a tenant and school hierarchy. A tenant can represent a trust or organization, and a school belongs to that tenant. Users are granted access through server-owned role and school context rather than client-supplied identifiers. That matters because the frontend should never be trusted to decide which school a user belongs to.

## Design Goals

- Keep tenant and school boundaries explicit.
- Derive access context on the server.
- Support multiple roles: Super Admin, Tenant Admin, School Admin, Teacher, Finance Staff, Staff, Parent, and Student.
- Make future modules easier to add without rewriting identity and access rules.
- Preserve auditability for sensitive flows.

## Backend Shape

The backend uses Java and Spring Boot with modular domains. Identity and access control sit close to authentication because every module depends on them. Domain modules such as academic setup, attendance, homework, exams, fees, notices, documents, and reporting should receive a validated user context before performing business work.

The key design decision is to avoid treating tenancy as a loose request parameter. Tenant and school context must be resolved from authenticated user claims, stored access grants, and server-side checks.

## Tradeoffs

Schema-per-tenant isolation can provide stronger data separation, but it increases migration and operational complexity. Shared-schema tenant scoping is easier to operate but requires disciplined query guards and tests. CloudCampus is still under active development, so the design keeps tenant isolation visible and reviewable while the product moves toward pilot readiness.

## Next Improvements

- Add stronger integration tests around tenant boundary violations.
- Add migration and backup proof for production readiness.
- Add monitoring around cross-tenant access failures.
- Document module-level authorization rules for each role.

