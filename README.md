# NoDaNorm-MedCare

## Project Description

The NoDaNorm MedCare - healthcare domain, web application for hospitals, doctors, patients.
It is a comprehensive and user-friendly platform that empowers doctors and small medical enterprises by providing efficient patient management, 
financial management, and resource management capabilities, thereby streamlining their operations and improving overall healthcare delivery.
The application aims to revolutionize the way doctors and small medical enterprises operate by providing a comprehensive set of features and tools that cater to their specific needs. 
With this application, MedCare empowers healthcare professionals to focus more on patient care and less on administrative tasks, ultimately enhancing the quality of healthcare 
services provided.

---

### **AQA technology stack:**

- Main programming language: Typescript;
- Test frameworks: WDIO;
- Reporter: Allure;

Allure report link - "Will be here soon"

---

## Coding & naming conventions

- Xpath locators to find elements;
- 'Backticks' to surround string data (single quotes inside);
- Extensions in file names - .page.ts' for page objects;
- For methods: lowerCamelCase;
- For global const: CONSTANT_CASE;
- For class instances: lowerCamelCase;
- For folder and file names: kebab-case;
- For interfaces: CamelCase;

---

## Available Scripts

After cloning in the project directory, you can run:

### 

## Git flow

### Pushing directly to main is not allowed!

### Before commit\MR, you should definitely run your tests to make sure they work

- Before creating a MR, make sure that your tests are in working order, when creating, set the "E2E review required" label;
- After creating the MR, we conduct a cross-review with our colleagues from the automation team. If all comments are corrected - team members confirm the MR;
- Then MR will be checked by our tech lead;
- After the "E2E review OK" was set, you can merge into the main branch (squash your commits first if you have many);

### Branch Naming:

_EXAMPLE:_ ui/PN-3263/US-1.10W

- type of tests (ui, api)
- task number from Jira
- user story

---

You can learn more in the [NoDaNorm MedCare Home](https://wiki.andersenlab.com/display/NDM/NoDaNorm+MedCare+Home)

