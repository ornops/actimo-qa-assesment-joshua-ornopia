# actimo-qa-assesment-joshua-ornopia

## 📌 Overview

This project contains automated test cases for the Messages feature of the Actimo platform, covering core flows such as message creation, publishing, validation, and analytics.

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/actimo-tests.git
cd actimo-tests
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Run Tests

### Run all tests

```bash
npx playwright test
```

### Run specific test file

```bash
npx playwright test tests/message.e2e.spec.ts
```

### Run in headed mode (see browser)

```bash
npx playwright test --headed
```

---

## 📊 Test Coverage

Automated scenarios include:

* End-to-End message creation → publish flow
* Publish validation (no recipients)
* Analytics visibility after publish

---

## 📁 Project Structure

```
.
├── pages/              # Page Object Models
├── tests/              # Test specs
├── docs/               # Test Plan & documentation
├── playwright.config.ts
├── package.json
└── README.md
```

---

## 🧠 Notes

* Tests are written using Playwright Test Runner
* Page Object Model (POM) design pattern is used
* Focus is on high-priority, business-critical flows

---

