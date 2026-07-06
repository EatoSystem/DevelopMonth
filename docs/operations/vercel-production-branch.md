# Vercel production-branch audit

**Audit date:** 6 July 2026  
**Project:** `eatosystem/develop-month`  
**Repository:** `EatoSystem/DevelopMonth`  
**Active approved branch:** `master`

## Finding

The Vercel project API currently reports:

```text
productionBranch: main
```

The repository currently develops and releases from:

```text
master
```

As a result, pushes to `master` create Preview deployments. Recent approved
releases have required a manual Vercel promotion before the custom production
domains update.

## Required correction

Set the Vercel Production environment’s tracked branch to:

```text
master
```

Official Vercel documentation says the Production Branch can be changed from:

1. Project Settings
2. Environments
3. Production
4. Branch Tracking
5. Set the branch to `master`
6. Save

Reference:
<https://vercel.com/docs/git#production-branch>

## Why this is not changed in repository code

Production-branch tracking is a Vercel project setting, not an application
setting in `vercel.json`. This audit documents the exact external change
required. It should be performed by an authorised Vercel project owner and
recorded in the project change log.

## Verification after correction

On the next approved `master` push:

- Vercel should label the Git-triggered deployment `Production`, not `Preview`.
- No manual `vercel promote` step should be needed.
- `developmonth.com` and `www.developmonth.com` should move automatically after
  the deployment reaches Ready.
- The deployment metadata should show `githubCommitRef: master`.
- The custom-domain response should contain a marker unique to the new commit.

## Secondary observation

The project API currently reports no explicit framework preset (`framework:
null`), while production builds complete successfully using the repository’s
`npm run build` command. This is not currently blocking deployment, but the
project owner should confirm that the intended Next.js framework preset and
build settings are selected during the same configuration review.

