import axios from 'axios';

export default axios.create({
  url: 'https://data.usajobs.gov/api/codelist/'
});
