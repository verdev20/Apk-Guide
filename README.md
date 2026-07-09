# Bantayan Island Travel Guide — Android App

A native Android wrapper (Capacitor) for the Bantayan Island Travel Guide, packaging the site at
https://bantayan-island-travel-guide.vercel.app/ into an installable APK — real beach photos,
ferry schedule, itinerary planner, budget estimator, and a slide-out navigation menu.

Developed by **Vernie Esgana — BSIT 3 North**.

## Automatic builds

Every push to `main` automatically builds a debug APK via GitHub Actions
(`.github/workflows/build-apk.yml`). No manual steps required.

- Download the latest APK from the **Actions** tab → latest run → **Artifacts** → `bantayan-apk`.
- Every push also publishes/updates a GitHub **Release** tagged `v<run-number>` with the APK attached,
  so the newest build is always downloadable from the **Releases** page.

## Local development

```bash
npm install
npx cap sync android
cd android && ./gradlew assembleDebug
```

APK output: `android/app/build/outputs/apk/debug/app-debug.apk`
