export const DEPARTMENTS= [
    'CS',
    'Math',
    'English',
    'Art',
    'Medicine',
    'Law',
    'Finance',
    'Accounting',
    'Physics',
    'Chemistry'
]

export const DEPARTMENT_OPTIONS =DEPARTMENTS.map((dept) =>({
    value : dept,
    label: dept
}))