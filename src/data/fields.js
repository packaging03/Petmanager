export default [
  {
    // A column that needs custom formatting,
    // calling formatter 'fullName' in this app
    key: 'name',
    label: 'Full Name',
    formatter: value => {
      return `${value.first} ${value.last}`
    }
  },
  // A regular column
  'age',
  {
    // A regular column with custom formatter
    key: 'sex',
    formatter: value => {
      return value.charAt(0).toUpperCase()
    }
  },
  {
    // A virtual column with custom formatter
    key: 'birthYear',
    label: 'Calculated Birth Year',
    formatter: (value, key, item) => {
      return new Date().getFullYear() - item.age
    }
  }
]
