# Edunify - School Database Management

## Summary

This mini-project involves designing a school database management system using Next.js and MySQL. The project consists of two main pages: one for inputting and storing school data, and another for fetching and displaying the stored data.


## Technologies Used

- Next.js
- React.js
- MySQL
- Prisma ORM
- Tailwind CSS
- React Hook Form

## Database Schema

### MySQL Table: `schools`

| Field      | Type           |
|------------|----------------|
| id         | INT AUTO_INCREMENT |
| name       | TEXT           |
| address    | TEXT           |
| city       | TEXT           |
| state      | TEXT           |
| contact    | INT            |
| image      | TEXT           |
| email_id   | TEXT           |

## Project Structure

- `app/`
  - `page.js` (Home Page)
  - `addSchool.jsx` (Add School Page)
- `components/`
  - `Navbar.jsx`
- `public/`
  - `schoolImages/` (Directory for storing school images)
- `pages/api/`
  - `add.js` (API route for adding a school)
  - `get.js` (API route for fetching schools)
- `prisma/`
  - `schema.prisma` (Prisma schema file)

